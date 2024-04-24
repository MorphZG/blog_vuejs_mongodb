import express from "express";
import cors from "cors";
import Post from "./PostModel.js";

const app = express();
// if front and back end are hosted on different domains
// enable Cross Origin Resourse Sharing
app.use(cors());

console.log(Post);
