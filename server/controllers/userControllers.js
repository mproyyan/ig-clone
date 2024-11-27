const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Users = require("../models/Users");

const signup = (req, res) => {
  const { username, fullName, password, confirmPassword } = req.body;

  Users.findOne({ username }).then((user) => {
    if (user) return res.status(400).json({ msg: "User already used" });

    if (password !== confirmPassword)
      return res.status(400).json({ msg: "Password doesnt match" });

    const newUser = new Users({
      username,
      fullName,
      password,
    });

    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(newUser.password, salt, (err, hash) => {
        newUser.password = hash;
        newUser.save().then((result) => {
          const token = jwt.sign(
            { username: result.username, id: result._id },
            "test"
          );
          res.status(200).json({ result, token });
        });
      });
    });
  });
};

const signin = (req, res) => {
  const { username, password } = req.body;

  Users.findOne({ username }).then((user) => {
    if (!user) return res.status(400).json({ msg: "User doesnt exist" });

    bcrypt.compare(password, user.password).then((isMatch) => {
      if (!isMatch) return res.status(400).json({ msg: "Invalid credentials" });

      const token = jwt.sign({ username: user.username, id: user._id }, "test");
      res.json({ result: user, token });
    });
  });
};

const updateUser = (req, res) => {
  const { id } = req.params;
  const userEdit = req.body;

  Users.findOneAndUpdate({ _id: id }, userEdit, {
    new: true,
  }).then((updatedUser) => res.json(updatedUser));
};

const getUserLogin = (req, res) => {
  const { id } = req.params;

  Users.findById(id).then((user) => {
    res.json(user);
  });
};

const visitUser = (req, res) => {
  const { username } = req.params;

  Users.find({ username }).then((user) => res.json(user));
};

const getUsers = (req, res) => {
  Users.find().then((users) => res.json(users));
};

const followUser = (req, res) => {
  const { id } = req.params;
  Users.findById(id).then((user) => {
    const hasFollowed = user.followers.findIndex(
      (_id) => String(_id) === String(req.userId)
    );

    if (hasFollowed === -1) {
      user.followers.push(req.userId);
    } else {
      user.followers = user.followers.filter(
        (_id) => String(_id) !== String(req.userId)
      );
    }

    user.save();
    const followedUser = user._id;

    Users.findOne({ _id: req.userId }).then((userActive) => {
      const index = userActive.following.findIndex(
        (_id) => String(_id) === String(followedUser)
      );
      if (index === -1) {
        userActive.following.push(followedUser);
      } else {
        userActive.following = userActive.following.filter(
          (_id) => String(_id) !== String(followedUser)
        );
      }

      userActive.save().then((userUpdated) => res.json(userUpdated));
    });
  });
};

module.exports = {
  signup,
  signin,
  updateUser,
  getUserLogin,
  followUser,
  getUsers,
  visitUser,
};
