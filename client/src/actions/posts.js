// Importing action type constants to identify different types of actions.
import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from '../constants/actionTypes';

// Importing API functions from the api module.
import * as api from '../api/index.js';

// Action creator functions for interacting with the API and dispatching actions.

// Action creator function to fetch all posts from the API.
export const getPosts = () => async (dispatch) => {
  try {
    // Fetching posts using the fetchPosts function from the api module.
    const { data } = await api.fetchPosts();
    
    // Dispatching a FETCH_ALL action with the fetched data as payload.
    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    // Logging any error messages to the console.
    console.log(error.message);
  }
};

// Action creator function to create a new post in the API.
export const createPost = (post) => async (dispatch) => {
  try {
    // Creating a new post using the createPost function from the api module.
    const { data } = await api.createPost(post);
    
    // Dispatching a CREATE action with the created post data as payload.
    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    // Logging any error messages to the console.
    console.log(error.message);
  }
};

// Action creator function to update an existing post in the API.
export const updatePost = (id, post) => async (dispatch) => {
  try {
    // Updating an existing post using the updatePost function from the api module.
    const { data } = await api.updatePost(id, post);
    
    // Dispatching an UPDATE action with the updated post data as payload.
    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    // Logging any error messages to the console.
    console.log(error.message);
  }
};

// Action creator function to like a post in the API.
export const likePost = (id) => async (dispatch) => {
  try {
    // Liking a post using the likePost function from the api module.
    const { data } = await api.likePost(id);
    
    // Dispatching a LIKE action with the updated post data (with likes incremented) as payload.
    dispatch({ type: LIKE, payload: data });
  } catch (error) {
    // Logging any error messages to the console.
    console.log(error.message);
  }
};

// Action creator function to delete a post from the API.
export const deletePost = (id) => async (dispatch) => {
  try {
    // Deleting a post using the deletePost function from the api module.
    await api.deletePost(id);
    
    // Dispatching a DELETE action with the deleted post's ID as payload.
    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    // Logging any error messages to the console.
    console.log(error.message);
  }
};
