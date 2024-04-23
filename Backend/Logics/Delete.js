const model = require('../Database/Models/UserModel');

const Delete = async (req, res) => {
    const { email, index } = req.body;

    try {
        const user = await model.findOne({ email });

        if (!user) {
            return res.status(404).json('User not found');
        }

        // Remove the element at the specified index from the array
        const removedItem = user.array.splice(index, 1);

        // Save the modified document
        await user.save();

        return res.status(200).json({ removedItem, newArray: user.array });
    } catch (error) {
        console.error(error);
        return res.status(500).json('Internal server error');
    }
}

module.exports = Delete;
