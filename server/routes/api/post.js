const { Router } = require("express");
const { auth } = require("../../middleware/auth");
const router = Router();

const {
  getPosts,
  uploadPost,
  lovePost,
  getPostsByCreatorId,
} = require("../../controllers/postControllers");

router.get("/home", auth, getPosts);
router.post("/upload", auth, uploadPost);
router.get("/gallery/:username", getPostsByCreatorId);
router.patch("/:id/lovePost", auth, lovePost);

module.exports = router;
