let gameboard = [[],[],[]];

for(let i=0;i<3;i++){
    for(let j=0;j<3;j++){
        gameboard[i][j] = "_";
    }
}

var xwin = false;
var owin = false;
var draw = false;
var boardfull = false;
var turn = 0;

for(let i=0;i<3;i++){
    console.log(`${gameboard[i][0]}   ${gameboard[i][1]}   ${gameboard[i][2]}`);
}

function winconditions()
{
    if(gameboard[0][0] == gameboard[0][1] && gameboard[0][0] == gameboard[0][2]){
        if(gameboard[0][0] == "X"){
            xwin = true;
            owin = false;
            draw = false;
        }
        else if(gameboard[0][0] == "O"){
            owin = true;
            xwin = false;
            draw = false;
        }
    }
    else if(gameboard[1][0] == gameboard[1][1] && gameboard[1][0] == gameboard[1][2]){
        if(gameboard[1][0] == "X"){
            xwin = true;
            owin = false;
            draw = false;
        }
        else if(gameboard[1][0] == "O"){
            owin = true;
            xwin = false;
            draw = false;
        }
    }
    else if(gameboard[2][0] == gameboard[2][1] && gameboard[2][0] == gameboard[2][2]){
        if(gameboard[2][0] == "X"){
            xwin = true;
            owin = false;
            draw = false;
        }
        else if(gameboard[2][0] == "O"){
            owin = true;
            xwin = false;
            draw = false;
        }
    }
    else if(gameboard[0][0] == gameboard[1][1] && gameboard[0][0] == gameboard[2][2]){
        if(gameboard[0][0] == "X"){
            xwin = true;
            owin = false;
            draw = false;
        }
        else if(gameboard[0][0] == "O"){
            owin = true;
            xwin = false;
            draw = false;
        }
    }
    else if(gameboard[0][2] == gameboard[1][1] && gameboard[0][2] == gameboard[2][0]){
        if(gameboard[0][2] == "X"){
            xwin = true;
            owin = false;
            draw = false;
        }
        else if(gameboard[0][2] == "O"){
            owin = true;
            xwin = false;
            draw = false;
        }
    }
    else if(gameboard[0][0] == gameboard[1][0] && gameboard[0][0] == gameboard[2][0]){
        if(gameboard[0][0] == "X"){
            xwin = true;
            owin = false;
            draw = false;
        }
        else if(gameboard[0][0] == "O"){
            owin = true;
            xwin = false;
            draw = false;
        }
    }
    else if(gameboard[0][1] == gameboard[1][1] && gameboard[0][1] == gameboard[2][1]){
        if(gameboard[0][1] == "X"){
            xwin = true;
            owin = false;
            draw = false;
        }
        else if(gameboard[0][1] == "O"){
            owin = true;
            xwin = false;
            draw = false;
        }
    }
    else if(gameboard[0][2] == gameboard[1][2] && gameboard[0][2] == gameboard[2][2]){
        if(gameboard[0][2] == "X"){
            xwin = true;
            owin = false;
            draw = false;
        }
        else if(gameboard[0][2] == "O"){
            owin = true;
            xwin = false;
            draw = false;
        }
    }
    
    for(let i = 0;i<3;i++){
        for(let j=0;j<3;j++){
            if(gameboard[i][j]!="_"){
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
    }

}

function getInput()
{
    console.log("Coordinates of gameboard: (row, column)");
    console.log("(0, 0)  (0, 1)  (0, 2)");
    console.log("(1, 0)  (1, 1)  (1, 2)");
    console.log("(2, 0)  (2, 1)  (2, 2)");
    while(true){
        let r = prompt("Enter the row number: (0/1/2)");
        let c = prompt("Enter the column number: (0/1/2)");

        if(r>=3 || c>=3){
            alert("INVALID INPUT; TRY AGAIN.");
            continue;
        }
        if(turn%2==0){
            gameboard[r][c] = "X";
            turn++;
        }
        else{
            gameboard[r][c] = "O";
            turn++;
        }

        winconditions();

        if(xwin==true){
            console.log("X WINS!!!");
            console.log("Final board: ");
            for(let i=0;i<3;i++){
                console.log(`${gameboard[i][0]}   ${gameboard[i][1]}   ${gameboard[i][2]}`);
            }
            break;
        }
        else if(owin==true){
            console.log("O WINS!!!");
            console.log("Final board: ");
            for(let i=0;i<3;i++){
                console.log(`${gameboard[i][0]}   ${gameboard[i][1]}   ${gameboard[i][2]}`);
            }
            break;
        }
        else if(draw==true){
            console.log("DRAW :/");
            console.log("Final board: ");
            for(let i=0;i<3;i++){
                console.log(`${gameboard[i][0]}   ${gameboard[i][1]}   ${gameboard[i][2]}`);
            }
            break;
        }

        for(let i=0;i<3;i++){
            console.log(`${gameboard[i][0]}   ${gameboard[i][1]}   ${gameboard[i][2]}`);
        }

        console.log("********************");
    }
}

getInput();