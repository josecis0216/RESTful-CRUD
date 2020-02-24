const express = require('express');
const { body } = require('express-validator/check');

const feedController = require('../controllers/feed');

const router = express.Router();

// GET /player/posts
router.get('/posts', feedController.getPosts);

// POST /player/post
router.post(
  '/post',
  feedController.createPost
);

router.get('/post/:postId', feedController.getPost);

router.post(
  '/post/:postId',
  [
    body('title')
      .trim()
      .isLength({ min: 5 }),
    body('content')
      .trim()
      .isLength({ min: 5 })
  ],
  feedController.updatePost
);

router.post('/post/:postId', feedController.deletePost);

module.exports = router;
