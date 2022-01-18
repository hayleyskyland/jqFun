// this 1st function is invoked on load, basically a build-in `onReady`

$(function() {

  //////////////////// TARGET HTML ITEMS BY ID ////////////////////

  const box = $('#box');
  const counter = $('#counter');
  const traversal = $('#traversal');

  //////////////////// BOX COUNTER ////////////////////

  let i = 0;
  counter.text('Fadetoggle: ' + (i+1));

  const toggleBox = (i) => {
    box.fadeToggle(1500, function() {
      i = i + 1;   

      if(i < 4) {
        counter.text('Fadetoggles: ' + (i+1));
        toggleBox(i);
      }
    });
  };

  //////////////////// TRAVERSAL LOGS ////////////////////

  const countUp = () => {   

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

  const logChildrenAndSiblings = () => {

    let articleLog = $('article h3').text();
    let traverseLog = traversal.children('h3').text();
    let nextLog = $('h3:first').nextAll().andSelf().text();
    let findLog = (traversal).find('h3');
    let siblingLog = $('h3:first').siblings().andSelf().text();

    const logAllWithoutZ = () => {
      const allLogsMatch = () => {
        if (
          (articleLog = traverseLog)
          && (articleLog = nextLog)
          && (articleLog = findLog)
          && (articleLog = siblingLog)
        ) {
          return 'all logs match';
        }
      }

      console.log('log line 1:', articleLog, '-', allLogsMatch())
    }

    const logAllWithZ = () => {
      let articleLog = $('h3').text();

      console.log('log lines 1 & 2:', articleLog)
    }

    logAllWithoutZ();
    logAllWithZ();
  }

  //////////////////// INVOKE FUNCTIONS ////////////////////

  toggleBox(i);

  // traversal logs

  console.log('***** COUNT UP *****');
  countUp();

  console.log('***** FIRST & LAST LETTERS *****');
  logFirstAndLastLetters();

  console.log('***** CHILDREN & SIBLINGS *****');
  logChildrenAndSiblings();

  // for change css code

  $('#greenBtn').hide();
  
});

//////////////////// CHANGE CSS ////////////////////

// orange button

$(function(){
  $('#orangeBtn').click(function() {
    $('h3').css('color', 'orange');
    $('#orangeBtn').hide();
    $('#greenBtn').show();
    $('#pinkBtn').show();
  });
});

$(function(){
  $('#orangeBtn').on('mouseenter', function() {
    $('#orangeBtn').css('transform', 'scale(1.5)');
  }).on('mouseleave', function() {
    $('#orangeBtn').css('transform', 'none');
  })
});

// pink button

$(function(){
  $('#pinkBtn').click(function() {
    $('h3').css('color', 'lightpink');
    $('#pinkBtn').hide();
    $('#greenBtn').show();
    $('#orangeBtn').show();
  });
});

$(function(){
  $('#pinkBtn').on('mouseenter', function() {
    $('#pinkBtn').css('transform', 'scale(1.5)');
  }).on('mouseleave', function() {
    $('#pinkBtn').css('transform', 'none');
  })
});

// green button

$(function(){
  $('#greenBtn').click(function() {
    $('h3').css('color', 'olivedrab');
    $('#greenBtn').hide();
    $('#pinkBtn').show();
    $('#orangeBtn').show();
  });
});

$(function(){
  $('#greenBtn').on('mouseenter', function() {
    $('#greenBtn').css('transform', 'scale(1.5)');
  }).on('mouseleave', function() {
    $('#greenBtn').css('transform', 'none');
  })
});

// fog button

$('#fogBtn').animate({
  'width': 200
}, 4000);

$(function(){
  $('#fogBtn').click(function() {
    $('body').addClass('fog');
    $('#fogBtn').hide();
  });
});

//////////////////// EVENTS ////////////////////

// mouse coordinates

$(function() {
  $('#box').on('click', function(event) {
    alert('Your mouse is at X ' + event.pageX + ' & Y ' + event.pageY + '.');
  });
});

// collapse/expand accordian