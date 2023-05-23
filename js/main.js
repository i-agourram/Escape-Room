
let haspaperclip = false;
let haskeylock = "locked";

const btn = document.getElementById("escape");
btn.addEventListener('click', function(e) {
    window.location.href = "http://127.0.0.1:5500/coding/room2.html";
})

function keylock() {
    console.log("You clicked the lock");
    if (haspaperclip == true) {
        haskeylock = "unlocked";
        alert("Je schuift de paperclip in het slot, de cel wordt ontgrendeld en je opent hem.");
        checkTheRoom();

    } else {
        alert("Het zit nogsteeds op slot...");
    }
}

function paperclip() {
    console.log("You clicked the paperclip");
    haspaperclip = true;
    alert("Je pakt je paperclip en stopt hem weer in je zak..");
    document.getElementById("paperclip").style.display = "none";
}

function checkTheRoom() {
    if (haskeylock === "unlocked") {
        btn.style.visibility = "visible";
    }
} 


