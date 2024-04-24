import mongoose from "mongoose";

mongoose.connect("mongodb://localhost:27017/personalWeb");

const postSchema = new mongoose.Schema({
    title: String,
    description: String,
    date: Date,
    content: String,
});

const Post = mongoose.model("Post", postSchema);

export default Post;
