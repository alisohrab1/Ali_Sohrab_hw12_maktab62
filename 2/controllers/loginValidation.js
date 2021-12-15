const userData = require("../data/userData.json");
// console.log(userData);

function checkInputType(obj) {
  if (Object.values(obj).some((item) => typeof item !== "string")) {
    console.log("only strings are accepted");
    return false;
  }
  return true;
}

function checkEmptyInput(obj) {
  if (Object.values(obj).some((item) => item.trim() === "")) {
    console.log("empty");
    return false;
  }
  return true;
}

function hasUsername(obj) {
  if (!obj.hasOwnProperty("username")) {
    console.log("no username");
    return false;
  }

  return true;
}

function checkPassword(obj) {
  if (!obj.hasOwnProperty("password")) {
    console.log("no password");
    return false;
  }
  return true;
}

function checkEmail(obj) {
  if (!obj.hasOwnProperty("email")) {
    console.log("no email");
    return false;
  }
  return true;
}

function isAvailable(obj) {
  let found = userData.find((user) => user.username === obj.username);
  if (!found) {
    return false;
  }
  if (found.password === obj.password) {
    return found;
  }

  return false;
}

function isAvailableModal(obj) {
  let found = userData.find((user) => user.username === obj.username);
  if (!found) {
    return false;
  }
  if (found.email === obj.email) {
    return found;
  }

  return false;
}

myobj = {
  username: "ali",
  password: "141421",
};

const loginValidation = function (obj) {
  if (
    checkInputType(obj) &&
    checkEmptyInput(obj) &&
    hasUsername(obj) &&
    checkPassword(obj)
  ) {
    return isAvailable(obj);
  }
  return false;
};

const modalLoginValidation = (obj) => {
  if (
    checkInputType(obj) &&
    checkEmptyInput(obj) &&
    hasUsername(obj) &&
    checkEmail(obj)
  ) {
    return isAvailableModal(obj);

  }
  return false;
};

module.exports = {loginValidation , modalLoginValidation};
