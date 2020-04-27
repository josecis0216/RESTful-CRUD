const express = require('express');
const { body } = require('express-validator/check');

const feedController = require('../controllers/players');

const router = express.Router();

// GET /player/postFavTeam
router.post('/postFavTeam', feedController.createTeam);

// GET /player/teams
router.get('/teams', feedController.getTeams);

// GET /player/favTeam/id
router.get('/favTeam/:teamId', feedController.getFavTeam);

// UPDATE /player/team/id
router.post('/team/:teamId', feedController.updateTeam);

// DELETE /player/team/id
router.delete('/team/:teamId', feedController.deleteTeam);

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
