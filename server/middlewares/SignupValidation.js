const zod = require("zod");

const SignupSchema = zod.object({
    username: zod.string(),
    email: zod.string().email(),
    password: zod.string().min(6)
});

const signupValidation = (req, res, next) => {
    const response = SignupSchema.safeParse(req.body);
    if (response.success) {
        next();   
    } else {
        return res.status(400).json({error: "Incorrect Credentials"});
    }
}

module.exports = { signupValidation };