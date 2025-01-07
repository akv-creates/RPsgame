let UserScore = 0;
let CompScore = 0;
const msg = document.querySelector('#msg');
const choices = document.querySelectorAll(".choice");
let userScore = document.querySelector("#user-score");
let compScore = document.querySelector("#comp-score");
let usercurrScore = 0;
let compcurrScore = 0;
const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}
const draw = () =>{
    console.log("The Game was Draw");
    msg.innerText = ("Game was Draw, Play Again");
    msg.style.backgroundColor = "#9AA6B2";
}
const showWinner = (userWin, compChoice, userChoice)=>{
    if(userWin){
        console.log("You win the game");
        msg.innerText = (`You Won! your ${compChoice} beats ${userChoice}`);
        msg.style.backgroundColor = "#06402B";
        msg.style.Color = "#EEEEEE";
        usercurrScore = usercurrScore+1
        userScore.innerText = `${usercurrScore}`
    }else{
        console.log("You Lose the game");
        msg.innerText = (`You lost game! ${userChoice} beats your ${compChoice}`);
        msg.style.backgroundColor = "red";
        compcurrScore = compcurrScore+1
        compScore.innerText = `${compcurrScore}`
    }
}
const playGame = (userChoice)=>{
    console.log("user choice is", userChoice);
    const compChoice = genCompChoice();
    console.log("comp choice =", compChoice);

    if(userChoice === compChoice){
        //draw game
        draw();
    }else{
    let userWin = true;
    if(userChoice === "Rock"){
        // scissors or paper
       userWin = compChoice === "scissors" ? true : false;
    } else if(userChoice === "paper"){
        userWin = compChoice === "rock" ? true : false;
    }else{
        userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
}
};
choices.forEach((choice)=>{
    choice.addEventListener("click", ()=>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})

