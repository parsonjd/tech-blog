const router = require('express').Router();
const { Post } = require('../../models');
const sequelize = require('../../config/connection');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {    
    try {
      const newPost = await Post.create({
        title: req.body.title, 
        content: req.body.content,
        userId: req.session.user_id });

      console.log("Here is the new post: ",  newPost);

      res.json(newPost);
       } catch (err) {
         console.log('IT FAILED!', err);
      res.status(500).json(err);
    }
  });

  router.put('/:id', withAuth, async (req, res) => {
    try {      
      const updatePost = await Post.update(req.body, {
        where: {
          id: req.params.id,
        },
      });
  
      if (updatePost) {
        res.status(200).json(updatePost);
      } else {
        res.status(404).json({message: 'No post found for this id!'});
      }
    } catch (err) {
      res.status(500).json(err);
    }
  });

  router.delete('/:id', withAuth, async (req, res) => {
    try {
      const delPost = Post.destroy({
        where: {
          id: req.params.id,
        },
      });
  
      if (delPost) {
        res.status(200).json(delPost);
      } else {
        res.status(404).json({message: "No post found for this id!"});
      }
    } catch (err) {
      res.status(500).json(err);
    }
  });





module.exports = router;