import express from 'express';

// Import controller functions
import { getPosts, getPost, createPost, updatePost, likePost, deletePost } from '../controllers/posts.js';

const router = express.Router();

// Define routes and associate them with controller functions
router.get('/', getPosts); // Route to get all posts
router.post('/', createPost); // Route to create a new post
router.get('/:id', getPost); // Route to get a single post by ID
router.patch('/:id', updatePost); // Route to update an existing post by ID
router.delete('/:id', deletePost); // Route to delete a post by ID
router.patch('/:id/likePost', likePost); // Route to like a post by ID

export default router;
