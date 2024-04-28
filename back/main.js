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
    console.log(req.body);
    try {
        let title = req.body.title;
        let content = req.body.content;
        console.log(title, content);

        let newPost = new Post({
            title: title,
            Author: null,
            date: Date(),
            content: content,
            tags: null,
            category: null,
        });
        await newPost.save();
        res.send("New post saved!");
    } catch (err) {
        console.error(err);
        res.send("You fucked up!");
    }
});

app.listen(3030, () => {
    console.log("Server running at 3030");
});
