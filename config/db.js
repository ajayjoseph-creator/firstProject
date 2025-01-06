//configure the database



const mongoose = require('mongoose');

// Connect to MongoDB
const connectDB = async () => {
    try {
        const mongoURI = process.env.MONGO_URI;
        
        if (!mongoURI) {
            console.error('Mongo URI is not defined');
            process.exit(1);
        }

        // Connect without deprecated options
        await mongoose.connect(mongoURI);
        console.log('MongoDB connected successfully!');
    } catch (err) {
        console.error('Error connecting to MongoDB:', err.message);
        process.exit(1);
    }
};

module.exports = connectDB;



