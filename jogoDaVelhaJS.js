//Names - Inputs

const btn = document.querySelector("#buttonOK");

btn.addEventListener("click", function(e){

    e.preventDefault();
    const name1 = document.querySelector("#name1");
    const value1 = name1.value1;

    const name2 = document.querySelector("#name2");
    const value2 = name2.value2;

});

//Validação e Displays
function run() {
    if(name1.value=="" || name2.value == ""){
			alert( "Insira os nomes dos Jogadores!" );
			return false;
    }else{

    document.getElementById("topJV").style.display = "none";
    document.getElementById("name1").style.display = "none";
    document.getElementById("name2").style.display = "none";
    document.getElementById("buttonOK").style.display = "none";
    document.getElementById("gamers").style.display = "block";
    document.getElementById("game").style.display = "block";
    document.getElementById("button_end").style.display = "block";

    }
}     

//Game
var gamer, winner = null;
var deuEmpate = false;
var gamerSelected = document.getElementById('gamer-selected');
var winnerSelected = document.getElementById('winner-selected');

changePlayer('X');

var count=0;

function chooseSquare(id) {

    if (winner !== null) {
      return;
    }

    var square = document.getElementById(id);
    if (square.innerHTML !== '-') {
        return;
    }

    square.innerHTML = gamer;
    square.style.color = '#000';

    if (gamer === 'X') {
        gamer = 'O';
    } else {
        gamer = 'X';
    }

    count++;

    if(count==9){
        document.getElementById("winner-selected").innerHTML = "#VELHA";
        document.getElementById(1).style.background = '#8f0e79';
        document.getElementById(2).style.background = '#8f0e79';
        document.getElementById(3).style.background = '#8f0e79';
        document.getElementById(4).style.background = '#8f0e79';
        document.getElementById(5).style.background = '#8f0e79';
        document.getElementById(6).style.background = '#8f0e79';
        document.getElementById(7).style.background = '#8f0e79';
        document.getElementById(8).style.background = '#8f0e79';
        document.getElementById(9).style.background = '#8f0e79';
        alert("VELHA");
    }

    changePlayer(gamer);
    checksWinner();
}

function changePlayer(valor) {
    gamer = valor;

    if (gamer == 'X'){
        document.getElementById("gamer-selected").innerHTML = document.getElementById("name1").value;
    }else{
        document.getElementById("gamer-selected").innerHTML = document.getElementById("name2").value;
    }
}

function checksWinner() {
    var square1 = document.getElementById(1);
    var square2 = document.getElementById(2);
    var square3 = document.getElementById(3);
    var square4 = document.getElementById(4);
    var square5 = document.getElementById(5);
    var square6 = document.getElementById(6);
    var square7 = document.getElementById(7);
    var square8 = document.getElementById(8);
    var square9 = document.getElementById(9);
    
    if (checkSequence(square1, square2, square3)) {
        changesColorSquare(square1, square2, square3);
        changeWinner(square1);
        return;
    }

    if (checkSequence(square4, square5, square6)) {
        changesColorSquare(square4, square5, square6);
        changeWinner(square4);
        return;
    }

    if (checkSequence(square7, square8, square9)) {
        changesColorSquare(square7, square8, square9);
        changeWinner(square7);
        return;
    }

    if (checkSequence(square1, square4, square7)) {
        changesColorSquare(square1, square4, square7);
        changeWinner(square1);
        return;
    }

    if (checkSequence(square2, square5, square8)) {
        changesColorSquare(square2, square5, square8);
        changeWinner(square2);
        return;
    }

    if (checkSequence(square3, square6, square9)) {
        changesColorSquare(square3, square6, square9);
        changeWinner(square3);
        return;
    }

    if (checkSequence(square1, square5, square9)) {
        changesColorSquare(square1, square5, square9);
        changeWinner(square1);
        return;
    }

    if (checkSequence(square3, square5, square7)) {
        changesColorSquare(square3, square5, square7);
        changeWinner(square3);
    }
}

function changeWinner(square) {
    winner = square.innerHTML;
        if (winner == 'X'){
            
            document.getElementById("winner-selected").innerHTML = "Parabéns, " + document.getElementById("name1").value + " venceu!";
            alert(document.getElementById("name1").value + " venceu!");
        }
        if(winner == 'O'){
            document.getElementById("winner-selected").innerHTML = "Parabéns, " + document.getElementById("name2").value + " venceu!";
            alert(document.getElementById("name2").value + " venceu!");
        }
}

function changesColorSquare(square1, square2, square3) {
    square1.style.background = '#8f0e79';
    square2.style.background = '#8f0e79';
    square3.style.background = '#8f0e79';
}

function checkSequence(square1, square2, square3) {
    var igual = false;

    if (square1.innerHTML !== '-' && square1.innerHTML === square2.innerHTML && square2.innerHTML === square3.innerHTML) {
        igual = true;
    }

    return igual;
}

//Button "New Game"
function restart() {
    winner = null;
    winnerSelected.innerHTML = '';
    gamerSelected.innerHTML = '';
    count=0;

    for (var i = 1; i <= 9; i++) {
        var square = document.getElementById(i);
        square.style.background = '#71b340';
        square.style.color = '#71b340';
        square.innerHTML = '-';
    }

    changePlayer('X');
}