const model = require('../Database/Models/UserModel');
const bcrypt = require('bcryptjs');

const Register = async (req, res) => {
    const { username, email, password } = req.body;
    console.log(req.body);
    try {


        // Check if user with the provided email already exists
        const user = await model.findOne({ email: email });
        if (user) {
            return res.status(400).json({ message: "User already exists" });
        }

        // Create a new user
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        await model.create({ username, email, password:hashedPassword });
        return res.status(200).json("Created user successfully");
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal server error" });
    }
}

module.exports = Register;
