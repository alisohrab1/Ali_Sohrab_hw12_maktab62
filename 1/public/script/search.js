$("#searchForm").submit(function (e) {
  e.preventDefault();
  if( $("#keyword").val().trim() === ""){
      alert("empty input");
      return;
  }
  const data = {
    keyword: $("#keyword").val(),
  };
  console.log(data);
  $.ajax({
      type: "POST",
      url: "http://localhost:5000/home",
      data,
      success: function (response) {
        console.log(response);
        window.location.href = "http://localhost:5000/home?id=search";
      },
      error: function (xhr, status, error) {
        alert(xhr.responseText);
      },
    });
});
