const { join } = require("path");
const { writeFile, writeFileSync } = require("fs");
const userData = require("../data/userData.json");

const deleteUser = function(username){
    let index = userData.findIndex((user => user.username === username));
    userData.splice(index, 1);
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

module.exports = deleteUser;