alert("jullie zijn nu aangekomen in de toverdrankjes kamer")
alert("los het raadsel op om verder te kunnen ontsnappen")
alert("tip! klik op princess henkia om het antwoord te kunnen invullen")



function lock() {
    console.log("je heb op de puzzel geklikt"); 
    let code = prompt('Wat is het antwoord op het raadsel?');
    
     if (code == "10"){
     alert("Je heb de goeden code ingevuld! ga naar de volgende kamer") }
      
     else if(code != "10")
     alert("Dit is fout!")
}

const btn = document.getElementById("room3");
btn.addEventListener('click', function(e) {
    window.location.href = "room3.html";
})
