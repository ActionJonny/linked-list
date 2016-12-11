var websiteTitleInput = document.querySelector('.website-title-input');
var websiteUrlInput = document.querySelector('.website-url-input');
var enterButton = document.querySelector('.enter-button');
var websiteTitleBookmarked = document.querySelector('.website-title-bookmarked');
var websiteUrlBookmarked = document.querySelector('.website-url-bookmarked');
var readButton = document.querySelector('.read-button');
var deleteButton = document.querySelector('.delete-button');
var rightContainer = document.querySelector('.right-container');


enterButton.addEventListener('click', function() {
  websiteTitleBookmarked.innerText = websiteTitleInput.value;
  websiteUrlBookmarked.innerText = websiteUrlInput.value;
  myFunction();
})

function myFunction() {
    var h = document.createElement("H1");
    var t = document.createTextNode(websiteTitleInput.value);
    h.appendChild(t);
    rightContainer.appendChild(h);
}

//



// var newElement = document.createElement('div');
// newElement.innerHTML = xmlhttp.responseText;
// document.getElementById("some_id").appendChild(newElement);
//
