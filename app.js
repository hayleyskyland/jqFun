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

    // log A-C (but not Z)

    let countUp = traversal.children()

    for (let i = 0; i < countUp.length; i++) {
      console.log('count up:', countUp.eq(i).text());
    }

    // log info about 1st (A) & last (C) letter

    // console.log('first letter info:', $('h3:first'))
    // console.log('last letter info:', $('h3:last'))

    let articleLog = $('article h3')
    let traverseLog = traversal.children('h3')
    let siblingLog = $('h3').siblings()
    let nextLog = $('h3:first').nextAll()
    let findLog = (traversal).find('h3')

    //target just inside `traversal` article

    // console.log('all letter info via `article h3`', articleLog)
    // console.log('all letter info via `children`:', traverseLog)
    // console.log('all letter info via `siblings`:', siblingLog)
    // console.log('all letter info via `next`:', nextLog)

    // supposed to target whole dom, but it's just targetting `traversal` article
    // console.log('all letter info via `find`:', findLog) 

    if (siblingLog = nextLog) {
      console.log('success: traversing siblings & next both match')
    }
    
    if (
      (articleLog = traverseLog)
      && (articleLog = siblingLog.andSelf())
      && (articleLog = nextLog.andSelf())
      && (articleLog = findLog)
    ) {
      console.log('success: all traversal logs are the same')
    }

    // this one is supposed to search whole dom, but it's not incorrectly showing up same result

    let findBody = $('#body').find('h3')

    // console.log(findBody)

    if (findLog = findBody) {
      console.log('fail: failed to search body vs article')
    }      

    // search whole dom for h3s
    // console.log('all letter info via `find`:', findLog)    
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