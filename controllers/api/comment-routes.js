const router = require('express').Router();
const { Comment } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {     
    try {
      const newComment = await Comment.create({
        commentContent: req.body.commentContent,
        postId: req.body.postId,
        userId: req.session.user_id,
      });
      res.json(newComment);
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports = router;