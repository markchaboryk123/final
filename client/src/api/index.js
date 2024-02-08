// Importing the axios library for making HTTP requests.
import axios from 'axios';

// Define the base URL for the API endpoint.
const url = 'http://localhost:5000/posts';

// Exporting functions to interact with the posts API.

// Function to fetch posts from the API.
export const fetchPosts = () => axios.get(url);

// Function to create a new post in the API.
export const createPost = (newPost) => axios.post(url, newPost);

// Function to like a post by its ID in the API.
export const likePost = (id) => axios.patch(`${url}/${id}/likePost`);

// Function to update an existing post by its ID in the API.
export const updatePost = (id, updatedPost) => axios.patch(`${url}/${id}`, updatedPost);

// Function to delete a post by its ID in the API.
export const deletePost = (id) => axios.delete(`${url}/${id}`);
