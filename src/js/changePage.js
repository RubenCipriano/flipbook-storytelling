function addPage() {
    changePage(1)

    document.getElementById("cover").removeEventListener("click", addPage);
}

function removePage() {
    changePage(-1)
}

function changePage(id) {
    if(pageOffset + id < 1 || pageOffset + id > pages.length + 1)
        return;

    changeBookPage(id);

    pageOffset += id;
}

function changeZindexOfPages() {
    for(var i = 0; i < pageOffset - 1; i++)
        pages[i].style.zIndex = i + 1
}

function changeBookPage(id) {
    if(pageOffset == 0 || pageOffset + id == 0) {
        if(id > 0) {
            return document.getElementById("cover").style = `z-index 0.5s 0.5s; transform: rotateY(-180deg);`

        } else {

            return document.getElementById(`cover`).style = `z-index 0s; transform: rotateY(0deg);`
        }    
    }

    if(id > 0) {

        var currentPage = document.getElementById(`page${pageOffset}`);

        if(pageOffset == 1)
            document.getElementById("cover").style = `transform: rotateY(-180deg); z-index: 1`

        changeZindexOfPages()

        return currentPage.style = `transform: rotateY(-180deg); z-index: ${currentPage.style.zIndex}; width: ${normalPageSize - (pageOffset * 3)}`

    } else {

        var previousPage = document.getElementById(`page${pageOffset - 1}`);

        changeZindexOfPages()

        return previousPage.style = `transform: rotateY(0deg); z-index: ${MAX_PAGES - (pageOffset - 2)}; width: ${normalPageSize + (pageOffset * 3)}`
    }
}