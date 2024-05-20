import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    createdAt: { type: Date, default: Date.now, required: true },
    title: { type: String, required: true },
    content: { type: String, required: true },
    author: { type: String },
    tags: [String],
});

const Post = mongoose.model("Post", postSchema);

export default Post;
