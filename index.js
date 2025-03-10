console.log("Tic Tac Toe");

let turn = "X";
let gameover = false;

const changeTurn = () => {
    return turn === "X" ? "O" : "X";
}

const checkWin = () => {
    let boxtexts = document.getElementsByClassName("boxtext");
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 4, 8],
        [2, 4, 6],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
    ];

    wins.forEach((e) => {
        if (boxtexts[e[0]].innerText === boxtexts[e[1]].innerText && boxtexts[e[2]].innerText === boxtexts[e[1]].innerText && boxtexts[e[0]].innerText !== "") {
            document.querySelector('.info').innerText = boxtexts[e[0]].innerText + " Won!!";
            gameover = true;
        }
    });
}

// Check for a tie condition
const checkTie = () => {
    let boxtexts = document.getElementsByClassName("boxtext");
    let isTie = true;
    for (let i = 0; i < boxtexts.length; i++) {
        if (boxtexts[i].innerText === "") {
            isTie = false;
            break;
        }
    }
    return isTie;
}

// Game Logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach((element) => {
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', (e) => {
        if (boxtext.innerText === '' && !gameover) {
            boxtext.innerText = turn;
            turn = changeTurn();
            checkWin();
            if (!gameover) {
                if (checkTie()) {
                    document.querySelector('.info').innerText = "It's a Tie!";
                    gameover = true;
                } else {
                    document.getElementsByClassName("info")[0].innerText = "Turn for " + turn + " ";
                }
            }
        }
    });
});

// Reset the game
let resetButton = document.getElementById('reset');
resetButton.addEventListener('click', () => {
    let boxtexts = document.getElementsByClassName("boxtext");
    Array.from(boxtexts).forEach((element) => {
        element.innerText = "";
    });

    turn = "X";
    gameover = false;
    document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
});
