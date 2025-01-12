const express = require("express");
const cors = require("cors");
const { Product, Price } = require("./db/db.js");
const { default: Stripe } = require("stripe");
require("dotenv").config();

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    return res.status(200).json({message: "server is running"});
});

app.post("/create-product", async (req, res) => {

    try {
        const product = {
            name: req.body.name,
            description: req.body.description
        };
    
        const new_product = new Product(product);
    
        await new_product.save();

        const price = {
            unit_amount: req.body.unit_amount,
            currency: req.body.currency,
            product: new_product._id
        }

        const new_price = new Price(price);

        await new_price.save();

        return res.status(200).json({message: "Product added!"});
    } catch(err) {
        return res.status(400).json({error: err});
    }

});


app.post("/create-checkout-session", async (req, res) => {
    try {

        const line_items = await Promise.all(req.body.items.map(async (item) => {
            const price = await Price.findOne({product: item.id});
            const product = await Product.findById(item.id);
            return {
                price_data: {
                    currency: price.currency,
                    unit_amount: price.unit_amount,
                    product_data: {
                        name: product.name,
                    },
                },
                quantity: item.quantity
            }
        }));

        console.log("line items", line_items);

        const session = await stripe.checkout.sessions.create({
            mode: 'payment',
            line_items: line_items,
            payment_method_types: ["card"],
            success_url: `${process.env.CLIENT_URI}/success`,
            cancel_url: `${process.env.CLIENT_URI}/cancel`,
        });

        return res.status(200).json({message: "Session created!", url: session.url});
    } catch(err) {
        return res.status(400).json({error: err});
    }
});

app.listen(3000);