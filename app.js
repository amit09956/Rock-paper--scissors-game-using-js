let userScore = 0;
let computerScore = 0;
const choices = document.querySelectorAll(".choice");

const getComChoice=()=>{
    const choices = ["rock", "paper", "scissors"];
    const randomNumber = Math.floor(Math.random() * choices.length);
}


const playGame=(choiceId)=>{
    console.log("user cjhoice=",choiceId);
}



choices.forEach((choice) => {
    // console.log(choice);
    choice.addEventListener("click", () => {
        const choiceId = choice.getAttribute("id");
        playGame(choiceId);
    });
});