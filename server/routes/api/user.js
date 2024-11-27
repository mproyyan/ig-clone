const { Router } = require("express");
const {
  signup,
  signin,
  updateUser,
  getUserLogin,
  followUser,
  getUsers,
  visitUser,
} = require("../../controllers/userControllers");
const { auth } = require("../../middleware/auth");

const router = Router();

router.post("/signup", signup);
router.post("/signin", signin);
router.get("/get-users", getUsers);
router.get("/:username", visitUser);
router.post("/:id/follow", auth, followUser);
router.get("/:id/userLogin", getUserLogin);
router.patch("/:id/setting", updateUser);

module.exports = router;
