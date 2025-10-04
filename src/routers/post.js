import {Router} from "express";
import {getPosts, getPostById, addPost, updatePost, deletePost} from "../controller/post"

const router = Router();

router.get("/", getPosts);
router.post("/", addPost);

export default router;