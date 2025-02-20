const User = require("../models/User");
const bcrypt = require("bcrypt");

exports.signup = async (req, res) => {
    const { name, email, password, userType } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    
    const user = new User({ name, email, password: hashedPassword, userType });
    await user.save();
    res.status(201).send("User created successfully");
};

exports.login = async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (user && await bcrypt.compare(password, user.password)) {
        // Here you would typically create a session or a JWT token
        res.send("Login successful");
    } else {
        res.status(401).send("Invalid email or password");
    }
};