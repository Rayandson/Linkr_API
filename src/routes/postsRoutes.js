import { Router } from "express";
import {  createPost,  deletePostById,  getPosts,  getPostsByHashtag } from "../controllers/postsControllers.js";
import {  hashtagAlreadyRegisteredValidation,  hashtagExistenceValidation } from "../middlewares/hashtagsMiddlewares.js";
import { validateDeletePost, validatePostSchema } from "../middlewares/postsMiddlewares.js";

export const postsRouter = Router();

<<<<<<< HEAD
postsRouter.post("/posts", validatePostSchema, hashtagAlreadyRegisteredValidation, createPost);
// postsRouter.post("/posts", validatePostSchema, createPost);
=======
postsRouter.post(
  "/posts",
  validatePostSchema,
  hashtagAlreadyRegisteredValidation,
  createPost
);

>>>>>>> main
postsRouter.get("/posts", getPosts);
postsRouter.get("/posts/:hashtag", hashtagExistenceValidation, getPostsByHashtag);
postsRouter.delete("/posts/delete/:id", validateDeletePost, deletePostById)
