const userData = require("../data/userData.json");


const isLoggedIn = function (obj) {
  let found = userData.find((user) => user.username === obj.id);
  if (found.isLoggedIn !== true) {
    return false;
  }

  return true;
};


module.exports = isLoggedIn;