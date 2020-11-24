const express = require('express');
const { body } = require('express-validator/check');

const feedController = require('../controllers/players');

const router = express.Router();

// POST /postJob
router.post('/postJob', feedController.createJob);

// GET /jobs
router.get('/jobs', feedController.getJobs);

// GET 1 job /job/id
router.get('/job/:jobId', feedController.getJob);

// UPDATE /job/id
router.post('/job/:jobId', feedController.updateJob);

// DELETE /player/team/id
router.delete('/job/:jobId', feedController.deleteJob);

// GET /posts
// router.get('/posts', feedController.getPosts);

// POST /post
// router.post('/post', feedController.createPost);

// GET 1 PLAYER /post/id
// router.get('/post/:postId', feedController.getPost);

// UPDATE /post/id
// router.post('/post/:postId', feedController.updatePost);

// DELETE /post/id
// router.delete('/post/:postId', feedController.deletePost);

module.exports = router;
