$("#loginForm").submit(function (e) {
  e.preventDefault();

  const data = {
    isFromModal: false,
    username: $("#username").val(),
    password: $("#password").val(),
  };

  // console.log(data);

  //validate inputs
  if (!checkEmptyInput()) {
    return;
  }

  $.ajax({
    type: "POST",
    url: "http://localhost:5000/user/login",
    data,
    success: function (response) {
      console.log(response);
      window.location.href = "http://localhost:5000/user/profile";
    },
    error: function (xhr, status, error) {
      alert(xhr.responseText);
    },
  });
});

$("#saveBtn").click(function () {
  const data = {
    isFromModal: true,
    username: $("#modalUsername").val(),
    email: $("#modalEmail").val(),
  };

  // console.log(data);

  if (!checkEmptyInputModal()) {
    return;
  }
  $.ajax({
    type: "POST",
    url: "http://localhost:5000/user/login",
    data,
    success: function (response) {
      console.log(response);
      window.location.href = "http://localhost:5000/user/update/" + data.username;
    },
    error: function (xhr, status, error) {
      alert(xhr.responseText);
    },
  });
});
