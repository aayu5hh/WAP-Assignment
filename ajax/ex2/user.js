$(function() {
  $(".main-div").hide();
  $("#all-post").hide();
  base_url = "https://jsonplaceholder.typicode.com";
  $("#submit").click(showDetails);
  $("#show-post-btn").click(showAllPost);
});

function showDetails() {
  let id = $("#userid").val();

  if(parseInt(id)<0 || parseInt(id)>10){
    alert("Id must be between 1 and 10");
  } else {

    fetch(`${base_url}/users/${id}`)
      .then(response => response.json())
      .then(myJson => {
        $("#userName").text(myJson.username);
        $("#userEmail").text(myJson.email);
        $("#userAddr").text(myJson.address.street + ",  " + myJson.address.suite + ",  " + myJson.address.city);
      })
      .catch(err => alert(err));

    $(".main-div").show();
  }
}

function showAllPost() {
  let id = $("#userid").val();

  fetch(`${base_url}/posts?userid=${id}`)
    .then(response => response.json())
    .then(myJson => parsePostJson(myJson, id))
    .catch(err => alert(err));

}

function parsePostJson(myJson, id) {
  for(let i=0; i<myJson.length; i++){

    if(myJson[i].userId == id){
      $("#all-post").append($("<p>").addClass("postTitle").text(myJson[i].title))
      .append($("<q>").text(myJson[i].body))
      .append($("<button>").attr("value", `${id}`).attr("class", "myCmt").text("Comments"));

    }

  }
  $("#all-post").show();
}
