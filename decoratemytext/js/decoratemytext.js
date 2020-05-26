function increaseFont() {
  var textElem = document.getElementById('allText');

  var currentSize = window.getComputedStyle(textElem, null).getPropertyValue("font-size");

  var newSize = parseInt(currentSize) + 2;

  textElem.style.fontSize = newSize + "pt";

  setInterval(function(){
    var currentSize = window.getComputedStyle(textElem, null).getPropertyValue("font-size");
    var newSize = parseInt(currentSize) + 2;
    textElem.style.fontSize = newSize + "pt"
  }, 500)
}

function onTick() {
  checkElem = document.getElementById("bling");

  if(checkElem.checked){
    document.getElementById('allText').style.fontWeight = "bold";
    document.getElementById('allText').style.color = "green";
    document.getElementById('allText').style.textDecoration = "underline";
  } else {
    document.getElementById('allText').style = "";
  }

}
