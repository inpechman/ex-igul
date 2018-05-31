var nextPlayer = "X";
var nextPlayerElm = document.getElementById("nextPlayerElm");
var gameWon = false;
var winner = "";
var gameBoard = initBoard();

function switchNextPlayer() {
    nextPlayer = (nextPlayer === "X" ? "O" : "X");
    nextPlayerElm.innerText = nextPlayer;
}

function carrieWinningFlag() {
    winningFlag = document.createElement("div");
    winningFlag.innerText = winner + " is the WINNER!!!";
    document.body.appendChild(winningFlag);
}

function checkForWinner() {
    var winningPositions = [
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    for (var pos of winningPositions) {
        var a = (gameBoard[pos[0]].innerText);
        var b = (gameBoard[pos[1]].innerText);
        var c = (gameBoard[pos[2]].innerText);
        check = (a !== "" && a === b && a === c);
        if (check) {
            gameWon = true;
            winner = gameBoard[pos[0]].innerText;
            carrieWinningFlag()
            break;
        }
    }
    console.log("")
}

function initBoard() {
    var gameBoard = [];
    for (var i = 0; i < 9; i++) {
        gameBoard[i] = document.getElementById("cell" + (i + 1) + "Elm");
        gameBoard[i].onclick = function () {
            // TODO
            if (this.innerText === "") {
                this.innerText = nextPlayer;
                checkForWinner();
                switchNextPlayer();
            }
        }
    }
    return gameBoard;
}
