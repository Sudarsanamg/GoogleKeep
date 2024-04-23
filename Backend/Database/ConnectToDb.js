const mongoose = require('mongoose');

const url="mongodb+srv://sudarsanamg762004:sxX9SkZIH4HwjCwJ@cluster0.maidvrt.mongodb.net/GoogleKeep?retryWrites=true&w=majority&appName=Cluster0"

const ConnectToDb = async () => {
    try {
        await mongoose.connect(url);
        console.log('Connected to the database');
    } catch (error) {
        console.log('Error:', error.message);
    }
}

module.exports = ConnectToDb;