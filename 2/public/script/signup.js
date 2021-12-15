$("#signup").submit(function (e) {
  e.preventDefault();
  // alert("hello")

  const data = {
    username: $("#username").val(),
    password: $("#password").val(),
    email: $("#email").val(),
    gender: $("#gender").val()
  };

  // console.log(data);

  //validate inputs
  if (!(validateInputs())) {
    return;
  }

  $.ajax({
    type: "POST",
    url: "http://localhost:5000/user/signup",
    data,
    success: function (response) {
      console.log(response);
      window.location.href = "http://localhost:5000/user/login";
    },
    error: function(xhr, status, error) {
        alert(xhr.responseText);
      },
  });


});
