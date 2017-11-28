
window.onload = function() {
  // Animate
  var anim = function(x,y,maxX,maxY,el) {
    setInterval(function() {
      ;(y>=maxY)?(y=0,(x=(x>=maxX)?0:x+1)):(y+=1);
      el.style.backgroundPosition = "-"+x+"00% -"+y+"00%";
    }, 5000);
  };

  // Fly
  var bird = document.getElementById('ball'); 
  flybezier({
    path: "M129.391,130.778c14.768,3.404,41.872,17.266,46.836-13.813s3.885-41.224,45.757-43.814 s89.787-21.583,5.18-22.447s-105.327,5.396-124.752-13.382S70.9,20.919,51.691,22.43s-14.245-2.158-22.015-8.202 s-42.087-30.865-23.958,6.259s2.59,66.909,49.642,53.743S60.108,114.806,129.391,130.778z",
    areaWidth: 200,
    areaHeight: 800,
    calcAngle: false,
    duration: 20000
  }, function(x,y,angle) {
    bird.style.transform = "translateX("+x+"px) translateY("+y+"px) rotateZ("+(angle)+"deg)";
  });

  anim(0,0,0,1, bird);
}

