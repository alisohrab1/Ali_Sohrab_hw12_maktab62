const { join } = require("path");
const { writeFile, writeFileSync } = require("fs");
const userData = require("../data/userData.json");
const admin = {
  username: "admin",
  password: "admin1234",
  email: "admin@protonmail.com",
  gender: "female",
  isLoggedIn: false,
  role: "admin",
};
const creatAdmin = function () {
  let found = userData.filter((user) => user.role === "admin");
  if (found.length !== 0) {
    return;
  }
  userData.push(admin);
  writeFileSync(
    join(__dirname, "../data/userData.json"),
    JSON.stringify(userData),
    (error) => {
      if (error)
        return console.log(
          `error while writing files , messsage : ${error.message}`
        );
    }
  );
};




module.exports = creatAdmin;
