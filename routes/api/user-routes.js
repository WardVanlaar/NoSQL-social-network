const router = require("express").Router();

const {
  getAllUser,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  deleteFriend,
} = require("../../controllers/user-controller");

// Set up GET all and POST at /api/user
router.route("/").get(getAllUser).post(createUser);

// Set up GET one, PUT, and DELETE at /api/user/:id
router.route("/:userId").get(getUserById).put(updateUser).delete(deleteUser);

// add new friend api/user/:id/friends/:friendId
router.route("/:userId/friends/:friendId").post(addFriend).delete(deleteFriend);

module.exports = router;
