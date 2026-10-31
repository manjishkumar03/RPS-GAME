let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");

let compChoice = () =>{
    const options = ["rock", "paper", "scissor"];
    const ranInd = math.floor(math.random()*3);
    return options[ranInd];
}

const playGame = (userChoice) =>{
    console.log(userchoice);
    const compChoice = (computer) => {
        console.log(userChoice);
    }
}

choices.forEach((val) =>{
    let userChoice = val.getAttribute("id");
    val.onclick = () =>{
        console.log("choice was clicked", userChoice);
        playGame(userChoice);
    }
});