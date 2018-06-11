
let $forwardObj = $('#video-forward');          //gets the object containing the videos
let $reverseObj = $('#video-reverse');
let $forward = $('#video-forward').get(0);      //gets the video HTML for use with play() and pause()
let $reverse = $('#video-reverse').get(0);
let $bgMusic = $('audio').get(0);
let rightArrow = 39;    //keycode for left arrow key
let leftArrow = 37;     //keycode for right arrow key


function getItem() {
  console.log('got an item');
}

document.addEventListener('DOMContentLoaded', () => {
  $reverse.currentTime = $reverse.duration; //gives the reverse video the "ended" property from start
  $reverseObj.css('z-index', '-1');         //hides the reverse video behind the forward video for the start
})

$('body').keydown((e) => {
  $bgMusic.play();
  if (e.which == leftArrow && $reverse.ended) {
    if ( ! $forward.ended ) {
      $forward.play();
    }
    else {                                        //when forward video has ended, move it behind the reverse video,
      $reverse.currentTime = 0;                   //give the player an item, and reset the reverse video to the beginning
      getItem();
      $reverseObj.css('z-index', '1');
      $forwardObj.css('z-index', '-1');
    }
  }
  if (e.which == rightArrow  && $forward.ended) {
    if ( ! $reverse.ended ) {
      $reverse.play();
    }
    else {                                        //when reverse video has ended, move it behind the forward video,
      $forward.currentTime = 0;                   //give the player an item, and reset the forward video to the beginning
      getItem();
      $forwardObj.css('z-index', '1');
      $reverseObj.css('z-index', '-1');
    }
  }
});

$('body').keyup((e) => {
  if (e.which == leftArrow) {
    $forward.pause();
  }
  if (e.which == rightArrow) {
    $reverse.pause();
  }
});
