const Post = require('../models/Post');

exports.createPost = async (req, res) => {
  const newPost = new Post(req.body);
  try {
    const savedPost = await newPost.save();
    res.status(200).json(savedPost);
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.updatePost = async (req, res) => {
  const { id } = req.params;
  const { userId } = req.body;
  try {
    const post = await Post.findById(id);
    if (post.userId === userId) {
      await post.updateOne({ $set: req.body });
      res.status(200).json('The post has been updated..');
    } else {
      res.status(403).json('You can only update your Posts');
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.deletePost = async (req, res) => {
  const { id } = req.params;
  const { userId } = req.body;
  try {
    const post = await Post.findById(id);
    if (post.userId === userId) {
      await post.deleteOne();
      res.status(200).json('The post has been deleted..');
    } else {
      res.status(403).json('You can only update your Posts');
    }
  } catch (error) {
    res.status(500).json(error);
  }
};
