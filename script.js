// JavaScript

// Globala variabler
let inputElem;
let msgElem;
let fruitNames;
let fruitnr; 
let selFruitsElem;

// Funktion som körs då hela webbsidan är inladdad, dvs då all HTML-kod är utförd.
// Initiering av globala variabler samt koppling avfunktioner till knapparna.
function init() 
{
        fruitnr = 0;
        fruitNames = ["ingen bild","äpple","banan","citron","apelsin",+"päron"];
	    inputElem=[];
        inputElem[1]=document.getElementById("input1");
        inputElem[2]=document.getElementById("input2");
        inputElem[3]=document.getElementById("input3");
        selFruitsElem = document.getElementById("selectedFruits");
        msgElem=document.getElementById("message");
            document.getElementById("btn1").onclick=showFruit;
            document.getElementById("btn2").onclick=checkName;
            document.getElementById("btn3").onclick=addFruits;
} // End init
window.onload = init; // Se till att init aktiveras då sidan är inladdad


function showFruit() //visar bild på olika frukter beroende på vilket nummer du väljer.
{
    let nr;
    let fruitURL;

    nr = getnr(1,5); 
    
    if(getnr !== null){
        fruitURL = "./pics/fruit" + nr +".jpg";
        document.getElementById("fruitImg").src =  fruitURL;
    }else {
        msgElem.innerHTML = "<p> dåligt</p>"
    }

    fruitnr = nr;
}


function checkName(){
    let name;
    name = (inputElem[2].value);

    if(fruitnr === 0 ){
        msgElem.innerHTML = "<p>välj en frukt tack</p>";
        return;
    }

    if(name === fruitNames[fruitnr]) {
        msgElem.innerHTML = "<p>Rätt namn</p>";
    } else {
        msgElem.innerHTML = "<p>fel namn</p>";
    }
}
function getnr(elemnr, high){
    
    let nr;
    nr = (inputElem[elemnr].value);
    if(isNaN(nr)){
        msgElem.innerHTML = "<p> skriv ett nummer mellan 1-5</p>"
        return null;
    }

    if(nr>=1&&nr<=high){
        nr = parseInt(nr);
        inputElem[elemnr].value = nr;    

    }else{
        msgElem.innerHTML = "<p> skriv ett nummer mellan 1-5</p>"
        return null;
    }
    return nr;
}

function addFruits(){
    let amount;
    let imgList;
    amount = inputElem[3].value;
    imgList =  selFruitsElem.src =  fruitURL;

    if()
}