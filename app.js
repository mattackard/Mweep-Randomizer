//document.write('Some more text just to check');


//keycode 39 == right arrow key
//keycode 37 == left arrow key
//keycode 68 == D key
//keycode 65 == A key

let $tracker = $('#main-content');
let trackerPos = $tracker.position().left;
console.log(trackerPos);
$('body').keydown((e) => {
  if (e.which == 39 || e.which == 68) {
    trackerPos++;
    $tracker.css('left', trackerPos);
    console.log($tracker.position().left);
    if (video.paused) {
      video.play();
    }
  }
  else if (e.which == 37 || e.which == 65) {
    trackerPos--;
    $tracker.css('left', trackerPos);
    console.log($tracker.position().left);
    if (video.paused) {
      video.play();
    }
  }
});

$('body').keyup((e) => {
  if (e.which == 39 || e.which == 68 || e.which == 37 || e.which == 65) {
    video.pause();
  }
});
