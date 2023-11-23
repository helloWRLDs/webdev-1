const rows = 5;
const columns = 5;

let currTile;
let otherTile;

let turns = 0;

window.onload = function() {
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < columns; c++) {
            let tile = document.createElement("img");
            tile.src = "./static/images/blank.jpg";

            tile.addEventListener("dragstart", dragStart); 
            tile.addEventListener("dragover", dragOver);
            tile.addEventListener("dragenter", dragEnter); 
            tile.addEventListener("dragleave", dragLeave); 
            tile.addEventListener("drop", dragDrop);       
            tile.addEventListener("dragend", dragEnd);      

            document.getElementById("board").append(tile);
        }
    }


    let pieces = [];
    for (let i=1; i <= rows*columns; i++) {
        pieces.push(i.toString()); 
    }
    pieces.reverse();
    for (let i =0; i < pieces.length; i++) {
        let j = Math.floor(Math.random() * pieces.length);

        //swap
        let tmp = pieces[i];
        pieces[i] = pieces[j];
        pieces[j] = tmp;
    }

    for (let i = 0; i < pieces.length; i++) {
        let tile = document.createElement("img");
        tile.src = "./static/images/" + pieces[i] + ".jpg";

        tile.addEventListener("dragstart", dragStart);
        tile.addEventListener("dragover", dragOver);  
        tile.addEventListener("dragenter", dragEnter);
        tile.addEventListener("dragleave", dragLeave); 
        tile.addEventListener("drop", dragDrop);
        tile.addEventListener("dragend", dragEnd); 

        document.getElementById("pieces").append(tile);
    }
}


function dragStart() {
    currTile = this;
}

function dragOver(e) {
    e.preventDefault();
}

function dragEnter(e) {
    e.preventDefault();
}

function dragLeave() {

}

function dragDrop() {
    otherTile = this;
}

function dragEnd() {
    if (currTile.src.includes("blank")) {
        return;
    }
    let currImg = currTile.src;
    let otherImg = otherTile.src;
    currTile.src = otherImg;
    otherTile.src = currImg;

    document.getElementById("turns").innerText = ++turns;
}


let hintBtn = document.getElementById("puzzle-hint");
hintBtn.addEventListener("click", () => {
    if (document.getElementById("hint").style.display === "none") {
        document.getElementById("hint").style.display = "block";
        document.getElementsByTagName("html")[0].style.overflowY = "hidden";
    } else {
        document.getElementById("hint").style.display = "none";
        document.getElementsByTagName("html")[0].style.overflowY = "scroll";
    }
})