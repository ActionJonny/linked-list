
var counter = 0;
var readCounter = 0;

$(".website-title-input, .website-url-input").on('keyup', function(){
  var title = $('.website-title-input').val();
  var url = $('.website-url-input').val();
  if(title.length > 1 && url.length > 1){
    enableSubmit()
  } else {
    disableSubmit()
  }
});

function enableSubmit() {
  $(".enter-button").prop('disabled', false)
};

function disableSubmit() {
  $(".enter-button").prop('disabled', true)
};

function createBookmark(bookmark) {
  $('.right-container').append(
    `<div class="new-bookmark">
      <div class="new-website-title-bookmark">${bookmark.title}</div>
      <hr>
      <div class="new-website-url-bookmark">
      <a href="${bookmark.url}" target="_blank"> ${bookmark.url}</a>
      </div>
      <hr>
      <div class="buttons">
      <button class="read-button">Read</button>
      <button class="delete-button">Delete</button>
      </div>
    </div>`
  )};

function Bookmark(title, url){
 this.title = title;
 this.url = url;
};

$('.enter-button').on('click', function(){
 var title = $('.website-title-input').val();
 var url = $('.website-url-input').val();
 var bookmark = new Bookmark(title, url);
 createBookmark(bookmark);
 resetInputs();
 disableSubmit();
 addCount();
 unreadCounterDisplay()
});

function resetInputs() {
  $('.website-title-input').val('');
  $('.website-url-input').val('');
};

function addCount() {
  counter++;
};

function subtractCount() {
  counter--;
};

$('.right-container').on('click', '.delete-button', function(){
  var grabDiv = $(this).parent().parent()
  grabDiv.remove();
  subtractCount();
  if(grabDiv.hasClass("read")) {
    readCounter--;
    counter++
    readCounterDisplay()
  } else {
    unreadCounterDisplay()
  }
});

$('.right-container').on('click' , '.read-button', function() {
  var grabDiv = $(this).parent().parent();
  grabDiv.toggleClass("read");
  updateReadCounter(grabDiv);
  if(grabDiv.hasClass('read')) {
    counter--
  } else {
    counter++
  } unreadCounterDisplay()
});

$('.clear-button').on('click', function(){
  var removeReadBookmarks = $('.right-container').children('.read')
  readCounterAfterClearButton()
  removeReadBookmarks.remove()
});

function readCounterAfterClearButton() {
  var readBookmarks = $('.right-container').children('.read')
  var readBookmarksLength = readBookmarks.length
  readCounter = readBookmarksLength - readCounter
  $('.display-read').text('Read Messages: '  + readCounter)
};

function updateReadCounter(grabDiv){
  if(grabDiv.hasClass("read")) {
    readCounter++;
  } else {
    readCounter--;
  } readCounterDisplay()
};

function unreadCounterDisplay() {
  $('.display-unread').text('Unread Messages: ' + counter)
};

function readCounterDisplay() {
  $('.display-read').text('Read Messages: '  + readCounter)
};
