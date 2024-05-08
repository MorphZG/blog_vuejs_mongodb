import mongoose from "mongoose";
import express from "express";
import cors from "cors";
import Post from "./models/Post.js";

const app = express();
// if front and back end are hosted on different domains
// enable Cross Origin Resourse Sharing
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/personalWeb");

app.post("/api/newpost", async (req, res) => {
    try {
        let newPost = new Post({
            createdAt: new Date(),
            title: req.body.title,
            content: req.body.content,
            author: req.body.author,
            tags: req.body.tags,
            category: req.body.category,
        });
        let savedPost = await newPost.save();
        res.sendStatus(201);
    } catch (err) {
        console.log(err);
    }
});

app.listen(3030, () => {
    console.log("Server running at 3030");
});
