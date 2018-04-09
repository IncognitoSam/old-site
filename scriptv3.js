var playerSymbol = "X";
var turn = 1;

function resetGame() {
    playerSymbol = "X";
    turn = 1;
    document.getElementById("b1").innerHTML = "-";
    document.getElementById("b2").innerHTML = "-";
    document.getElementById("b3").innerHTML = "-";
    document.getElementById("b4").innerHTML = "-";
    document.getElementById("b5").innerHTML = "-";
    document.getElementById("b6").innerHTML = "-";
    document.getElementById("b7").innerHTML = "-";
    document.getElementById("b8").innerHTML = "-";
    document.getElementById("b9").innerHTML = "-";
    document.getElementById("b1").classList.remove("played");
    document.getElementById("b2").classList.remove("played");
    document.getElementById("b3").classList.remove("played");
    document.getElementById("b4").classList.remove("played");
    document.getElementById("b5").classList.remove("played");
    document.getElementById("b6").classList.remove("played");
    document.getElementById("b7").classList.remove("played");
    document.getElementById("b8").classList.remove("played");
    document.getElementById("b9").classList.remove("played");
}

function checkWin() {
    if ((document.getElementById("b1").innerHTML == playerSymbol) && (document.getElementById("b2").innerHTML == playerSymbol) && (document.getElementById("b3").innerHTML == playerSymbol)) {
        document.getElementById("result").innerHTML = (playerSymbol + " wins!");
        resetGame();
        return true;
    } else if ((document.getElementById("b4").innerHTML == playerSymbol) && (document.getElementById("b5").innerHTML == playerSymbol) && (document.getElementById("b6").innerHTML == playerSymbol)) {
        document.getElementById("result").innerHTML = (playerSymbol + " wins!");
        resetGame();
        return true;
    } else if ((document.getElementById("b7").innerHTML == playerSymbol) && (document.getElementById("b8").innerHTML == playerSymbol) && (document.getElementById("b9").innerHTML == playerSymbol)) {
        document.getElementById("result").innerHTML = (playerSymbol + " wins!");   
        resetGame();
        return true;
    } else if ((document.getElementById("b1").innerHTML == playerSymbol) && (document.getElementById("b4").innerHTML == playerSymbol) && (document.getElementById("b7").innerHTML == playerSymbol)) {
        document.getElementById("result").innerHTML = (playerSymbol + " wins!");
        resetGame();
        return true;
    } else if ((document.getElementById("b2").innerHTML == playerSymbol) && (document.getElementById("b5").innerHTML == playerSymbol) && (document.getElementById("b8").innerHTML == playerSymbol)) {
        document.getElementById("result").innerHTML = (playerSymbol + " wins!");
        resetGame();
        return true;
    } else if ((document.getElementById("b3").innerHTML == playerSymbol) && (document.getElementById("b6").innerHTML == playerSymbol) && (document.getElementById("b8").innerHTML == playerSymbol)) {
        document.getElementById("result").innerHTML = (playerSymbol + " wins!");
        resetGame();
        return true;
    } else if ((document.getElementById("b1").innerHTML == playerSymbol) && (document.getElementById("b5").innerHTML == playerSymbol) && (document.getElementById("b9").innerHTML == playerSymbol)) {
        document.getElementById("result").innerHTML = (playerSymbol + " wins!");
        resetGame();
        return true;
    } else if ((document.getElementById("b7").innerHTML == playerSymbol) && (document.getElementById("b5").innerHTML == playerSymbol) && (document.getElementById("b3").innerHTML == playerSymbol)) {
        document.getElementById("result").innerHTML = (playerSymbol + " wins!");
        resetGame();
        return true;
    }
}

function fillSquare(clicked_id) {    
    if(document.getElementById(clicked_id).innerHTML == "-") {
    	document.getElementById(clicked_id).innerHTML = playerSymbol;
        document.getElementById(clicked_id).classList.add("played");
        turn = turn + 1;
        if (!checkWin()) {
            if (playerSymbol == "X") {
                playerSymbol = "O";
            } else {
                playerSymbol = "X";
            }
        } 
        if (turn > 9) {
            document.getElementById("result").innerHTML = ("It's a tie.");
            resetGame();
        }     
    }
}