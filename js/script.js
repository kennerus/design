window.onload = function() {
  // Animate
  var anim = function(x, y, maxX, maxY, el) {
    setInterval(function() {;
      (y >= maxY) ? (y = 0, (x = (x >= maxX) ? 0 : x + 1)) : (y += 1);
      el.style.backgroundPosition = "-" + x + "00% -" + y + "00%";
    }, 5000);
  };
  // Fly
  // header big ball
  var bird = document.getElementById('ball');
  flybezier({
    path: "M129.391,130.778c14.768,3.404,41.872,17.266,46.836-13.813s3.885-41.224,45.757-43.814 s89.787-21.583,5.18-22.447s-105.327,5.396-124.752-13.382S70.9,20.919,51.691,22.43s-14.245-2.158-22.015-8.202 s-42.087-30.865-23.958,6.259s2.59,66.909,49.642,53.743S60.108,114.806,129.391,130.778z",
    areaWidth: 200,
    areaHeight: 800,
    calcAngle: false,
    duration: 30000
  }, function(x, y, angle) {
    bird.style.transform = "translateX(" + x + "px) translateY(" + y + "px) rotateZ(" + (angle) + "deg)";
  });
  anim(0, 0, 0, 1, bird);
  // about me small ball
  var ballR02 = document.getElementById('ballR02');
  flybezier({
    path: "M129.391,130.778c14.768,3.404,41.872,17.266,46.836-13.813s3.885-41.224,45.757-43.814 s89.787-21.583,5.18-22.447s-105.327,5.396-124.752-13.382S70.9,20.919,51.691,22.43s-14.245-2.158-22.015-8.202 s-42.087-30.865-23.958,6.259s2.59,66.909,49.642,53.743S60.108,114.806,129.391,130.778z",
    areaWidth: 350,
    areaHeight: 300,
    calcAngle: false,
    duration: 20000
  }, function(x, y, angle) {
    ballR02.style.transform = "translateX(" + x + "px) translateY(" + y + "px) rotateZ(" + (angle) + "deg)";
  });
  anim(0, 0, 0, 1, ballR02);
}
// header small ball
window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
var field = document.querySelector('.header');
var ball = document.getElementById("ball2");
var maxXsin = field.clientWidth - ball.offsetWidth;
var maxYsin = field.clientHeight - ball.offsetHeight;
var duration = 60; // seconds
var gridSize = 20; // pixels
var start = null;

function step(timestamp) {
  var progress, x, y, y2;
  if (start === null) start = timestamp;
  progress = (timestamp - start) / duration / 1000; // percent
  x = progress * maxXsin / gridSize; // x = ƒ(t)
  y = 2 * Math.sin(x); // y = ƒ(x)
  y2 = 2 * Math.cos(x);
  ball.style.left = Math.min(maxXsin, gridSize * x) + "px";
  ball.style.bottom = maxYsin - 40 + (gridSize * y) + "px";
  if (progress >= 1) start = null; // reset to start position
  requestAnimationFrame(step);
}
requestAnimationFrame(step);
// border at filter portfolio
var btns = document.querySelectorAll('.filterBtn');

function hasClass(element, cls) {
  return (' ' + element.className + ' ').indexOf(' ' + cls + ' ') > -1;
}
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener('mouseover', function(event) {
    event.target.classList.add('activeBtn');
  })
  if (!hasClass(btns[i], 'activeBtn')) {
    btns[i].addEventListener('mouseout', function(event) {
      event.target.classList.remove('activeBtn');
    })
  }
}
// detect browser
var BrowserDetect = {
  init: function() {
    this.browser = this.searchString(this.dataBrowser) || "An unknown browser";
    this.version = this.searchVersion(navigator.userAgent) || this.searchVersion(navigator.appVersion) || "an unknown version";
    this.OS = this.searchString(this.dataOS) || "an unknown OS";
  },
  searchString: function(data) {
    for (var i = 0; i < data.length; i++) {
      var dataString = data[i].string;
      var dataProp = data[i].prop;
      this.versionSearchString = data[i].versionSearch || data[i].identity;
      if (dataString) {
        if (dataString.indexOf(data[i].subString) != -1) return data[i].identity;
      } else if (dataProp) return data[i].identity;
    }
  },
  searchVersion: function(dataString) {
    var index = dataString.indexOf(this.versionSearchString);
    if (index == -1) return;
    return parseFloat(dataString.substring(index + this.versionSearchString.length + 1));
  },
  dataBrowser: [{
    string: navigator.userAgent,
    subString: "Chrome",
    identity: "Chrome"
  }, {
    string: navigator.userAgent,
    subString: "OmniWeb",
    versionSearch: "OmniWeb/",
    identity: "OmniWeb"
  }, {
    string: navigator.vendor,
    subString: "Apple",
    identity: "Safari",
    versionSearch: "Version"
  }, {
    prop: window.opera,
    identity: "Opera",
    versionSearch: "Version"
  }, {
    string: navigator.vendor,
    subString: "iCab",
    identity: "iCab"
  }, {
    string: navigator.vendor,
    subString: "KDE",
    identity: "Konqueror"
  }, {
    string: navigator.userAgent,
    subString: "Firefox",
    identity: "Firefox"
  }, {
    string: navigator.vendor,
    subString: "Camino",
    identity: "Camino"
  }, {
    /* For Newer Netscapes (6+) */
    string: navigator.userAgent,
    subString: "Netscape",
    identity: "Netscape"
  }, {
    string: navigator.userAgent,
    subString: "MSIE",
    identity: "Internet Explorer",
    versionSearch: "MSIE"
  }, {
    string: navigator.userAgent,
    subString: "Gecko",
    identity: "Mozilla",
    versionSearch: "rv"
  }, {
    /* For Older Netscapes (4-) */
    string: navigator.userAgent,
    subString: "Mozilla",
    identity: "Netscape",
    versionSearch: "Mozilla"
  }],
  dataOS: [{
    string: navigator.platform,
    subString: "Win",
    identity: "Windows"
  }, {
    string: navigator.platform,
    subString: "Mac",
    identity: "Mac"
  }, {
    string: navigator.userAgent,
    subString: "iPhone",
    identity: "iPhone/iPod"
  }, {
    string: navigator.platform,
    subString: "Linux",
    identity: "Linux"
  }]
};
BrowserDetect.init();

function findGradients() {
 var gradients = document.querySelectorAll('.gradient');
 console.log(gradients);
 for(var i = 0; i < gradients.length; i++) {
  // gradients[i].classList.remove('gradient');
  gradients[i].className = gradients[i].className.replace('gradient', 'purple')
 }
}
if(BrowserDetect.browser + BrowserDetect.version === 'Mozilla11') {
  findGradients();
  console.log(111)
}