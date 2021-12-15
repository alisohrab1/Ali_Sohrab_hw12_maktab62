const userData = require("../data/userData.json");
const {upateUser , updateUserAdmin} = require("./updateProfile");
const deleteUser = require("./deleteUser");

const isAdmin = (username) => {
  let found = userData.find((user) => user.username === username);
  if (found.role !== "admin") return false;
  return true;
};

const checkInputs = (username, email) => {
  const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  //username
  let found = userData.find((user) => user.username === username);
  //   console.log(found);
  if (found) return false;

  const result = email.match(regex);
  if (result === null) {
    console.log("invalid email");
    return false;
  }
  return true;

  return true;
};

const adminPage = (req, res) => {
  if (!isAdmin(req.params.username))
    return res
      .status(403)
      .send("you do no have permission to access this data");
  return res.render("adminPanel", { data: userData });
};

const adminUpdate = (req, res) => {
  console.log(req.body);
  //validate inputs
  if (!checkInputs(req.body.username, req.body.email))
    return res.status(404).send(" something wrong with your data");
  //find user and update it
  updateUserAdmin(req.body);
  res.send("working sdfs");
};

const adminDelete =(req,res) => {
  console.log("working");
  deleteUser(req.body.id);
  res.send("ok")

}

module.exports = { adminPage, adminUpdate ,adminDelete };
