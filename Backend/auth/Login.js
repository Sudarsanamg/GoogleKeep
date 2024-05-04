const model = require('../Database/Models/UserModel');
const bcrypt = require('bcryptjs');

const Login = async (req, res) => {
    const { email, password } = req.body;
    if(email==='' || password===''){
        return res.status(400).json({ message: "Please fill all the fields" });
    }
    try {
        // Check if user with the provided email exists
        const user = await model.findOne({ email: email});
        console.log(user);
        const isPasswordCorrect= await bcrypt.compare(password,user.password)
        if (!user) {
            return res.status(400).json({ message: "User does not exist" });
        }
        if(!isPasswordCorrect){
            return res.status(400).json({ message: "Invalid credentials" });
        }

        return res.status(200).json("Login successful");
        
        

    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal server error" });
    }
}
module.exports = Login;