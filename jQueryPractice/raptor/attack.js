$(function() {
  prepopulate();
  $("#add").click(populate);
  $("#kill").click(kill);
  $("#cleanup").click(clearDead);
  $("#stomp").click(stomp);
  $("#enrage").click(enrageRaptor);
  $("#patrol").click(patrol);

});

function prepopulate() {
  $("#people .person").addClass("boy");
}

function getGender() {
  return $("input:checked").val();
}

function populate() {
  let gender = getGender();
  for(let i=0; i<5; i++) {
    $("#people").append(
      $("<div>").addClass("person " + gender)
    );
  }
}

function kill() {
  let gender = getGender();
  splat(gender);
}

function splat(gender) {
  let peeps = $('#people .' + gender);
  for(let i = 0; i < peeps.length/5 ; i++) {
    let randomIndex = Math.floor(Math.random() * peeps.length);
    $(peeps[randomIndex]).removeClass(gender).addClass("splat");
  }
}

function clearDead() {
  $("#people .splat").remove();
}

function stomp() {
  $("#raptor").css("top", function(idx, old){
    return ((parseInt(old)+75) % 150) + "px";
  });
  splat("boy");
  splat("girl");
}

function enrageRaptor() {
  if($("#raptor").hasClass("enrage")) {

    $("h1").removeClass("enrage")
    $("#raptor").removeClass("enrage").width(function(idx, old) {
      return old - 50;
    });

  } else {

    $("h1").first().addClass("enrage");
    $("#raptor").addClass("enrage").width(function(idx, old) {
      return old + 50;
    });
  }
}

let timer;
function patrol() {
  clearInterval(timer);
  timer = setInterval(patrolRight, 20);
}

function patrolRight() {

  $("#raptor").css("left", function(idx, old){
    if(parseInt(old) >= 300) {
      clearInterval(timer);
      timer = setInterval(patrolLeft, 20);
    }
    return parseInt(old) + 4 + 'px';
  });
}

function patrolLeft() {
  $("#raptor").css("left", function(idx, old){
    if(parseInt(old) <= 10){
      clearInterval(timer);
      $(this).css({
        "top": "5px",
        "left": "10px"
      });
    }
    return parseInt(old) - 4 + 'px';
  });
}
