class Player {
    constructor(pname, symbol) {
        this.pname = pname;
        this.symbol = symbol;
        this.score = 0;
    }
}

let player1 = null;
let player2 = null;

let gameboard = [["","",""],["","",""],["","",""]];

var xwin = false;
var owin = false;
var draw = false;
var boardfull = false;
var turn = 0;
var gameOver = false; 

const gboard = document.getElementById("gameboard");

const reset = document.getElementById("resetbtn").addEventListener("click", clearBoard);

const pl1 = document.getElementById("player1");
const pl2 = document.getElementById("player2");

document.getElementById("playernames").addEventListener("submit", function(e){
    e.preventDefault();
});

document.getElementById("submitbtn").addEventListener("click", function(e) {
    e.preventDefault();

    let p1name = document.getElementById("p1name").value.trim();
    let p2name = document.getElementById("p2name").value.trim();

    if (!p1name || !p2name) {
        alert("Please enter valid names for both players!");
        return;
    }

    player1 = new Player(p1name, "X");
    player2 = new Player(p2name, "O");

    clearBoard();
    createGameBoard(player1, player2);

    console.log(player1, player2);
});

function createGameBoard(player1, player2) {
    pl1.innerHTML = `<p>${player1.pname} [${player1.symbol}]</p><p>${player1.score}</p>`;
    pl2.innerHTML = `<p>${player2.pname} [${player2.symbol}]</p><p>${player2.score}</p>`;

    gboard.innerHTML = "";
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            const square = document.createElement("div");
            square.classList.add(`${i}`);
            square.classList.add(`${j}`);
            square.setAttribute("id","square");
            square.style.width = "100px";
            square.style.height = "100px";
            square.style.backgroundColor = "#a5b4fc";
            square.textContent = "";
            square.addEventListener("click", addXorO);
            gboard.appendChild(square);
        }
    }
}

function winconditions() {
    if (gameboard[0][0] == gameboard[0][1] && gameboard[0][0] == gameboard[0][2] && gameboard[0][0] !== "") {
        if (gameboard[0][0] == "X") xwin = true;
        else if (gameboard[0][0] == "O") owin = true;
    } else if (gameboard[1][0] == gameboard[1][1] && gameboard[1][0] == gameboard[1][2] && gameboard[1][0] !== "") {
        if (gameboard[1][0] == "X") xwin = true;
        else if (gameboard[1][0] == "O") owin = true;
    } else if (gameboard[2][0] == gameboard[2][1] && gameboard[2][0] == gameboard[2][2] && gameboard[2][0] !== "") {
        if (gameboard[2][0] == "X") xwin = true;
        else if (gameboard[2][0] == "O") owin = true;
    } else if (gameboard[0][0] == gameboard[1][1] && gameboard[0][0] == gameboard[2][2] && gameboard[0][0] !== "") {
        if (gameboard[0][0] == "X") xwin = true;
        else if (gameboard[0][0] == "O") owin = true;
    } else if (gameboard[0][2] == gameboard[1][1] && gameboard[0][2] == gameboard[2][0] && gameboard[0][2] !== "") {
        if (gameboard[0][2] == "X") xwin = true;
        else if (gameboard[0][2] == "O") owin = true;
    } else if (gameboard[0][0] == gameboard[1][0] && gameboard[0][0] == gameboard[2][0] && gameboard[0][0] !== "") {
        if (gameboard[0][0] == "X") xwin = true;
        else if (gameboard[0][0] == "O") owin = true;
    } else if (gameboard[0][1] == gameboard[1][1] && gameboard[0][1] == gameboard[2][1] && gameboard[0][1] !== "") {
        if (gameboard[0][1] == "X") xwin = true;
        else if (gameboard[0][1] == "O") owin = true;
    } else if (gameboard[0][2] == gameboard[1][2] && gameboard[0][2] == gameboard[2][2] && gameboard[0][2] !== "") {
        if (gameboard[0][2] == "X") xwin = true;
        else if (gameboard[0][2] == "O") owin = true;
    }

    if (xwin || owin) {
        gameOver = true;
        if (xwin) player1.score++;
        if (owin) player2.score++;
        updateScores();
        showResult();
        return;
    }

    boardfull = gameboard.flat().every(cell => cell !== "");

    if (boardfull) {
        draw = true;
        gameOver = true;
        showResult();
        return;
    }
}

function updateScores() {
    pl1.innerHTML = `<p>${player1.pname} [${player1.symbol}]</p><p>${player1.score}</p>`;
    pl2.innerHTML = `<p>${player2.pname} [${player2.symbol}]</p><p>${player2.score}</p>`;
}

function addXorO(e) {
    if (gameOver) return;

    const square = e.target;
    if (square.textContent !== "") return;

    const choice = turn % 2 === 0 ? "X" : "O";
    square.textContent = choice;

    if (square.classList[1] == null) {
        gameboard[square.classList[0]][square.classList[0]] = choice;
    } else {
        gameboard[square.classList[0]][square.classList[1]] = choice;
    }

    turn++;
    winconditions();
}

function showResult() {
    const resultsec = document.getElementById("result");
    resultsec.innerHTML = "";

    const result = document.createElement("div");
    result.classList.add("winner");

    if (xwin) {
        result.textContent = `${player1.pname} WINS!!!`;
        result.style.color = "#15803d";
    } else if (owin) {
        result.textContent = `${player2.pname} WINS!!!`;
        result.style.color = "#15803d";
    } else if (draw) {
        result.textContent = "DRAW :/";
        result.style.color = "#92400e";
    }

    resultsec.appendChild(result);
}

function clearBoard() {
    gboard.innerHTML = "";
    gameboard = [["", "", ""], ["", "", ""], ["", "", ""]];
    xwin = false;
    owin = false;
    draw = false;
    boardfull = false;
    turn = 0;
    gameOver = false;
    result.textContent = "";
    if (player1 && player2) {
        createGameBoard(player1, player2);
    }
}
