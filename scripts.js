// function createBookmark(bookmark) {
//   $('.right-container').append(
//     `<li class='bookmarked-container'>
//       <h3 class='website-title-bookmark'>${bookmark.title}</h3>
//       <h4 class='website-url-bookmark'>${bookmark.url}</h4>
//       <button class='read-button'>Read</button>
//       <button class='delete-button'>Delete</button>
//     </li>`
//   )
// }

var counter = 0;
var readCounter = 0;


$("button").attr('disabled','disabled');
// When User Fills Out Form Completely
// $(".website-url-input").keyup(function(){
// $("button").removeAttr('disabled');
// });

$(".website-title-input, .website-url-input").on('keyup', function(){
  var title = $('.website-title-input').val();
  var url = $('.website-url-input').val();
  if(title.length > 1 && url.length > 1){
    enableSubmit()
  } else {
    disableSubmit()
  }
})

function enableSubmit() {
  $(".enter-button").prop('disabled', false)
}

function disableSubmit() {
  $(".enter-button").prop('disabled', true)
}

function createBookmark(bookmark) {
  $('.right-container').append(
    `<div class="new-bookmark">
      <div class="new-website-title-bookmark">${bookmark.title}
      </div>
      <hr>
      <div class="new-website-url-bookmark">
      <a href="${bookmark.url}" target="_blank"> ${bookmark.url}</a>
      </div>
      <hr>
      <div class="buttons">
      <button class="read-button">Read
      </button>
      <button class="delete-button">Delete
      </button>
      </div>
      </div>`
    )}

function Bookmark(title, url){
 this.title = title;
 this.url = url;
}

$('.enter-button').on('click', function(){
 var title = $('.website-title-input').val();
 var url = $('.website-url-input').val();
 var bookmark = new Bookmark(title, url);
 createBookmark(bookmark);
 resetTitleInput();
 resetUrlInput();
 disableSubmit();
 addCount();
});

function addCount() {
  counter++;
  console.log(counter);
};

function subtractCount() {
  counter--;
  console.log(counter);
};

$('.right-container').on('click', '.delete-button', function(){
  var grabDiv = $(this).parent().parent()
  grabDiv.remove();
  subtractCount();
  if(grabDiv.hasClass("read")) {
    readCounter--;
  }
});

$('.right-container').on('click' , '.read-button', function() {
  var grabDiv = $(this).parent().parent();
  grabDiv.toggleClass("read");
  updateReadCounter(grabDiv);
});

function updateReadCounter(grabDiv){
  if(grabDiv.hasClass("read")) {
    readCounter++;
  } else {
    readCounter--;
  }
  console.log(readCounter);
}

// helpers to cleaer input fields
function resetTitleInput() {
  $('.website-title-input').val('');
};
// do both.

function resetUrlInput() {
  $('.website-url-input').val('');
};
