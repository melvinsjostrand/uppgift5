// JavaScript

// Globala variabler
let inputElem;
let msgElem;
let fruitnr;
let fruitNames = ["äpple" , "banan" , "citron" , "apelsin" , "päron"];

// Funktion som körs då hela webbsidan är inladdad, dvs då all HTML-kod är utförd.
// Initiering av globala variabler samt koppling avfunktioner till knapparna.
function init() 
{
	inputElem=[];
        inputElem[1]=document.getElementById("input1");
        inputElem[2]=document.getElementById("input2");
        inputElem[3]=document.getElementById("input3");

        msgElem=document.getElementById("message");
            document.getElementById("btn1").onclick=showFruit;
} // End init
window.onload = init; // Se till att init aktiveras då sidan är inladdad


function showFruit() //visar bild på olika frukter beroende på vilket nummer du väljer.
{
 let nr;
 let fruitURL;

    nr = Number(inputElem[1].value);

    if(isNaN(nr)){
        msgElem.innerHTML = "<p> skriv ett nummer mellan 1-5</p>"
        return null;
    }

    if(parseInt(nr>=1&&nr<=5)){    
        fruitURL = "./pics/fruit" + nr +".jpg";
        document.getElementById("fruitImg").src =  fruitURL;
        return fruitURL;
    }else{
        msgElem.innerHTML = "<p> skriv ett nummer mellan 1-5</p>"
        return null;
    }

    
    fruitnr = nr;
}


function checkName(){
    let name;

}
