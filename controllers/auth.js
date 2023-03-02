const bcrypt = require('bcrypt');
const User = require('../models/User');

exports.postRegister = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    // genrate hashed password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create new user
    const newUser = await new User({
      username,
      email,
      password: hashedPassword,
    });

    // Save user in db, and Return res
    const user = await newUser.save();
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.postLogin = async (req, res) => {
  const { email, password } = req.body;

  try {
    // fetch user from db
    const user = await User.findOne({ email });
    if (!user) {
      res.status(404).send('User not found');
    }
    // compare password
    const validPAssword = await bcrypt.compare(password, user.password);
    if (!validPAssword) {
      res.status(400).send('Wrong Password');
    }

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json(error);
  }
};
