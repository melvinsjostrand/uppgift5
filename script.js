// JavaScript

// Globala variabler
let msgElem; //
let inputElem; //
let fruitNames;
let fruitNr = 0;
let nr = 0;
let selFruitsElem;
let errCount = 0;

// Funktion som körs då hela webbsidan är inladdad, dvs då all HTML-kod är utförd.
// Initiering av globala variabler samt koppling avfunktioner till knapparna.
function init() {
    inputElem = [];
    inputElem[1] = document.getElementById("input1");
    inputElem[2] = document.getElementById("input2");
    inputElem[3] = document.getElementById("input3");
    msgElem = document.getElementById("message");
    document.getElementById("btn1").onclick=showFruit;
    document.getElementById("btn2").onclick=checkName;
    document.getElementById("btn3").onclick=addFruits;
    fruitNames = ["ingen frukt", "äpple", "banan", "citron", "appelsin", "päron"];
    selFruitsElem = document.getElementById("selectedFruits");
} // End init
window.onload = init; // Se till att init aktiveras då sidan är inladdad

//Tar input från html textfält och först kollar att det är en siffra, därefter ifall det är inom intervallet för att sedan visa bild med url kopplad till siffra i textfält
function showFruit(){
    let nr;
    nr = getNr(1,5);
    if(nr != null){

        let fruitUrl = "./pics/fruit" + nr + ".jpg"; //Om talet är inannför intervallet visas en bild även om det finns decimaltal, då parseInt tar bort eventuella decimaler
        document.getElementById("fruitImg").src = fruitUrl; //Bild ändras med samma url som fruitUrl
        msgElem.innerHTML = "";
        errCount = 0;
    }
    else{
        errCount++;
        msgElem.innerHTML = "<p>Inte en giltig siffra i inmatningsfält! "+errCount+"</p>";

    }
    fruitNr = nr;
}
function checkName(){
    let name = inputElem[2].value;
    console.log(fruitNr);
    if(fruitNr === 0){
        msgElem.innerHTML = "<p>Välj en frukt först</p>";
        return;
    }

    if(name === fruitNames[fruitNr]){
        msgElem.innerHTML = "<p>Rätt namn</p>";
    }
    else{
        msgElem.innerHTML = "<p>Fel namn</p>";
    }
}

function getNr(elemNr, high){
    let nr;
    //let elemNr = 1;

    //let high = 5;

    nr = Number(inputElem[elemNr].value); 
    if(isNaN(nr)){
        return null;
    }
    if(nr < 1 || nr > high){ 
        msgElem.innerHTML = "<p>Skriv en siffra mellan 1 och 5</p>"; //Om talet är utanför intervallet skrivs en kommentar som förklarar varför ingen bild visas
        return null;

    }
    nr = parseInt(nr);
    inputElem[elemNr].value = nr;
    return nr;
}

function addFruits(){
    //let amount = inputElem[3].value;
    //console.log(amount + " " + fruitNr);

    if(fruitNr==0){
        return;
    }

    amount = getNr(3,9);
    console.log(amount + " " + fruitNr);

    let imgList = "";
    if(amount!=null){
        for(i = 0; i < amount; i++){
            imgList+="<img src='./pics/fruit" + fruitNr + ".jpg' alt='frukt'>";
        }
    }
    console.log(imgList);
    selFruitsElem.innerHTML += imgList;
}