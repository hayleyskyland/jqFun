// this 1st function is invoked on load, basically a build-in `onReady`

$(function() {




  //////////////////// TARGET HTML ITEMS BY ID ////////////////////

  const box = $('#box');
  const counter = $('#counter');
  const traversal = $('#traversal')




  //////////////////// BOX COUNTER ////////////////////

  let i = 0;
  counter.text(i+1);

  const toggleBox = (i) => {
    box.fadeToggle(1500, function() {
      i = i + 1;   

      if(i < 4) {
        counter.text(i+1);
        toggleBox(i);
      }
    });
  };




  //////////////////// TRAVERSAL CONSOLE LOGS ////////////////////


  function countingUp() {   

    const countWithoutZ = () => {
      let countThis = traversal.children();

      for (let i = 0; i < countThis.length; i++) {
        console.log('count up line 1:', countThis.eq(i).text());
      }
    }

    const countWithZ = () => {
      let countWithZ = $('h3');
      console.log('count up line 2:', countWithZ.eq(3).text());
    }

    countWithoutZ();
    countWithZ();
  }


  const logFirstAndLastLetters = () => {
    console.log('first letter:', $('h3:first').text())
    console.log('last letter :', $('h3:last').text())
  }


  function logChildrenAndSiblings() {

    let articleLog = $('article h3').text()
    let traverseLog = traversal.children('h3').text()
    let nextLog = $('h3:first').nextAll().andSelf().text()
    let findLog = (traversal).find('h3')
    // let siblingLog = $('h3').siblings().text()

    // console.log('all letter info via `article h3`', articleLog)
    // console.log('all letter info via `children`:', traverseLog)
    // console.log('all letter info via `next`:', nextLog)
    // console.log('all letter info via `siblings`:', siblingLog)    
    
    const allLogsMatch = () => {
      if (
        (articleLog = traverseLog)
        // && (articleLog = siblingLog)
        && (articleLog = nextLog)
        && (articleLog = findLog)
      ) {
        console.log('success: all logs match')
      }
    }

    allLogsMatch();
  }
  
  // invoke functions

  toggleBox(i);

  console.log('***** COUNT UP *****')
  countingUp();

  console.log('***** LOG FIRST & LAST LETTERS *****')  
  logFirstAndLastLetters();

  console.log('***** LOG CHILDREN & SIBLINGS *****')   
  logChildrenAndSiblings();
});




//////////////////// CHANGE CSS ////////////////////

// add a class to an html element (to add color in css)

$(counter).addClass('colorize-counter');




//////////////////// NOTES ////////////////////

// $('div>ul a');
// $('div#main p strong');
// $('div.main p>li a');