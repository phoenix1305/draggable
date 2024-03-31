$(document).ready(function() {
$( function() {
  $( "#draggable" ).draggable();
} );

$(function() {
var obj = document.createElement("audio");
obj.src = "sounds/sweep-sound.mp3";
obj.volume = 0.5;
obj.autoPlay = false;
obj.preLoad = true;
obj.controls = true;

$("#draggable").on("drag", function() {
  obj.play();
});
});
});
