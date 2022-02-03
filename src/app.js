//////////////////// TARGET HTML ITEMS BY ID ////////////////////

const body = $('body');
const title = $('h1');
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

// accordion

const accordionHeading = $('h4');

const iconExpandCollapse = $('.icon-expand-collapse');

const collapseIcon = [$('#collapse0'), $('#collapse1'), $('#collapse2')];
const sectionText = [$('#sectionText0'), $('#sectionText1'), $('#sectionText2')];
const expandIcon = [$('#expand0'), $('#expand1'), $('#expand2')];

const expandAll = $('#expandAll');
const collapseAll = $('#collapseAll');



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



//////////////////// THEME ////////////////////

const setTheme = (color) => {
  body.css('background', color);
  setColor([title, fogBtn, unfogBtn, box, accordionHeading, iconExpandCollapse], color);
  $.cookie('theme', color, { expires: 7 });

  if (color === 'white') {
    setColor([body], 'gray');
    hide([sunBtn]);
    show([moonBtn]);

  } else if (color === 'black') {
    hide([moonBtn]);
    show([sunBtn]);
  };
};

$(function() {

  hide([sunBtn])

  $(function() {
    sunBtn.on('click', function(event) {
      event.preventDefault();
      setTheme('white');
    });
  });

  $(function() {
    moonBtn.on('click', function(event) {
      event.preventDefault();
      setTheme('black');
    });
  });
});

$(function() {
  if ($.cookie('theme') === 'black') {
    setTheme('black');
  };
});



//////////////////// BOX ////////////////////

// counter

$(function() {
  let i = 0;
  counter.text('fadetoggle: ' + (i+1))

  const toggleBox = (i) => {
    box.fadeToggle(1500, function() {
      i = i + 1;   

      if(i < 4) {
        counter.text('fadetoggles: ' + (i+1));
        toggleBox(i)
      };
    });
  };

  toggleBox(i);
})

// coordinates

$(function() {
  box.on('click', function(event) {
    alert(`Your mouse is at X ${event.pageX} & Y ${event.pageY}.`)
  });
});



//////////////////// TRAVERSAL LOGS ////////////////////

$(function() {

  // create logs

  const h3First = $('h3:first');
  const h3Last = $('h3:last');

  const countUp = () => {   

    const countWithoutZ = () => {
      let countThis = traversal.children();

      for (let i = 0; i < countThis.length; i++) {
        console.log('count up line 1:', countThis.eq(i).text());
      };
    };

    const countWithZ = () => {
      let countWithZ = $('h3');

      console.log('count up line 2:', countWithZ.eq(3).text());
    }

    countWithoutZ();
    countWithZ();
  };

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

  // invoke logs

  $(function() {
    console.log('***** COUNT UP *****');
    countUp();

    console.log('***** FIRST & LAST LETTERS *****');
    logFirstAndLastLetters();

    console.log('***** CHILDREN & SIBLINGS *****');
    logChildrenAndSiblings();
  });
});



//////////////////// COLOR BUTTONS ////////////////////

// color buttons

$(function() {

  hide([greenBtn]);

  // hover animation

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

  // click events

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




//////////////////// FOG ////////////////////

$(function() {

  hide([unfogBtn]);

  // animation

  const animateFogBtn = (elements) => {
    elements.forEach(btn => {
      // grow 1
      btn.animate({ 'width': 200 }, 4000)
      .animate({ 'width' : 175 })
      // grow 2
      .animate({ 'width': 200 }, 1000)
      .animate({ 'width' : 100 }, 1000)
      // grow 3
      .animate({ 'width': 200 }, 3000)
      .animate({ 'width' : 175 })
      // grow 4
      .animate({'width': 200}, 1000)
    });
  };

  animateFogBtn([fogBtn, unfogBtn])

  // click events

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




//////////////////// PARAGRAPHS ////////////////////

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
    alert('You clicked paragraph 1.');
    event.stopPropagation();
  });

  $('p').on('click', 'p', function() {
    alert('stopPropagation should prevent this from displaying.');
  });

  // add paragraph

  $(('<p />'), {
    text: 'paragraph3 (click)',
    id: 'p3'
  }).appendTo('#paragraphs');

  $('p:nth-child(3)').on('click', function() {
    alert('You clicked paragraph 3.');
  });

}); 



//////////////////// ACCORDION ////////////////////

// dynamic hide/show for one section & all sections

const setAccordion = (status, num, clicked) => {

  if (clicked === 'clicked') {
    $.cookie(accordion[num], status, { expires: 7 });
  }

  if (status === 'close') {
    hide([sectionText[num], collapseIcon[num]]);
    show([expandIcon[num]]);
  } else {
    show([sectionText[num], collapseIcon[num]]);
    hide([expandIcon[num]]);
  }

};

// set all setcions

$(function() {

  const setAllSections = (status) => {
    setAccordion(status, 0, 'clicked');
    setAccordion(status, 1, 'clicked');
    setAccordion(status, 2, 'clicked');
  }

  collapseExpandAll = (btn, status) => {
    btn.on('click', function() {
      setAllSections(status);
    });
  }

  collapseExpandAll(collapseAll, 'close')
  collapseExpandAll(expandAll, 'open')
})

// set one section

$(function() {

  const setOneSection = (btn, status, num) => {
    btn[num].on('click', function() {
      setAccordion(status, num, 'clicked');
    })
  }

  setOneSection(collapseIcon, 'close', 0)
  setOneSection(expandIcon, 'open', 0)

  setOneSection(collapseIcon, 'close', 1)
  setOneSection(expandIcon, 'open', 1)

  setOneSection(collapseIcon, 'close', 2)
  setOneSection(expandIcon, 'open', 2)

})

// call cookies

$(function() {

  accordionCookieCall = (num) => {
    if ($.cookie(accordion[num]) == 'close') {
      setAccordion('close', num);
    } else {
      setAccordion('open', num);
    }
  }

  accordionCookieCall(0)
  accordionCookieCall(1)
  accordionCookieCall(2)

});
