let gameboard = [["","","",],["","",""],["","",""]];

var xwin = false;
var owin = false;
var draw = false;
var boardfull = false;
var turn = 0;

const gboard = document.getElementById("gameboard");

const reset = document.getElementById("resetbtn").addEventListener("click", clearBoard);
function createGameBoard()
{
    for(let i=0;i<3;i++){
        for(let j=0;j<3;j++){
            const square = document.createElement("div");

            square.classList.add(`${i}`);
            square.classList.add(`${j}`);

            square.setAttribute('draggable',"false");
            square.style.backgroundColor = "#F8F8FF";

            square.addEventListener("click", addXorO);

            square.style.width = 100 + "px";
            square.style.height = 100 + "px";


            gboard.appendChild(square);
        }
    }
}

function winconditions()
{
    if(gameboard[0][0] == gameboard[0][1] && gameboard[0][0] == gameboard[0][2]){
        if(gameboard[0][0] == "X"){
            xwin = true;
            owin = false;
            draw = false;
            showResult();
        }
        else if(gameboard[0][0] == "O"){
            owin = true;
            xwin = false;
            draw = false;
            showResult();
        }
    }
    else if(gameboard[1][0] == gameboard[1][1] && gameboard[1][0] == gameboard[1][2]){
        if(gameboard[1][0] == "X"){
            xwin = true;
            owin = false;
            draw = false;
            showResult();
        }
        else if(gameboard[1][0] == "O"){
            owin = true;
            xwin = false;
            draw = false;
            showResult();
        }
    }
    else if(gameboard[2][0] == gameboard[2][1] && gameboard[2][0] == gameboard[2][2]){
        if(gameboard[2][0] == "X"){
            xwin = true;
            owin = false;
            draw = false;
            showResult();
        }
        else if(gameboard[2][0] == "O"){
            owin = true;
            xwin = false;
            draw = false;
            showResult();
        }
    }
    else if(gameboard[0][0] == gameboard[1][1] && gameboard[0][0] == gameboard[2][2]){
        if(gameboard[0][0] == "X"){
            xwin = true;
            owin = false;
            draw = false;
            showResult();
        }
        else if(gameboard[0][0] == "O"){
            owin = true;
            xwin = false;
            draw = false;
            showResult();
        }
    }
    else if(gameboard[0][2] == gameboard[1][1] && gameboard[0][2] == gameboard[2][0]){
        if(gameboard[0][2] == "X"){
            xwin = true;
            owin = false;
            draw = false;
            showResult();
        }
        else if(gameboard[0][2] == "O"){
            owin = true;
            xwin = false;
            draw = false;
            showResult();
        }
    }
    else if(gameboard[0][0] == gameboard[1][0] && gameboard[0][0] == gameboard[2][0]){
        if(gameboard[0][0] == "X"){
            xwin = true;
            owin = false;
            draw = false;
            showResult();
        }
        else if(gameboard[0][0] == "O"){
            owin = true;
            xwin = false;
            draw = false;
            showResult();
        }
    }
    else if(gameboard[0][1] == gameboard[1][1] && gameboard[0][1] == gameboard[2][1]){
        if(gameboard[0][1] == "X"){
            xwin = true;
            owin = false;
            draw = false;
            showResult();
        }
        else if(gameboard[0][1] == "O"){
            owin = true;
            xwin = false;
            draw = false;
            showResult();
        }
    }
    else if(gameboard[0][2] == gameboard[1][2] && gameboard[0][2] == gameboard[2][2]){
        if(gameboard[0][2] == "X"){
            xwin = true;
            owin = false;
            draw = false;
            showResult();
        }
        else if(gameboard[0][2] == "O"){
            owin = true;
            xwin = false;
            draw = false;
            showResult();
        }
    }
    
    for(let i = 0;i<3;i++){
        for(let j=0;j<3;j++){
            if(gameboard[i][j]!==""){
                boardfull = true;
            }
            else{
                boardfull = false;
                break;
            }
        }
        if(boardfull==false){
            break;
        }
    }

    if(boardfull==true && xwin==false && owin==false){
        draw = true;
        showResult();
    }
}

console.log(gameboard);

function addXorO(e)
{
    const square = e.target;
    if(square.textContent!=="") return;

    const player = turn%2==0?"X":"O";
    square.textContent = player;
    if(square.classList[1]==null) gameboard[square.classList[0]][square.classList[0]] = player;
    
    else gameboard[square.classList[0]][square.classList[1]] = player;

    turn++;

    winconditions();
}

function showResult() {
    const resultsec = document.getElementById("result");
    resultsec.innerHTML = "";

    const result = document.createElement("div");
    result.classList.add("winner");

    if (xwin) {
        result.textContent = "X WINS!!!";
    } else if (owin) {
        result.textContent = "O WINS!!!";
    } else if (draw) {
        result.textContent = "DRAW :/";
    }

    resultsec.appendChild(result);
}


function clearBoard() {
    gboard.innerHTML = "";
    gameboard = [["","",""],["","",""],["","",""]];
    xwin = false;
    owin = false;
    draw = false;
    boardfull = false;
    turn = 0;
    createGameBoard();
}

createGameBoard();


