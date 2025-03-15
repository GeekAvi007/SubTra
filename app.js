import express from "express";
import { PORT } from "./config/env.js";


const app = express();

app.get('/', (req, res) => {
    res.send('Welcome to the subsctiption tracking API');
});

app.listen(PORT, () => {
    console.log(`Tracker Running on http://localhost:${PORT}`)
})

export default app