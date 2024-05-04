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
        let title = req.body.title;
        let author = req.body.author;
        let content = req.body.content;
        let current_date = new Date().toLocaleDateString("en-GB");
        let tags = [];
        let category = req.body.category;

        let newPost = new Post({
            title: title,
            author: author,
            date: current_date,
            content: content,
            tags: tags,
            category: category,
        });
        let savedPost = await newPost.save();
        console.log(savedPost);
        res.sendStatus(201);
    } catch (err) {
        console.error(err);
        res.send("You fucked up!");
    }
});

app.listen(3030, () => {
    console.log("Server running at 3030");
});
