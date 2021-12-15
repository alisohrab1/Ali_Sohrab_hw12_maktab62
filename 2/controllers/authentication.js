const { join } = require("path");
const { writeFile, writeFileSync } = require("fs");
const userData = require("../data/userData.json");
const signupValidation = require("./signupValidation.js");
const {
  loginValidation,
  modalLoginValidation,
} = require("./loginValidation.js");
const { changeToLoggedIn, changeToLoggedOut } = require("./changeStatus.js");
const updateProfile = require("./updateProfile.js");
const findUser = require("./findUser");
const profileEditValidation = require("./profileEditValidation");
const isLoggedIn = require("./isLoggedIn");
const { Session } = require("inspector");
var session;

const signPage = (req, res) => {
  res.render(join(__dirname, "../views/signupPage.ejs"));
};

const signup = (req, res) => {
  if (!signupValidation(req.body)) {
    return res.status(400).send("bad request,server side - something is wrong with your input");
  }

  let newUser = req.body;

  // let found = userData.find((user) => user.username === newUser.username);

  // if (found) return res.status(400).send("user exists");

  (newUser["isLoggedIn"] = false), userData.push(newUser);

  writeFile(
    join(__dirname, "../data/userData.json"),
    JSON.stringify(userData),
    (error) => {
      if (error)
        return console.log(
          `error while writing files , messsage : ${error.message}`
        );
    }
  );

  res.send("ok");
};

const loginPage = (req, res) => {
  // res.send("hello")
  res.render(join(__dirname, "../views/loginPage.ejs"));
};

const login = (req, res) => {
  //if request is from modal
  if (req.body.isFromModal === "true") {
    if (!modalLoginValidation(req.body)) {
      return res.status(400).send("incorrect username or password");
    }
    changeToLoggedIn(req.body);
    return res.send(modalLoginValidation(req.body));
  }
  //validation
  if (!loginValidation(req.body)) {
    return res.status(400).send("incorrect username or password");
  }
  changeToLoggedIn(req.body);
  session = req.session;
  session.data = loginValidation(req.body);
  session.userLoggedIn = true;

  res.send("recieved the post request");
};

const profilePage = (req, res) => {
  res.render("profile", { data: session.data });
  // res.render("profile", {
  //   data: {
  //     username: "ali",
  //     email: "ali@gmail.com",
  //     gender: "male",
  //     password: "12141aaaaA",
  //   },
  // });
};

const profile = (req, res) => {
  if(!isLoggedIn(req.body)){
    return res.status(400).send("redirect");
  }

  if (!profileEditValidation(req.body)) {
    return res.status(400).send("bad request,server side something is wrong with your input");
  }
  updateProfile(req.body);
  res.send("ok");
};

const updatePage = (req, res) => {
  let user = findUser(req.params.id);
  console.log(user);
  res.render("profile", { data: user });
};

const logout = (req,res) => {
  // console.log(req.body);
  changeToLoggedOut(req.body);
  res.send("ok")
};

module.exports = {
  signPage,
  signup,
  loginPage,
  login,
  profilePage,
  profile,
  updatePage,
  logout
};
