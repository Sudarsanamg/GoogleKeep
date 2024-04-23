const model = require('../Database/Models/UserModel');

const Update = async (req, res) => {
    const { email, text } = req.body;
    try {
        const user = await model.findOne({ email: email });
        if (!user) {
            return res.status(400).json({ message: "User does not exist" });
        }
        user.array.push(text);
        await user.save();
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal server error" });
    }
}
module.exports = Update;

