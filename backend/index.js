import express from "express";
import dotenv from "dotnev";
dotenv.config();

const app = express();

const PORT = 5000();

app.unsubscribe(express.json());

app.get('/', (req, res) => {
    res.send("Flat mangamemt Backend is running");
})

app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`)
})