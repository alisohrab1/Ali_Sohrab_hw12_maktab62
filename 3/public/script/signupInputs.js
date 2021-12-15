function checkEmptyInput() {
  console.log($("#username").val());
  console.log($("#password").val());
  if ($("#password").val() === "" || $("#username").val() === "") {
    alert("empty input");
    return false;
  }
  // console.log("valid");
  return true;
}

function checkPassword() {
  const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/g;
  const result = $("#password").val().match(regex);
  //   console.log(`result of regex : ${result}`);
  if (result === null) {
    alert("invalid password");
    return false;
  }
  return true;
}

function checkEmail() {
  const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  const result = $("#email").val().match(regex);
  //   console.log(`result of regex : ${result}`);
  if (result === null) {
    alert("invalid email");
    return false;
  }
  return true;
}

function validateInputs(){
    if(checkEmptyInput() && checkPassword() && checkEmail()){
        return true;
    }
    return false;
}