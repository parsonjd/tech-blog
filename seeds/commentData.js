
const { Comment } = require('../models');

const commentData = [
    {
        commentContent: "How about that!",
        userId: 2,
        postId: 3,
        
    },
    {
        commentContent: "Take it from me!)",
         userId: 3,
        postId: 3,
        
    },
    {
        commentContent: "I like it!",
        userId: 1,
        postId: 2,
        
    },
    {
        commentContent: "Good job!",
         userId: 2,
        postId: 1,
        
    },
    {
        commentContent: "Where is the beef?",
         userId: 3,
        postId: 1,
        
    },
    {
        commentContent: "Not that bad.",
        userId: 3,
        postId: 2,
        
    },
    {
        commentContent: "Great stuff you know.",
        userId: 2,
        postId: 3,
        
    },
    {
        commentContent: "Thanks.",
         userId: 1,
        postId: 3,
        
    }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;