import mongoose from 'mongoose';

// Define the schema for a post
const postSchema = mongoose.Schema({
    title: String, // Title of the post
    message: String, // Message content of the post
    creator: String, // Creator of the post
    tags: [String], // Tags associated with the post
    selectedFile: String, // File attached to the post (e.g., image)
    likeCount: {
        type: Number, // Number of likes for the post
        default: 0, // Default value for like count is 0
    },
    createdAt: {
        type: Date, // Date and time when the post was created
        default: new Date(), // Default value is the current date and time
    },
});

// Create a Mongoose model based on the post schema
var PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage; // Export the PostMessage model
