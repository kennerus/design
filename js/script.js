 window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;

  var field = document.querySelector('.ball');
  var field2 = document.querySelector('.header');

  var ball = document.getElementById("ball");
  var ball2 = document.getElementById("ball2");

  var maxX = field.clientWidth - ball.offsetWidth;
  var maxY = field.clientHeight - ball.offsetHeight;

  var maxX2 = field2.clientWidth - ball2.offsetWidth;
  var maxY2 = field2.clientHeight - ball2.offsetHeight;

  var duration = 10; // seconds
  var gridSize = 100; // pixels
  var gridSize2 = 10;
  var start = null;

  function step(timestamp) {
    var progress, x, y, y2;
    if(start === null) start = timestamp;

    progress = (timestamp - start) / duration / 500; // percent

    x = progress * maxX/gridSize; // x = ƒ(t)
    x2 = progress * maxX2/gridSize;
    y = 2 * Math.sin(x); // y = ƒ(x)
    y2 = 2 * Math.cos(x);

    ball.style.top = Math.min(maxX, gridSize * x) + "px";
    console.log(x)
    ball.style.left = maxX * (-2) + (gridSize * x) + "px";

    ball2.style.bottom = maxY2 + (gridSize2 * y2) + "px";
    ball2.style.left = Math.min(maxX2, gridSize2 * x2) + "px";

    if(progress >= 1) start = null; // reset to start position
    requestAnimationFrame(step);
  }

  requestAnimationFrame(step);



document.addEventListener("DOMContentLoaded", function(event) {
  window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;

  var field = document.querySelector('.about__figures');
  var balls = document.getElementsByTagName("img");
  var arr = [];

  for(var i = 0; i < balls.length; i++) {
    if(balls[i].hasAttribute('data-attr')) {
      arr.push(balls[i]);
    }
  }
  var ballRotate = arr[0];
  var ballRotate2 = arr[1];
  var ballRotate3 = arr[2];

  var maxXrotate = field.clientWidth - ballRotate.offsetWidth;
  var maxYrotate = field.clientHeight - ballRotate.offsetHeight;

  var maxXrotate2 = field.clientWidth - ballRotate2.offsetWidth;
  var maxYrotate2 = field.clientHeight - ballRotate2.offsetHeight;

  var maxXrotate3 = field.clientWidth - ballRotate3.offsetWidth;
  var maxYrotate3 = field.clientHeight - ballRotate3.offsetHeight;

  var durationRotate = 6; // seconds
  var durationRotate2 = 4; // seconds
  var durationRotate3 = 4;
  var gridSizeRotate = 50; // pixels

  var startRotate = null;
  var stretchFactor;

  function step(timestamp){
    var progress, x, y;
    if(startRotate === null) {
      startRotate = timestamp;
      stretchFactor = 1 + (Math.random());
    }

    progress = (timestamp - startRotate) / durationRotate / 1000; // percent
    progress2 = (timestamp - startRotate) / durationRotate2 / 1000;
    progress3 = (timestamp - startRotate) / durationRotate3 / 500;

    x = stretchFactor * Math.sin(progress * 2 * Math.PI); // x = ƒ(t)
    y = Math.cos(progress * 2 * Math.PI); // y = ƒ(t)

    x2 = stretchFactor * Math.cos(progress2 * 2 * Math.PI);
    y2 = Math.sin(progress2 * 2 * Math.PI);

    x3 = stretchFactor * Math.sin(progress3 * 2 * Math.PI);
    y3 = Math.cos(progress3 * 2 * Math.PI);

    ballRotate.style.left = maxXrotate/2 + (gridSizeRotate * x) + "px";
    ballRotate.style.bottom = maxYrotate + (gridSizeRotate * y) + "px";

    ballRotate2.style.left = maxXrotate2/2 + (gridSizeRotate * x2) + "px";
    ballRotate2.style.bottom = maxYrotate2/2 + 40 + (gridSizeRotate * y2) + "px";

    ballRotate3.style.left = maxXrotate3/2 + (gridSizeRotate * x3) + "px";
    ballRotate3.style.bottom = maxYrotate3/2 + (80 * y3) + "px";

    if(progress >= 1) startRotate = null; // reset to start position
    requestAnimationFrame(step);
  }

  requestAnimationFrame(step);
});
