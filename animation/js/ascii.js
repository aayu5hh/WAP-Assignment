(function() {
  "use strict";

  let frameSpeed = 250;
  let myInterval;
  let boxValue;
  let counter = 0;

  window.onload = function() {
    let textarea = document.getElementById("textarea");

    let start = document.getElementById("start");
    start.onclick = showAnimation;

    let stop = document.getElementById("stop");
    stop.disabled = true;
    stop.onclick = stopAnimation;

    let anim = document.getElementById("anim");
    anim.onchange = selectAnimation;

    let textareaFont = document.getElementById("fontSize");
    textareaFont.onchange = increaseFont;

    let turbo = document.getElementById("turbo");
    turbo.onchange = speedItUp;
  }

  function selectAnimation() {
    textarea.value = ANIMATIONS[anim.value];
  }

  function showAnimation() {

    boxValue = textarea.value;

    start.disabled = true;
    document.getElementById("stop").disabled = false;
    anim.disabled = true;

    animate();
  }

  function animate() {

    let frames = boxValue.split("=====\n");
    let length = frames.length;
    myInterval = setInterval(function() {
      textarea.value = frames[counter % length];
      counter++;
    }, frameSpeed);

  }

  function stopAnimation() {
    clearInterval(myInterval);
    textarea.value = boxValue;
    counter = 0;
    start.disabled = false;
    anim.disabled = false;

    myInterval = null;
  }

  function increaseFont() {

    let textareaFont = document.getElementById("fontSize");
    textarea.style.fontSize = textareaFont.value;
  }

  function speedItUp() {

    if (turbo.checked) {

      if (myInterval) {
        clearInterval(myInterval)
        frameSpeed = 50;
        animate();
      }

    } else {

      if (myInterval) {
        clearInterval(myInterval)
        frameSpeed = 250;
        animate();
      }

    }
  }
})();
