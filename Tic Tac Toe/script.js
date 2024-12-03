let boxes = document.querySelectorAll(".box");
let rst = document.querySelector("#restart");
let newgamebtn = document.querySelector("#new-game");
let winmsg = document.querySelector(".winner-msg");
let msg = document.querySelector("#msg");
let count = 0;
let start = document.querySelector("#startgame");

let playermsg = document.querySelector(".player-msg");
let playerdian = document.querySelector("#player-dian");
let dian = "X";

let turnX = true;  // player X and Player 0

const winpattern = [[0,1,2],[3,4,5],[6,7,8],
                    [0,3,6],[1,4,7],[2,5,8],
                    [0,4,8],[2,4,6]];
            
const strgame = () =>{ 
    boxes.forEach((box) => {
                start.classList.add("hide"); //hide start game button
                playermsg.classList.remove("hide"); //show the player message
                    
                // Set the initial message for Player X
                playerdian.innerText = `Player's ${dian} turn`;

                box.addEventListener("click",()=> 
                {   
                    rst.classList.remove("hide");
                    count++;
                        console.log(count);
                        if(turnX && dian === "X"){
                            playerdian.innerText = `Player's ${dian} turn`;
                            box.innerText = "X";
                            dian = "O";
                            turnX = false;
                        }else{
                            playerdian.innerText = `Player's ${dian} turn`;
                            box.innerText = "O";
                            dian = "X";
                            turnX = true;
                        }

                         // Update the player's turn message
                        playerdian.innerText = `Player's ${dian} turn`;
        
                        box.disabled = true; 
                        checkwin();
                    
                },{once:true}); // Ensure event listener is added only once per reset
        });

    };
const disableboxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
};

const enableboxes = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
};

const showwinner = (winner) =>{
    playermsg.classList.add("hide"); //show the player message
    msg.innerText = `winner is ${winner}`;
    winmsg.classList.remove("hide");
};

const checkwin = () => {
    for(let pattern of winpattern){
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;
        if(pos1val!="" && pos2val!="" && pos3val!="")
        {
            if(pos1val === pos2val && pos2val === pos3val)
            {
                disableboxes();
                showwinner(pos1val);

                // Hide Restart button and show New Game button
                rst.classList.add("hide");
                newgamebtn.classList.remove("hide");
                return;
            }
        }
    }

    if(count === 9)
    {
        playermsg.classList.add("hide"); //show the player message
        msg.innerText = `Matche has been Draw`;
        winmsg.classList.remove("hide");

        // hide restart button and show new game button
        rst.classList.add("hide");
        newgamebtn.classList.remove("hide");
    }
};

const resetgame = () => {
    turnX = true;
    dian = "X";
    count = 0;
    enableboxes(); 
    winmsg.classList.add("hide");

    // Display initial turn message
    playerdian.innerText = `Player's ${dian} turn`; // Show Player X's turn
    playermsg.classList.remove("hide"); // Ensure the message is visible

    // Reset button visibility
    rst.classList.add("hide"); // Hide Restart button initially
    newgamebtn.classList.add("hide"); // Hide New Game button initially

    strgame();
};

start.addEventListener("click",strgame);

newgamebtn.addEventListener("click", resetgame);
rst.addEventListener("click",() =>{
    resetgame();
    rst.classList.remove("hide"); // Keep Restart button visible during the game
});
    

        