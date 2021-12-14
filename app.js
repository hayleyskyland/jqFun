// this 1st function is invoked on load, basically a build-in `onReady`

$(function() {
  var box = $("#box");
  var para = $("p");
  var i = 0;
  
  para.text(i);

  function toggleBox(i) {
    box.fadeToggle(500, function() {
      i = i + 1;

      if(i < 10) {
        para.text(i);
        toggleBox(i);
      };
    });
  };
  
  toggleBox(i);
});