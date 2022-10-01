const router = require('express').Router();
const { Post, User, Comment } = require('../models/');
const withAuth = require('../utils/auth');

// get all posts for homepage
router.get('/', async (req, res) => {
  try {
    
    const postData = await Post.findAll({
      include: [User],
    });
    
    const posts = postData.map((post) => post.get({ plain: true }));
    
    res.render('homepage', { posts, loggedIn: req.session.loggedIn});
  } catch (err) {
    res.status(500).json(err);
  }
});  

// get single post
router.get('/post/:id', withAuth, async (req, res) => {
    try {
      
      const postData = await Post.findOne({
        
        where: {id: req.params.id},
        include: [
          User,
          {
            model: Comment,
            include: [User],
          },
        ],
      });
  
      if (postData) {
        
        const post = postData.get({ plain: true });      
        res.render('postByID', { post, loggedIn: req.session.loggedIn});
      } else {
        res.status(404).end();
      }
    } catch (err) {
      res.status(500).json(err);
    }
  });

//Route to login or signup page if not logged in on homepage
router.get('/login', (req, res) => {     
    res.render('login');
  });

router.get('/signup', (req, res) => {    
    res.render('signup');
  });
   
 
  
  module.exports = router;

