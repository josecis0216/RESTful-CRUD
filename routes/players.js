const express = require('express');
const { body } = require('express-validator/check');

const feedController = require('../controllers/players');

const router = express.Router();

// GET /player/favTeam
router.get('/favTeam', feedController.getFavTeam);

router.post('/postFavTeam', feedController.createTeam);

// GET /player/posts
router.get('/posts', feedController.getPosts);

// POST /player/post
router.post('/post', feedController.createPost);

// GET 1 PLAYER /player/post/id
router.get('/post/:postId', feedController.getPost);

// UPDATE /player/post/id
router.post('/post/:postId', feedController.updatePost);

// DELETE /player/post/id
router.delete('/post/:postId', feedController.deletePost);

module.exports = router;
