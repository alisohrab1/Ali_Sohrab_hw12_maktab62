$("#saveBtn").click(function () {
  const data = {
    username: $("#modalUsername").val(),
    password: $("#modalPassword").val(),
    email: $("#modalEmail").val(),
    gender: $("#modalGender").val(),
    id: $("#username").val(),
  };

  if (!validateInputs()) {
    return;
  }

  $.ajax({
    type: "POST",
    url: "http://localhost:5000/user/profile",
    data,
    success: function (response) {
      console.log(response);
      window.location.href =
        "http://localhost:5000/user/update/" + data.username;
    },
    error: function (xhr, status, error) {
      if(xhr.responseText === "redirect"){
        window.location.href =
        "http://localhost:5000/"
      }else{
        alert(xhr.responseText);

      }
    },
  });
});

$("#logoutBtn").click(function () {
  const data = {
    username: $("#username").val(),
  };

  $.ajax({
    type: "POST",
    url: "http://localhost:5000/user/logout",
    data,
    success: function (response) {
      console.log(response);
      window.location.href = "http://localhost:5000/user/login";
    },
    error: function (xhr, status, error) {
      alert(xhr.responseText);
    },
  });



});
