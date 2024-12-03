let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userscorepara = document.querySelector("#user-score");
const compscorepara = document.querySelector("#comp-score");


const drawgame = () =>{
    msg.innerText = "Round was Draw"; 
    msg.style.backgroundColor = "brown";
}

const generatecompchoice = () =>{
    //rock , paper ,scissors
    const opt = ["rock","paper","scissors"];
    const randidx = Math.floor(Math.random() * 3);
    return opt[randidx];
}

const showwinner = (userwin) => {
    if(userwin){
        userscore++;
        userscorepara.innerText = userscore;
        msg.innerText = "You won this round"; 
        msg.style.backgroundColor = "green";
    }else{
        compscore++;
        compscorepara.innerText = compscore;z
        msg.innerText = "You lose this round"; 
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userchoice) => {
    //generate computer choice
    const compchoice = generatecompchoice();
    if(userchoice === compchoice){
        drawgame();
    } 
    else{
        let userwin = true;
        if(userchoice === "rock"){
            // computer can have either scisscors or paper
            userwin = compchoice === "paper" ? false : true;
        }else if(userchoice === "paper"){
            // computer can have either scisscors or rock
            userwin = compchoice === "scissors" ? false : true;
        }else{
            // user choice is scissors
            // computer can have either rock or paper
            userwin = compchoice === "rock" ? false : true;
        }
        showwinner(userwin);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click",() =>{
        const userchoice = choice.getAttribute("id");
        playGame(userchoice);
    });
});