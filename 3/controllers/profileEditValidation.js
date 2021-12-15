const userData = require("../data/userData.json");


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

function isUnique(obj) {
    if(obj.username  === obj.id) return true;
  let found = userData.find((user) => user.username === obj.username);
  if (found) return false;
  return true;
}

function checkPassword(obj) {
  const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/g;

  if (!obj.hasOwnProperty("password")) {
    console.log("no password");
    return false;
  }

  const result = obj.password.match(regex);

  if (result === null) {
    console.log("invalid password");
    return false;
  }
  return true;
}

function checkEmail(obj) {
  const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

  if (!obj.hasOwnProperty("email")) {
    console.log("no email");
    return false;
  }
  const result = obj.email.match(regex);
  if (result === null) {
    console.log("invalid email");
    return false;
  }
  return true;
}

function checkGender(obj) {
  if (!obj.hasOwnProperty("gender")) {
    console.log("no gender");
    return false;
  }
  if (
    obj.gender !== "male" &&
    obj.gender !== "female" &&
    obj.gender !== "other"
  ) {
    console.log("invalid gender");
    return false;
  }

  return true;
}

const editValidation = function (obj) {
  if (
    checkInputType(obj) &&
    checkEmptyInput(obj) &&
    hasUsername(obj) &&
    checkPassword(obj) &&
    checkEmail(obj) &&
    checkGender(obj) &&
    isUnique(obj) 
  ) {
    return true;
  }
  return false;
};

module.exports = editValidation;
