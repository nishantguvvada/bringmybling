const mongoose = require("mongoose");
require("dotenv").config();

mongoose.connect(process.env.MONGODB_URI);

const ProductSchema = new mongoose.Schema({
    name: String,
    description: String
})

const PriceSchema = new mongoose.Schema({
    unit_amount: Number,
    currency: String,
    product: ProductSchema.path('_id')
})

const UserSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String,
});

const Product = mongoose.model("Product", ProductSchema);
const Price = mongoose.model("Price", PriceSchema);
const User = mongoose.model("User", UserSchema);

module.exports = {
    Product,
    Price,
    User
}