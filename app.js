let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#resetbtn");
let newgamebtn  =  document.querySelector("#newbtn");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true;
let count = 0;
 
const winpatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

const resetgame = () => {
    turnO = true;
    count = 0;
    enableboxes();
    msgcontainer.classList.add("hide");
};


boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if(turnO) {
            box.innerText = "O";
            turnO = false;
    
        } else {
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        count++;

        checkwinner();
    });
});

    const disableboxes = () => {
        for(let box of boxes) {
            box.disables = true;
        }
    };

    const enableboxes = () => {
        for(let box of boxes) {
            box.disable = false;
            box.innerText = "";
        }
    };

    const showwinner = (winner) => {
        msg.innerText = `congrotualtions, winner is ${winner}`;
        msgcontainer.classList.remove("hide");
        disableboxes();
    };
const checkwinner = () => {
    for(let pattern of winpatterns) {
           let pos1val = boxes[pattern[0]].innerText;
           let pos2val = boxes[pattern[1]].innerText; 
           let pos3val = boxes[pattern[2]].innerText;
    

            if ( pos1val != "" && pos2val != "" && pos3val != "") {
                if (pos1val === pos2val && pos2val === pos3val) {
                    console.log("winner",pos1val);
                    showwinner(pos1val);
                    return true;
                }

            }
        }

    };

    newgamebtn.addEventListener("click", resetgame);
    resetbtn.addEventListener("click", resetgame);