function checkEmptyInput() {
  console.log($("#username").val());
  console.log($("#password").val());
  if ($("#password").val() === "" || $("#username").val() === "") {
    alert("empty input");
    return false;
  }
  console.log("valid");
  return true;
}

function checkEmptyInputModal() {
  if ($("#modalEmail").val() === "" || $("#modalUsername").val() === "") {
    alert("empty input");
    return false;
  }
  const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  const result = $("#modalEmail").val().match(regex);
  //   console.log(`result of regex : ${result}`);
  if (result === null) {
    alert("invalid email");
    return false;
  }
  console.log("valid");
  return true;
}
