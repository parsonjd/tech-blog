const router = require('express').Router();
const { Post, User, Comment } = require('../models/');
const withAuth = require('../utils/auth');

// Get all of your posts
router.get('/', withAuth, async (req, res) => {
  try {    
    //Get all posts where the current user is logged in
    const postData = await Post.findAll({
      where:{
        user_id: req.session.user_id
    },
    include: [{
      model: Comment,                
      include: {
          model: User,
          attributes: ['username']
      }
  },
  {
      model: User,
      attributes: ['username']
  }
]
})   
    const posts = postData.map((post) => post.get({ plain: true }));
console.log(posts);    
    res.render('dashboard', { posts, loggedIn: req.session.loggedIn} );
  } catch (err) {
    res.redirect('/');
  }
});

// AFTER CLICK ON NEW POST BUTTON
router.get('/new', (req, res) => {
  
  res.render('new-post');
});


router.get('/edit/:id', withAuth, async (req, res) => {
  try {    
    const postData = await Post.findByPk(req.params.id);

    if (postData) {      
      const post = postData.get({ plain: true });        
      res.render('edit-post', { post });
    } else {
      res.status(404).end();
    }
  } catch (err) {
    res.redirect('login');
  }
});

module.exports = router;

