const bcrypt = require('bcrypt');
const User = require('../models/User');

exports.updateUser = async (req, res) => {
  const { id } = req.params;

  if (req.body.userId === id || req.body.isAdmin) {
    if (req.body.password) {
      try {
        // genrate hashed password
        const salt = await bcrypt.genSalt(10);
        req.body.password = await bcrypt.hash(req.body.password, salt);
      } catch (error) {
        res.status(500).json(error);
      }
    }
    try {
      const user = await User.findByIdAndUpdate(id, { $set: req.body });
      res.status(200).json('Account has been updated');
    } catch (error) {
      res.status(500).json(error);
    }
  } else {
    return res.status(403).json('You can update only your account');
  }
};

exports.deleteUser = async (req, res) => {
  const { id } = req.params;

  if (req.body.userId === id || req.body.isAdmin) {
    try {
      const user = await User.findByIdAndDelete(id);
      res.status(200).json('Account has been deleted');
    } catch (error) {
      res.status(500).json(error);
    }
  } else {
    return res.status(403).json('You can delete only your account');
  }
};

exports.getUser = async (req, res) => {
  const { id } = req.params;

  try {
    const user = await User.findById(id);
    const { password, updatedAt, ...other } = user._doc;
    res.status(200).json(other);
  } catch (error) {
    return res.status(403).json('No user found');
  }
};
