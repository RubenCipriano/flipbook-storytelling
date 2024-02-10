var pageOffset = 0;

var pages = document.getElementsByClassName("page");

var frontPage = document.getElementsByClassName("front-page");

var backPage = document.getElementsByClassName("back-page");

document.getElementById("cover").addEventListener("click", addPage);

for(var i = 0; i < pages.length; i++) {
    pages[i].style = `z-index: ${pages.length - i}`;
}

for(var i = 0; i < frontPage.length; i++) {
    frontPage[i].style = "cursor: pointer";

    frontPage[i].addEventListener("click", addPage);
}

for(var i = 0; i < backPage.length; i++) {
    backPage[i].style = "cursor: pointer";

    backPage[i].addEventListener("click", removePage);
}

document.getElementById("cover").style = `z-index: ${pages.length + 1}`