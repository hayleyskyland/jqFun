// this 1st function is invoked on load, basically a build-in `onReady`

$(function() {
  var box = $("#box");
  box.fadeOut("slow", function() {
    alert("box finished fading out");
  });
});