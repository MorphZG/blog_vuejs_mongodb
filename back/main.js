import mongoose from "mongoose";
import express from "express";
import cors from "cors";
import Post from "./models/Post.js";

const app = express();

app.use(cors()); // if front and back end are hosted on different domains
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/personalWeb");

// routes
app.post("/api/posts", async (req, res) => {
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

        console.log(`saved post: \n${savedPost}`);

        res.sendStatus(201);
    } catch (err) {
        console.log(err);
    }
});

app.get("/api/posts", async (req, res) => {
    try {
        let results = await Post.find({});
        res.send(results);
    } catch (err) {
        console.log(err);
    }
});

app.listen(3030, () => {
    console.log("Server running at 3030");
});
