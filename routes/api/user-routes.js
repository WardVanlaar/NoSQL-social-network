const router = require("express").Router();

const {
  getAllUser,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  removeFriend,
} = require("../../controllers/user-controller");

// Set up GET all and POST at /api/user
router.route("/").get(getAllUser).post(createUser);

// Set up GET one, PUT, and DELETE at /api/user/:id
router.route("/:id").get(getUserById).put(updateUser).delete(deleteUser);

// Add a friend to user's friend list
router.route('/:userId/friends/:friendId').post(addFriend);

// Delete a friend from user's friend list
router.route('/:userId/friends/:friendId').delete(removeFriend);

module.exports = router;