const { join } = require("path");
const { writeFile, writeFileSync } = require("fs");
const userData = require("../data/userData.json");
// console.log(userData);

// myobj = {
//     "username" : "ali"
// }

const changeToLoggedIn = (obj) => {
    let index = userData.findIndex((user => user.username === obj.username));
    userData[index]['isLoggedIn'] = true;
    // console.log(userData);
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
}

const changeToLoggedOut = function(obj){
    let index = userData.findIndex((user => user.username === obj.username));
    userData[index]['isLoggedIn'] = false;
    // console.log(userData);
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
}

// changeToLoggedIn(myobj)

module.exports = {changeToLoggedIn ,changeToLoggedOut };