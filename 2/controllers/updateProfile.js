const { join } = require("path");
const { writeFile, writeFileSync } = require("fs");
const userData = require("../data/userData.json");
// console.log(userData);

// myobj = {
//     id: "9825071",
//     username: "fdsd",
//     email: "cdds",
//     gender: "ds",
//     password: "password"
// }

const updateUser = (obj) => {
  // console.log(obj);
  let index = userData.findIndex((user) => user.username === obj.id);
  if (userData[index]['isLoggedIn'] !== true) return false;
  
  userData[index]["username"] = obj.username;
  userData[index]["password"] = obj.password;
  userData[index]["email"] = obj.email;
  userData[index]["gender"] = obj.gender;
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
};

// updateUser(myobj);
// console.log('after');
// console.log(userData);

module.exports = updateUser;
