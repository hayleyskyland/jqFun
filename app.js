// this 1st function is invoked on load, basically a build-in `onReady`

$(function() {

  // target html items by id

  var box = $('#box');
  var counter = $('#counter');

  // toggle box counter

  var i = 0;
  
  counter.text(i+1);

  function toggleBox(i) {
    box.fadeToggle(1500, function() {
      i = i + 1;   

      if(i < 4) {
        counter.text(i+1);
        toggleBox(i);
      }
    });
  };

  // traverse A-C
    // `.eq(#)` references one of the test `<h3>`s as if an array

  function traverse() {
    console.log($('h3').eq(0).text());
    console.log($('h3').eq(1).text());
    console.log($('h3').eq(2).text());
  }

  // invoke functions

  toggleBox(i);
  traverse();  
});

// add a class to an html element (to add color in css)

$(counter).addClass('colorize-counter');

// notes of how to reference html in different ways

// $('div>ul a');
// $('div#main p strong');
// $('div.main p>li a');