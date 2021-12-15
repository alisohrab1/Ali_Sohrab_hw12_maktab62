function checkEmptyInput(username,email) {
  console.log(username.val());
  console.log(email.val());
  if (username.val() === "" || email.val() === "") {
    alert("empty input");
    return false;
  }
  // console.log("valid");
  return true;
}


function checkEmail(email) {
    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    const result = email.val().match(regex);
    //   console.log(`result of regex : ${result}`);
    if (result === null) {
      alert("invalid email");
      return false;
    }
    return true;
  }