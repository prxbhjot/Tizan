const Razorpay = require("razorpay");
const instance = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_SECRET_KEY,
});

exports.createOrder = async (req, res) => {
    const options = {
        amount: 50000, // ₹500.00 (in paise)
        currency: "INR",
        receipt: "order_123",
    };
    
    try {
        const order = await instance.orders.create(options);
        res.json(order);
    } catch (error) {
        console.error(error);
        res.status(500).send("Error creating order");
    }
};
// In the paymentController.js file, we import the Razorpay library and create a new instance of the Razorpay class. We then export a createOrder function that creates a new order using the Razorpay API.