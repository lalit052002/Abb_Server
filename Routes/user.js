const express = require("express");
const router = express.Router();
const {
  getAllUsers,
  getUserById,
  deleteUserById,
  updateUserById,
  createNewUser,
} = require("../Controllers/user");

//-------get all users and create new user-------------------
router.route("/").get(getAllUsers).post(createNewUser);

//-----------perform crud ----------------
router
  .route("/:id")
  .get(getUserById)
  .patch(updateUserById)
  .delete(deleteUserById);

module.exports = router;
