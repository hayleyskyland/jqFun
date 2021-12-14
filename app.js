// this 1st function is invoked on load, basically a build-in `onReady`

$(function() {
  var box = $("#box");
  var para = $("p");
  var i = 0;
  
  para.text(i+1);

  function toggleBox(i) {
    box.fadeToggle(1000, function() {
      i = i + 1;

      if(i < 10) {
        para.text(i+1);
        toggleBox(i);
      };
    });
  };
  
  toggleBox(i);
});

$("p").addClass("paragraph");

$("div>ul a");
$("div#main p strong");
$("div.main p>li a");