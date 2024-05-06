const User = require("../Models/user");

async function getAllUsers(req, res) {
  const users = await User.find({});
  return res.json(users);
}
async function getUserById(req, res) {
  const user = await User.findById(req.params.id);
  if (!user) return res.status(404).json({ error: "user not found" });
  return res.json(user);
}
async function updateUserById(req, res) {
  // Edit user by id
  await User.findByIdAndUpdate(req.params.id, { lastName: "Gurjar" });
  return res.json({ status: "success" });
}
async function deleteUserById(req, res) {
  // Edit user by id
  await User.findByIdAndDelete(req.params.id);
  return res.json({ status: "success" });
}

async function createNewUser(req, res) {
  // create new user
  const user = req.body;
  if (
    !user.first_name ||
    !user.last_name ||
    !user.email ||
    !user.gender ||
    !user.job_title
  ) {
    return res.status(400).json({ msg: "all filds are required.." });
  }
  await User.create({
    firstName: user.first_name,
    lastName: user.last_name,
    gender: user.gender,
    jobTitle: user.job_title,
    email: user.email,
  });
  return res.status(201).json({ msg: "success" });
}
module.exports = {
  getAllUsers,
  getUserById,
  updateUserById,
  deleteUserById,
  createNewUser,
};
