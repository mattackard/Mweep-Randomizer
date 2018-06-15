
const $forwardObj = $('#video-forward');          //gets the object containing the videos
const $reverseObj = $('#video-reverse');
const $forward = $('#video-forward').get(0);      //gets the video HTML for use with play() and pause()
const $reverse = $('#video-reverse').get(0);
const $bgMusic = $('#bgMusic').get(0);
const $fanfare = $('#fanfare').get(0);
const $modal = $('#modal');
const rightArrow = 39;    //keycode for left arrow key
const leftArrow = 37;     //keycode for right arrow key


function getItem() {
  let item = items[Object.keys(items)[Math.floor(Math.random() * Object.keys(items).length)]];  //gets a random item (items is inherited from items.js)
  $('#itemName').text(item['name']);                                                            //sets the text on the modal pop-up
  $('#modal img').attr('src', item['image']);
  $('#itemDescription').text(item['description']);
  $fanfare.play();
  $modal.fadeIn().delay(2000).fadeOut();
}

$reverse.addEventListener('loadeddata', () => {
  $reverse.currentTime = $reverse.duration;     //gives the reverse video the "ended" property from start
  $reverseObj.css('z-index', '-1');             //hides the reverse video behind the forward video for the start
  console.log('reverse should be in back');
});

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
