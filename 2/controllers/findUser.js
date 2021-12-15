const { join } = require("path");
const { writeFile, writeFileSync } = require("fs");
const userData = require("../data/userData.json");

const findUser = (username) => {
    let user = userData.find((obj) => obj.username === username);
    return user;
}

module.exports = findUser;