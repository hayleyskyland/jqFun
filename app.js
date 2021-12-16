// this 1st function is invoked on load, basically a build-in `onReady`

$(function() {

  // target html items by id

  var box = $('#box');
  var counter = $('#counter');
  var traversal = $('#traversal')

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

    // log all 3 letters

    for (let i = 0; i < $('h3').length; i++) {
      console.log('count up:', $('h3').eq(i).text());
    }

    // log info about 1st (A) & last (C) letter

    console.log('first letter info:', $('h3:first'))
    console.log('last letter info:', $('h3:last'))

    // log all info about all letters at once

    console.log('all letter info through find:', (traversal).find('h3'))
    console.log('all letter info through children:', (traversal).children('h3'))
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