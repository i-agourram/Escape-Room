let code = "locked";

function lock5() {
    console.log("You clicked the lock"); 
    let code = prompt('Wat is de code?');
    
     if (code == "5210") {
     code = "unlocked";
     alert("De cijfers werken allemaal en je kan nu uit het huis voordat Frankenstein komt!!");
     document.getElementById("escape").style.visibility = "visible"
    }
     else if(code != "5210")
     alert("De code is fout!")

}

function checkTheRoom() {
    if (code === "unlocked") {
        btn.style.visibility = "visible";
    }
} 

const btn = document.getElementById("escape");
btn.addEventListener('click', function(e) {
    window.location.href = "finish.html";
})


