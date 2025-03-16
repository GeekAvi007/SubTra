import mongoose from "mongoose";

import { DB_URI, NODE_ENV } from "../config/env.js";

if(!DB_URI){
    throw new Error('Please define the MONGODB_URI environment variable inside .env.<development/production>.local')
}

export const connectToDatabase = async() => {
    try {
        await mongoose.connect(DB_URI)
        console.log(`Connected to DB in ${NODE_ENV} mode`)
    } catch (error) {
        console.log('Error Connection to DB', error)
        process.exit(1);
    }
}