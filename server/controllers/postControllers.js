const mongoose = require("mongoose");
const Posts = require("../models/Posts");
const Users = require("../models/Users");

const getPosts = (req, res) => {
  Users.findById(req.userId).then((user) => {
    const userFollowing = user.following;
    let temp;
    let filteredPost = [];

    Posts.find()
      .sort({ createdAt: -1 })
      .then((post) => {
        const dataUser = post.filter(
          (dataUser) => String(dataUser.creatorId) === String(req.userId)
        );
        for (let i = 0; i < userFollowing?.length; i++) {
          temp = post.filter(
            (data) => String(data.creatorId) === String(userFollowing[i])
          );
          filteredPost.push(...temp);
        }
        filteredPost.unshift(...dataUser);
        res.json(filteredPost);
      });
  });
};

// const getUserGallery = (req, res) => {
//   Posts.find({ creatorId: req.userId }).then((data) => res.json(data));
// };

const uploadPost = (req, res) => {
  const post = req.body;
  const newPost = new Posts({
    ...post,
    creatorId: req.userId,
    createdAt: new Date().toISOString(),
  });

  newPost.save().then((post) => res.json(post));
};

const lovePost = async (req, res) => {
  const { id } = req.params;

  if (!req.userId) {
    return res.json({ message: "Unauthenticated" });
  }

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send("No post with that id");

  Posts.findById(id).then((post) => {
    const index = post.loves.findIndex((id) => id === req.userId);
    if (index === -1) {
      post.loves.push(req.userId);
    } else {
      post.loves = post.loves.filter((id) => id !== String(req.userId));
    }

    Posts.findOneAndUpdate({ _id: id }, post, {
      new: true,
    }).then((updatedPost) => res.json(updatedPost));
  });
};

getPostsByCreatorId = (req, res) => {
  const { username } = req.params;

  Users.find({ username }).then((user) => {
    const id = user[0]._id;
    const userId = String(id);

    Posts.find({ creatorId: userId })
      .sort({ createdAt: -1 })
      .then((post) => res.json(post));
  });
};

module.exports = {
  getPosts,
  uploadPost,
  lovePost,
  getPostsByCreatorId,
};
