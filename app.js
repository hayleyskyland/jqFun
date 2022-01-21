//////////////////// TARGET HTML ITEMS BY ID ////////////////////

// general

const body = $('body');
const box = $('#box');
const counter = $('#counter');
const traversal = $('#traversal');
const h3 = $('h3');

// buttons

const orangeBtn = $('#orangeBtn');
const greenBtn = $('#greenBtn');
const pinkBtn = $('#pinkBtn');

const fogBtn = $('#fogBtn');
const unfogBtn = $('#unfogBtn');

const sunBtn = $('#dayLink')
const moonBtn = $('#nightLink');

//////////////////// HELPER FUNCTIONS ////////////////////

const hide = (elements) => {
  elements.forEach(element => {
    element.hide();
  });
};

const show = (elements) => {
  elements.forEach(element => {
    element.show();
  });
};

const setColor = (elements, colorVar) => {
  elements.forEach(element => {
    element.css('color', colorVar)
  });
};

//////////////////// LOAD FUNCTION ////////////////////
// this 1st function is invoked on load, basically a build-in `onReady`

$(function() {

  // hide buttons on load

  hide([greenBtn, unfogBtn, sunBtn]);

  // box counter

  let i = 0;
  counter.text('Fadetoggle: ' + (i+1));

  const toggleBox = (i) => {
    box.fadeToggle(1500, function() {
      i = i + 1;   

      if(i < 4) {
        counter.text('Fadetoggles: ' + (i+1));
        toggleBox(i);
      };
    });
  };

  toggleBox(i);

  // traversal logs

  $(function() {

    // create logs

    const h3First = $('h3:first');
    const h3Last = $('h3:last');

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
      console.log('first letter:', h3First.text())
      console.log('last letter :', h3Last.text())
    };

    const logChildrenAndSiblings = () => {
      let articleLog = $('article h3').text();
      let traverseLog = traversal.children(h3).text();
      let nextLog = h3First.nextAll().andSelf().text();
      let findLog = (traversal).find(h3);
      let siblingLog = h3First.siblings().andSelf().text();

      $(function() {
        const allLogsMatch = () => {
          if (
            (articleLog = traverseLog)
            && (articleLog = nextLog)
            && (articleLog = findLog)
            && (articleLog = siblingLog)
          ) {
            return 'all logs match';
          };
                };

        console.log('log line 1:', articleLog, '-', allLogsMatch())
      });

      $(function() {
        let articleLog = h3.text();

        console.log('log lines 1 & 2:', articleLog)
      });
    };

    // invoke functions

    $(function() {
      console.log('***** COUNT UP *****');
      countUp();

      console.log('***** FIRST & LAST LETTERS *****');
      logFirstAndLastLetters();

      console.log('***** CHILDREN & SIBLINGS *****');
      logChildrenAndSiblings();
    });
  });
});

//////////////////// EVENTS - ALERTS ////////////////////

// mouse coordinates

$(function() {
  box.on('click', function(event) {
    alert(`Your mouse is at X ${event.pageX} & Y ${event.pageY}.`);
  });
});

// click text

$(function() {

  // click text above paragraphs

  counter.on('click', function(event) {
    alert('This line counts how many times the above box fades.');
  });

  
  h3.on('click', function() {
    alert('Check console to see examples of traversing the dom.');
  });

  // click paragraphs

  $('#p1').on('click', function(event) {
    alert('You clicked Paragraph 1.');
    event.stopPropagation();
  });

  $('p').on('click', 'p', function() {
    alert('stopPropagation should prevent this from displaying.');
  });

  // add paragraph

  $(('<p />'), {
    text: 'Paragraph 3 (click me)',
    id: 'p3'
  }).appendTo('#paragraphs');

  $('p:nth-child(3)').on('click', function() {
    alert('You clicked Paragraph 3.');
  });

}); 

//////////////////// EVENTS - CHANGE CSS ////////////////////

// color buttons

$(function() {

  $(function(){
    const hoverHere = (elements) => {
      elements.forEach(btn => {
        btn.on('mouseenter', function() {
          btn.css('transform', 'scale(1.5)');
        }).on('mouseleave', function() {
          btn.css('transform', 'none');
        });
      });
    };

    hoverHere([orangeBtn, pinkBtn, greenBtn]);
  });

  $(function(){
    orangeBtn.click(function() {
      h3.css('color', 'orange');
      hide([orangeBtn]);
      show([greenBtn, pinkBtn]);
    });
  });

  $(function(){
    pinkBtn.click(function() {
      setColor([h3], 'lightpink');
      hide([pinkBtn]);
      show([greenBtn, orangeBtn]);
    });
  });

  $(function(){
    greenBtn.click(function() {
      setColor([h3], 'olivedrab');
      hide([greenBtn]);
      show([pinkBtn, orangeBtn]);
    });
  });
});

// fog buttons

$(function() {

  const animateFogBtn = (elements) => {
    elements.forEach(btn => {
      btn.on('mouseenter', function() {
        btn.css('transform', 'scale(1.5)');
      }).on('mouseleave', function() {
        btn.css('transform', 'none');
      });
    });
  };

  animateFogBtn([fogBtn, unfogBtn])

  $(function(){
    fogBtn.click(function() {
      body.addClass('fog');
      hide([fogBtn]);
      show([unfogBtn]);
    });
  });

  $(function(){
    unfogBtn.click(function() {
      body.removeClass('fog');
      show([fogBtn]);
      hide([unfogBtn]);
    });
  });
});

// day & night toggle

$(function() {

  $(function() {
    sunBtn.on('click', function(event) {
      event.preventDefault();
      body.trigger('setDayMode');
    });

    body.on('setDayMode', function() {
      $(this).css('background', 'white');
      setColor([$(this)], 'gray');
      setColor([fogBtn, unfogBtn, box], 'white');
      hide([sunBtn]);
      show([moonBtn]);
    });
  });

  $(function() {
    moonBtn.on('click', function(event) {
      event.preventDefault();
      body.trigger('setNightMode');
    });

    body.on('setNightMode', function() {
      $(this).css('background', 'black');
      setColor([fogBtn, unfogBtn, box], 'black');
      hide([moonBtn]);
      show([sunBtn]);
    });
  });
});
