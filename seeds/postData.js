const { Post } = require('../models');

const postdata =
[
  {
    "title": "Javascript Fundamentals",
    "content": "Remember the basics and practice a lot",
    "userId": 1
  },
  {
    "title": "Sequelize",
    "content": "Database management at its core",
    "userId": 2
  },
  {
    "title": "MVC Structure",
    "content": "Models, Views, Controllers",
    "userId": 3
  }
];

const seedPost = () => Post.bulkCreate(postdata);

module.exports = seedPost;