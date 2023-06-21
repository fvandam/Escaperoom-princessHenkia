alert("jullie zijn nu aangekomen in de tuin van het kasteel")
alert("dit is het laatste onderdeel voordat jullie kunnen ontsnappen")
alert("zoek de 4 cijfer voor de code van het slot")
alert("de codes zijn verstopt dus kijk goed rond de tuin voor de cijfer")

let code = "locked";

function lock5() {
    console.log("You clicked the lock"); 
    let code = prompt('Wat is de code?');
    
     if (code == "2183") {
     code = "unlocked";
     alert("de code is goed! ontsnap nu snel voordat de heks je ziet");
     document.getElementById("escape").style.visibility = "visible"
    }
     else if(code != "2183")
     alert("De code is fout!")

}

function checkTheRoom() {
    if (code === "unlocked") {
        btn.style.visibility = "visible";
    }
} 

const btn = document.getElementById("escape");
btn.addEventListener('click', function(e) {
    
})


