const fs = require('fs');
const path = require('path');

const { validationResult } = require('express-validator/check');

const Post = require('../models/post');
const Team = require('../models/team')

exports.getFavTeam = (req, res, next) => {
  let totalItems;
  Team.find()
    .countDocuments()
    .then(count => {
      totalItems = count;
      return Team.find()
    })
    .then(posts => {
      res
        .status(200)
        .json({
          message: 'Fetched teams successfully.',
          posts: posts,
          totalItems: totalItems
        });
    })
    .catch(err => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};

exports.createTeam = (req, res, next) => {
  const name = req.body.name;
  const trophies = req.body.trophies;
  const post = new Team({
    name: name,
    trophies: trophies
  });
  post
    .save()
    .then(result => {
      res.status(201).json({
        message: 'Team created successfully!',
        post: result
      });
    })
    .catch(err => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};


exports.getTeams = (req, res, next) => {
  let totalItems;
  Team.find()
    .countDocuments()
    .then(count => {
      totalItems = count;
      return Team.find()
    })
    .then(teams => {
      res
        .status(200)
        .json({
          message: 'Fetched posts successfully.',
          teams: teams,
          totalItems: totalItems
        });
    })
    .catch(err => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};


exports.getPosts = (req, res, next) => {
  let totalItems;
  Post.find()
    .countDocuments()
    .then(count => {
      totalItems = count;
      return Post.find()
    })
    .then(posts => {
      res
        .status(200)
        .json({
          message: 'Fetched posts successfully.',
          posts: posts,
          totalItems: totalItems
        });
    })
    .catch(err => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};

exports.createPost = (req, res, next) => {
  const name = req.body.name;
  const position = req.body.position;
  const team = req.body.team
  const jersey = req.body.team
  const post = new Post({
    name: name,
    position: position,
    team: team,
    jersey: jersey,
    creator: { name: 'Jose' }
  });
  post
    .save()
    .then(result => {
      res.status(201).json({
        message: 'Post created successfully!',
        post: result
      });
    })
    .catch(err => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};

exports.getPost = (req, res, next) => {
  const postId = req.params.postId;
  Post.findById(postId)
    .then(post => {
      if (!post) {
        const error = new Error('Could not find post.');
        error.statusCode = 404;
        throw error;
      }
      res.status(200).json({ message: 'Post fetched.', post: post });
    })
    .catch(err => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};

exports.updatePost = (req, res, next) => {
  const postId = req.params.postId;
  const name = req.body.name;
  const position = req.body.position;
  const team = req.body.team;
  const jersey = req.body.jersey;
  Post.findById(postId)
    .then(post => {
      if (!post) {
        const error = new Error('Could not find post.');
        error.statusCode = 404;
        throw error;
      }
      post.name = name;
      post.position = position;
      post.team = team;
      post.jersey = jersey;
      return post.save();
    })
    .then(result => {
      res.status(200).json({ message: 'Post updated!', post: result });
    })
    .catch(err => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};

exports.deletePost = (req, res, next) => {
  const postId = req.params.postId;
  Post.findById(postId)
    .then(post => {
      if (!post) {
        const error = new Error('Could not find post.');
        error.statusCode = 404;
        throw error;
      }
      return Post.findByIdAndRemove(postId);
    })
    .then(result => {
      console.log(result);
      res.status(200).json({ message: 'Deleted post.' });
    })
    .catch(err => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};

