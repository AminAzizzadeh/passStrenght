const pass = document.querySelector(".pass");
const charNumber = document.querySelector(".charNumber");
const showPass = document.querySelector(".showPass");
const smallWord = document.querySelector(".smallWordTrue");
const capitalWord = document.querySelector(".capitalWordTrue");
const number = document.querySelector(".numberTrue");
const char = document.querySelector(".charTrue");
const result = document.querySelector(".passStrength");
let finalResult = 0;
let trues = 0;


let smallWordScore = Number = 0;
let smallWordTrue = Boolean = false;

function smallWordCheck() {
    let x = 0;
    finalResult -= smallWordScore;
    smallWordScore = 0;

    x += pass.value.search("a"); 
    x += pass.value.search("b"); 
    x += pass.value.search("c"); 
    x += pass.value.search("d"); 
    x += pass.value.search("e"); 
    x += pass.value.search("f"); 
    x += pass.value.search("g"); 
    x += pass.value.search("h"); 
    x += pass.value.search("i"); 
    x += pass.value.search("j"); 
    x += pass.value.search("k"); 
    x += pass.value.search("l"); 
    x += pass.value.search("m"); 
    x += pass.value.search("n"); 
    x += pass.value.search("o"); 
    x += pass.value.search("p"); 
    x += pass.value.search("q"); 
    x += pass.value.search("r"); 
    x += pass.value.search("s"); 
    x += pass.value.search("t"); 
    x += pass.value.search("u"); 
    x += pass.value.search("v"); 
    x += pass.value.search("w"); 
    x += pass.value.search("x"); 
    x += pass.value.search("y"); 
    x += pass.value.search("z"); 

    x += 25;

    if (x >= 0) {
        smallWordScore = 15;
        smallWordTrue = true;
        smallWord.classList.add("pluginEnable");
        x = 0;
    }
    if(x < 0){
        smallWord.classList.remove("pluginEnable");
        trues++;
        x++;
    }
    finalResult += smallWordScore;
}

let capitalWordScore = Number = 0;
let capitalWordTrue = Boolean = false;

function captalWordCheck() {
    let y = 0;
    finalResult -= capitalWordScore;
    capitalWordScore = 0;

    y += pass.value.search("A"); 
    y += pass.value.search("B"); 
    y += pass.value.search("C"); 
    y += pass.value.search("D"); 
    y += pass.value.search("E"); 
    y += pass.value.search("F"); 
    y += pass.value.search("G"); 
    y += pass.value.search("H"); 
    y += pass.value.search("I"); 
    y += pass.value.search("J"); 
    y += pass.value.search("K"); 
    y += pass.value.search("L"); 
    y += pass.value.search("M"); 
    y += pass.value.search("N"); 
    y += pass.value.search("O"); 
    y += pass.value.search("P"); 
    y += pass.value.search("Q"); 
    y += pass.value.search("R"); 
    y += pass.value.search("S"); 
    y += pass.value.search("T"); 
    y += pass.value.search("U"); 
    y += pass.value.search("V"); 
    y += pass.value.search("W"); 
    y += pass.value.search("y"); 
    y += pass.value.search("Y"); 
    y += pass.value.search("Z"); 

    y += 25;

    if (y >= 0) {
        capitalWordScore = 15;
        capitalWordTrue = true;
        capitalWord.classList.add("pluginEnable");
        trues++;
        y = 0;
    }
    if(y < 0){
        capitalWord.classList.remove("pluginEnable");
        y++;
    }
    finalResult += capitalWordScore;
}

let numberScore = Number = 0;
let numberTrue = Boolean = false;

function numberCheck() {
    let z = 0;
    finalResult -= numberScore;
    numberScore = 0;

    z += pass.value.search("1");
    z += pass.value.search("2");
    z += pass.value.search("3");
    z += pass.value.search("4");
    z += pass.value.search("5");
    z += pass.value.search("6");
    z += pass.value.search("7");
    z += pass.value.search("8");
    z += pass.value.search("9");
    z += pass.value.search("0");

    z += 9;

    if (z >= 0) {
        numberScore = 15;
        numberTrue = true;
        number.classList.add("pluginEnable");
        trues++;
        z = 0;
    }
    if(z < 0){
        number.classList.remove("pluginEnable");
        z++;
    }
    finalResult += numberScore;
}

let charScore = 0;
let charTrue = false;

function charCheck() {
    let w = 0;
    finalResult -= charScore;
    charScore = 0;

    w += pass.value.search("`");
    w += pass.value.search("!");
    w += pass.value.search("@");
    w += pass.value.search("#");
    w += pass.value.search("%");
    w += pass.value.search("^");
    w += pass.value.search("&");
    w += pass.value.search("-");
    w += pass.value.search("_");
    w += pass.value.search("=");

    w += 8;

    if (w >= 0) {
        charScore = 15;
        charTrue = true;
        char.classList.add("pluginEnable");
        trues++;
        w = 0;
    }
    if(w < 0){
        char.classList.remove("pluginEnable");
    }
    finalResult += charScore;
}

function changeClass() {
    result.classList.remove("w-25", "w-50", "w-75", "w-100", "red", "orange", "yellow", "green");
}

let lenghtScore = 0;
let lenghtTrue = false;

pass.addEventListener("input", function () {

    let data = pass.value.length;
    charNumber.textContent = data;
    showPass.textContent = pass.value;
    finalResult -= lenghtScore;

    if (data <= 7) {
        //incorrect
        lenghtScore = 0;
        lenghtTrue = false;
    }
    else if (data >= 8 && data <= 12) {
        //weak
        lenghtScore = 10;
        lenghtTrue = true;
        trues++;
    }
    else if (data >= 13 && data <= 16) {
        //normal
        lenghtScore = 20;
        lenghtTrue = true;
        trues++;
    }
    else if (data >= 17 && data <= 20) {
        //good
        lenghtScore = 30;
        lenghtTrue = true;
        trues++;
    }
    else {
        //exellent
        lenghtScore = 40;
        lenghtTrue = true;
        trues++;
    }
    finalResult += lenghtScore;
});

pass.addEventListener("input", smallWordCheck);

pass.addEventListener("input", captalWordCheck);

pass.addEventListener("input", numberCheck);

pass.addEventListener("input", charCheck);

pass.addEventListener("input", function(){
    console.log(finalResult)

    if(trues >= 1 || lenghtTrue == true){
        
        if (finalResult < 20) {
            changeClass();
            result.textContent = "";
        }
        else if (finalResult > 20 && finalResult <= 40) {
            changeClass();
            result.classList.add("red", "w-25");
            result.textContent = "Weak";
        }
        else if (finalResult > 40 && finalResult <= 60) {
            changeClass();
            result.classList.add("orange", "w-50");
            result.textContent = "Normal";
        }
        else if (finalResult > 60 && finalResult <=80) {
            changeClass();
            result.classList.add("yellow", "w-75");
            result.textContent = "Good";
        }
        else if (finalResult > 80) {
            changeClass();
            result.classList.add("green","w-100");
            result.textContent = "Excellent";
        }
    }
});