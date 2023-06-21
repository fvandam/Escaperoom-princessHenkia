alert("princess henkia zit vast in de kamer, help princess henkia de sleutel te vinden");
alert("en ontsnap daarna samen met princess henkia uit de kamer")

let haskey = false;
let haskeylock = "locked";

const btn = document.getElementById("escape");
btn.addEventListener('click', function(e) {
    window.location.href = "potionroom.html";
})

function keylock() {
    console.log("Je probeerde de deur te openen");
    if (haskey == true) {
        haskeylock = "unlocked";
        alert("Je doet de sleutel in het sleutelgat en maakt de deur open");
        checkTheRoom();

    } else {
        alert("De deur is nogsteeds op slot!");
    }
}

function key() {
    console.log("je heb de sleutel gevonden!");
    haskey = true;
    alert("je heb de sleutel gevonden!");
    document.getElementById("key").style.display = "none";
}

function checkTheRoom() {
    if (haskeylock === "unlocked") {
        btn.style.visibility = "visible";
    }
} 


