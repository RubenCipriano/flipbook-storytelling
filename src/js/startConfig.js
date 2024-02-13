var pageOffset = 0;

var MAX_PAGES = 99

var pages = document.getElementsByClassName("page");

var normalPageSize = pages[0].clientWidth;

var frontPage = document.getElementsByClassName("front-page");

var backPage = document.getElementsByClassName("back-page");

document.getElementById("cover").addEventListener("click", addPage);

for(var i = 0; i < pages.length; i++) {

    var pageId = i + 1

    pages[i].style = `transform: rotateY(0deg); z-index: ${MAX_PAGES - i}`;
    
    pages[i].style.width = `${normalPageSize + (pageId * 3)}`
}

for(var i = 0; i < frontPage.length; i++) {
    frontPage[i].style = "cursor: pointer";

    frontPage[i].addEventListener("click", addPage);
}

for(var i = 0; i < backPage.length; i++) {
    backPage[i].style = "cursor: pointer";

    backPage[i].addEventListener("click", removePage);
}

document.getElementById("cover").style = `z-index: ${MAX_PAGES + 1}`