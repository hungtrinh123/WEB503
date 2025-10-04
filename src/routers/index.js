import { Router } from "express";
import postRouter from "./post";
 import productRouter from "./products";
 import userRouter from "./user";

const router = Router();


router.get("/", (req, res) => {
    res.send("Hello, chao cac ban");
});

router.use ("/posts", postRouter);
 router.use ("/users", userRouter);
 

 router.use ("/products" , productRouter);


export default router;
