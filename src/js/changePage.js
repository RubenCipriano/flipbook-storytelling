var pageOffset = 0;

var pages = document.getElementsByClassName("page");

for(var i = 0; i < pages.length; i++) {
    pages[i].style = `z-index: ${pages.length - i}`;
}

document.getElementById("cover").style = `z-index: ${pages.length + 1}`

function changePage(id) {
    if(pageOffset + id < 0 || pageOffset + id > pages.length)
        return;

    changeBookPage(id);

    pageOffset += id;
}

function changeBookPage(id) {
    var book = document.getElementById("book");

    if(pageOffset == 0 || pageOffset + id == 0) {
        if(id > 0) {
            return document.getElementById("cover").style = `transition: transform 1.5s, z-index 0.5s 0.5s; transform: rotateY(-180deg);`
        } else {
            return document.getElementById(`cover`).style = `transition: transform 1.5s, z-index 0s; transform: rotateY(0deg);`
        }    
    }
    
    if(id > 0) {
        document.getElementById("cover").style = `transition: transform 1.5s, z-index 0s; transform: rotateY(-180deg); z-index: 1`

        return document.getElementById(`page${pageOffset}`).style += `transition: transform 1.5s, z-index 0.5s 0.5s; transform: rotateY(-180deg); z-index: ${pages.length - (pageOffset - 1)}`
    } else {
        return document.getElementById(`page${pageOffset - 1}`).style += `transition: transform 1.5s, z-index 0.5s 0.5s; transform: rotateY(0deg); z-index: ${pages.length - (pageOffset - 2)}`
    }
}