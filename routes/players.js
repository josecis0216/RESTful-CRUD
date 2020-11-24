const express = require('express');
const { body } = require('express-validator/check');

const feedController = require('../controllers/players');

const router = express.Router();

// POST /postFavTeam
router.post('/postFavTeam', feedController.createTeam);

// GET /teams
router.get('/teams', feedController.getTeams);

// GET /favTeam/id
router.get('/favTeam/:teamId', feedController.getFavTeam);

// UPDATE /team/id
router.post('/team/:teamId', feedController.updateTeam);

// DELETE /player/team/id
router.delete('/team/:teamId', feedController.deleteTeam);

// GET /posts
router.get('/posts', feedController.getPosts);

// POST /post
router.post('/post', feedController.createPost);

// GET 1 PLAYER /post/id
router.get('/post/:postId', feedController.getPost);

// UPDATE /post/id
router.post('/post/:postId', feedController.updatePost);

// DELETE /post/id
router.delete('/post/:postId', feedController.deletePost);

module.exports = router;
