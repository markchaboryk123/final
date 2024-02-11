import express from 'express';

import PostMessage from '../models/postMessage.js';

const router = express.Router();

// Get all posts
export const getPosts = async (req, res) => { 
    try {
        // Fetch all post messages from the database
        const postMessages = await PostMessage.find();
                
        res.status(200).json(postMessages);
    } catch (error) {
        // Handle error if fetching posts fails
        res.status(404).json({ message: error.message });
    }
}

// Get a single post by ID
export const getPost = async (req, res) => { 
    const { id } = req.params;

    try {
        // Find a post by ID
        const post = await PostMessage.findById(id);
        
        res.status(200).json(post);
    } catch (error) {
        // Handle error if fetching the post fails
        res.status(404).json({ message: error.message });
    }
}

// Create a new post
export const createPost = async (req, res) => {
    const { title, message, selectedFile, creator, tags } = req.body;

    // Create a new post message instance
    const newPostMessage = new PostMessage({ title, message, selectedFile, creator, tags })

    try {
        // Save the new post message to the database
        await newPostMessage.save();

        res.status(201).json(newPostMessage );
    } catch (error) {
        // Handle error if saving the post fails
        res.status(409).json({ message: error.message });
    }
}

// Update an existing post by ID
export const updatePost = async (req, res) => {
    const { id } = req.params;
    const { title, message, creator, selectedFile, tags } = req.body;
    
    // Create an updated post object
    const updatedPost = { creator, title, message, tags, selectedFile, _id: id };

    // Update the post in the database
    await PostMessage.findByIdAndUpdate(id, updatedPost, { new: true });

    res.json(updatedPost);
}

// Delete a post by ID
export const deletePost = async (req, res) => {
    const { id } = req.params;

    // Delete the post from the database
    await PostMessage.findByIdAndRemove(id);

    res.json({ message: "Post deleted successfully." });
}

// Like a post by ID
export const likePost = async (req, res) => {
    const { id } = req.params;
    
    // Find the post by ID
    const post = await PostMessage.findById(id);

    // Increment the like count of the post
    const updatedPost = await PostMessage.findByIdAndUpdate(id, { likeCount: post.likeCount + 1 }, { new: true });
    
    res.json(updatedPost);
}

export default router;
