import app from './app';
import dotenv from 'dotenv';
import connectDB from './infrastructure/adapters/mongodb';

// Environment config
dotenv.config();

// Db Connection
connectDB();

app.listen(process.env.NODE_PORT, () => console.log(`Server running on port ${process.env.NODE_PORT}`));
