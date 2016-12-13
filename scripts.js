function createBookmark(bookmark) {
  $('.right-container').append(
    `<li class='bookmarked-container'>
      <h3 class='website-title-bookmark'>${bookmark.title}</h3>
      <h4 class='website-url-bookmark'>${bookmark.url}</h4>
      <button class='read-button'>Read</button>
      <button class='delete-button'>Delete</button>
    </li>`
  )
}

function Bookmark(title, url){
 this.title = title;
 this.url = url;
}

$('.enter-button').on('click', function(){
 var title = $('.website-title-input').val();
 var url = $('.website-url-input').val();
 var bookmark = new Bookmark(title, url);

 createBookmark(bookmark);
 $('.website-title-input').val('')
 $('.website-url-input').val('')
});


$('.website-title-input', '.website-url-input').keydown(function(){
  var title = $('.website-title-input').val()
  var url = $('.website-url-input').val()
  if(title.length < 1 && url.length < 1){
    $('.enter-button').attr('disabled', 'disabled')
  }
})

$('.right-container').on('click', '.delete-button', function(){
  $(this).parent().remove()
})

$('.right-container').on('click', '.read-button', function(){
  $(this).toggleClass('read');
  $('.bookmarked-container').toggleClass('bookmarked-container-read')
  console.log('hello')
})
