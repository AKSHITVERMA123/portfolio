import express from 'express';
import mongoose from "mongoose";
import cors from "cors";
import User from './Portfolio/model/User.js';

const app = express();
const hostname = 'localhost';
const port = 4000;

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/User")
    .then(() => console.log("✅ MongoDB Connected"))
    .catch(err => console.log("❌ DB Error:", err));

app.get("/User", async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
        console.log("\nUser Fetched Successfully!\n" + users[users.length - 1]);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Failed to fetch data" });
    }
});

app.post("/User", async (req, res) => {
    try {
        const { name, email, message } = req.body;
        const newUser = new User({ name, email, message });
        await newUser.save();
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Failed to save data" });
    }
});

app.listen(port, hostname, () => {
    console.log(`Server is running at http://${hostname}:${port}`);
});
