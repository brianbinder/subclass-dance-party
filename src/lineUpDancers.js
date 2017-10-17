$(document).ready(function() {
  window.dancers = [];

  $('.lineUp').on('click', function(event) {
    // all on one side
    // set left = to every dancer
    var heightDelta = window.height / window.dancers.length;
    for (var i = 0; i < window.dancers.length; i++) {
    // iterate through dancers array
      window.dancers[i].lineUp();
    // var heightDelta = window.height / window.dancers.length
      // set the height individually
      // window.dancers[i].$node.css({
      //   top: i * heightDelta,
      //   left: '5%'
      // });

      // if(window.dancers[i].$node.hasClass('movingDancer')) {
      //   window.dancers[i].left = '5%';
      //   window.dancers[i].right = '5%';
      // }

    }

  });
});
