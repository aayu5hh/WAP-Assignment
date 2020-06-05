$(function() {
  $(".main-div").hide();
  $("#all-post").hide();
  base_url = "https://jsonplaceholder.typicode.com";
  $("#submit").click(showDetails);
  $("#show-post-btn").click(showAllPost);
  $("#all-post").on("click", "div #myCmt", showComments);
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

  $("#show-post-btn").hide();

}

function parsePostJson(myJson, id) {
  $("#all-post").append(
      $("<h2>").text(`All Posts of ${$("#userName").text()}`).css("text-decoration", "underline")
  );

  for(let i=0; i<myJson.length; i++){

    if(myJson[i].userId == id){
      $("#all-post")
      .append($("<p>").addClass("postTitle").text(myJson[i].title))
      .append($("<q>").text(myJson[i].body))
      .append($("<button>").addClass(`${myJson[i].id}-cmt`).attr("id", `myCmt`).text("Comments"))
      .append($("<hr>"));
    }

  }
  $("#all-post").show();
}

function showComments() {
  let postid = parseInt($(this).attr("class"));
  fetch(`${base_url}/comments?postid=${postid}`)
    .then(response => response.json())
    .then(myJson => {
      for(let i=0; i<myJson.length; i++){

        if(myJson[i].postId==postid) {
          $("<div>")
          .addClass("commentDiv")
          .text(myJson[i].body)
          .insertAfter(`[class=${$(this).attr("class")}]`);
        }

      }
    })
    .catch(err => alert(err));
    $(`[class=${$(this).attr("class")}]`).hide();

}
