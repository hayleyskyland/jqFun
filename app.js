// this 1st function is invoked on load, basically a build-in `onReady`

$(function() {
  var box = $("#box");
  var para = $("p");
  var i = 0;
  
  para.text(i+1);

  function toggleBox(i) {
    box.fadeToggle(1500, function() {
      i = i + 1;   

      if(i < 4) {
        para.text(i+1);
        toggleBox(i);
      }
    });
  };

  // `.eq(#)` references one of the test `<h3>`s as if an array

  alert($("h3").eq(1).text());
  
  toggleBox(i);
});

// this changes color of `<p>` to use `paragraph` css section

$("p").addClass("paragraph");

// $("div>ul a");
// $("div#main p strong");
// $("div.main p>li a");