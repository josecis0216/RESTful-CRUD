const fs = require('fs');
const path = require('path');

const { validationResult } = require('express-validator/check');

const Post = require('../models/post');
const Team = require('../models/team');
const Resume = require('../models/resume');

exports.createJob = (req, res, next) => {
  const job = req.body.job;
  const position = req.body.position;
  const description = req.body.description;
  const startDate = req.body.startDate;
  const endDate = req.body.endDate;
  const jobReturn = new Resume({
    job: job,
    position: position,
    description: description,
    startDate: startDate,
    endDate: endDate,
    creator: { name: 'Jose Cisneros' }
  });
  jobReturn
    .save()
    .then(result => {
      res.status(201).json({
        message: 'Job created successfully!',
        job: result
      });
    })
    .catch(err => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};

exports.getJobs = (req, res, next) => {
  let totalJobs;
  Resume.find()
    .countDocuments()
    .then(count => {
      totalJobs = count;
      return Resume.find()
    })
    .then(jobs => {
      res
        .status(200)
        .json({
          message: 'Fetched jobs successfully.',
          jobs: jobs,
          totalJobs: totalJobs
        });
    })
    .catch(err => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};

exports.getJob = (req,res,next) => {
  const jobId = req.params.jobId;
  Resume.findById(jobId)
    .then(job => {
      if (!job) {
        const error = new Error('Could not find job.');
        error.statusCode = 404;
        throw error;
      }
      res.status(200).json({ message: 'Job fetched.', job: job });
    })
    .catch(err => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};

exports.updateJob = (req, res, next) => {
  const jobId = req.params.jobId;
  const job = req.body.job;
  const position = req.body.position;
  const description = req.body.description;
  const startDate = req.body.startDate;
  const endDate = req.body.endDate;
  Resume.findById(jobId)
    .then(jobReturn => {
      if (!jobReturn) {
        const error = new Error('Could not find job.');
        error.statusCode = 404;
        throw error;
      }
      jobReturn.job = job;
      jobReturn.position = position;
      jobReturn.description = description;
      jobReturn.startDate = startDate;
      jobReturn.endDate = endDate;
      return jobReturn.save();
    })
    .then(result => {
      res.status(200).json({ message: 'Job updated!', jobreturn: result });
    })
    .catch(err => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};

exports.deleteJob = (req, res, next) => {
  const jobId = req.params.jobId;
  Resume.findById(jobId)
    .then(jobReturn => {
      if (!jobReturn) {
        const error = new Error('Could not find job.');
        error.statusCode = 404;
        throw error;
      }
      return Resume.findByIdAndRemove(jobId);
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


exports.getFavTeam = (req, res, next) => {
  const teamId = req.params.teamId;
  Team.findById(teamId)
    .then(team => {
      if (!team) {
        const error = new Error('Could not find team.');
        error.statusCode = 404;
        throw error;
      }
      res.status(200).json({ message: 'Team fetched.', team: team });
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

exports.updateTeam = (req,res, next) => {
  const teamId = req.params.teamId;
  const name = req.body.name
  const trophies = req.body.trophies;
  const image = req.body.image;
  Team.findById(teamId)
    .then(response => {
      if (!response) {
        const error = new Error('Could not find team.');
        error.statusCode = 404;
        throw error;
      }
      response.name = name
      response.trophies = trophies;
      response.image = image;
      return response.save();
    })
    .then(result => {
      res.status(200).json({ message: 'Team updated!', response: result });
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
  const image = req.body.image;
  const team = new Team({
    name: name,
    trophies: trophies,
    image: image
  });
  team
    .save()
    .then(result => {
      res.status(201).json({
        message: 'Team created successfully!',
        team: result
      });
    })
    .catch(err => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};


exports.deleteTeam = (req, res, next) => {
  const teamId = req.params.teamId;
  Team.findById(teamId)
    .then(team => {
      if (!team) {
        const error = new Error('Could not find team.');
        error.statusCode = 404;
        throw error;
      }
      return Team.findByIdAndRemove(teamId);
    })
    .then(result => {
      console.log(result);
      res.status(200).json({ message: 'Deleted team.' });
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

