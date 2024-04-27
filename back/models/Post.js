import mongoose from "mongoose";

mongoose.connect("mongodb://localhost:27017/personalWeb");

const postSchema = new mongoose.Schema({
    title: String,
    Author: String,
    date: Date,
    content: String,
    tags: [String],
    category: String,
});

const Post = mongoose.model("Post", postSchema);

export default Post;
