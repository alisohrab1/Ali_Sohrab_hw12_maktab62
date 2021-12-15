$(".saveBtn").on("click", function () {
  console.log("running");
  let id = this.value;

  if (
    !(
      checkEmptyInput($(`#modalUsername${id}`), $(`#modalEmail${id}`)) &&
      checkEmail($(`#modalEmail${id}`))
    )
  ) {
    return false;
  }

  const data = {
    id : $(`#tableUsername${id}`).text(),
    password : $(`#tablePassword${id}`).text(),
    username: $(`#modalUsername${id}`).val(),
    email: $(`#modalEmail${id}`).val(),
    gender: $(`#modalGender${id}`).val(),
  };
  console.log(data);

  $.ajax({
    type: "POST",
    url: "http://localhost:5000/user/panel",
    data,
    success: function (response) {
      console.log(response);
      window.location.href = "http://localhost:5000/user/panel/admin";
    },
    error: function (xhr, status, error) {
      alert(xhr.responseText);
    },
  });

  
});

$(".delBtn").on("click" , function(){

  let id = this.value;
  const data = {
    id : $(`#tableUsername${id}`).text(),
  };
  $.ajax({
    type: "POST",
    url: "http://localhost:5000/user/delete",
    data,
    success: function (response) {
      console.log(response);
      window.location.href = "http://localhost:5000/user/panel/admin";
    },
    error: function (xhr, status, error) {
      alert(xhr.responseText);
    },

});

});