var myBox = $('.thumbnail');
var myBoxes = $('.thumbnail');

$( ".button" ).click(function() {
  TweenMax.staggerFrom(myBox, 1, {rotation:360, y:-200, opacity:0, ease: Expo.easeOut}, 0.5);
});

var t = TweenMax.to(".navbar-header", 2, {x:30, ease:Bounce.easeOut, yoyoEase:Power2.easeOut, yoyo:true, repeat:1, repeatDelay:0.1});
