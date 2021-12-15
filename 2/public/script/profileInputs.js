function checkEmptyInput() {
    console.log($("#modalUsername").val());
    console.log($("#modalPassword").val());
    if ($("#modalPassword").val() === "" || $("#modalUsername").val() === "") {
      alert("empty input");
      return false;
    }
    // console.log("valid");
    return true;
  }
  
  function checkPassword() {
    const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/g;
    const result = $("#modalPassword").val().match(regex);
    //   console.log(`result of regex : ${result}`);
    if (result === null) {
      alert("invalid password");
      return false;
    }
    return true;
  }
  
  function checkEmail() {
    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    const result = $("#modalEmail").val().match(regex);
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