"use strict"

function showSliderBlock(num) {
  var x = document.getElementsByClassName("container_content");
  var i;
  for (i = 0; i < x.length; i++) {
    if (i == num) {
      x[i].style.display = "block";
    } else {
      x[i].style.display = "none";
    }
  }
}
