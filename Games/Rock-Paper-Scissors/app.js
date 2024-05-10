let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randIdx = Math.floor(Math.random() * 3);  // math.floor se decimal k baad ki values round off hojati hain//math.random fn() generates random values from 0 to 1
  return options[randIdx];
};

const drawGame = () => {
  msg.innerText = "Game was Draw. Play again.";
  msg.style.backgroundColor = "#081b31";
};

const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userScore++;
    userScorePara.innerText = userScore;
    msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
  } else {
    compScore++;
    compScorePara.innerText = compScore;
    msg.innerText = `You lost. ${compChoice} beats your ${userChoice}`;
    msg.style.backgroundColor = "red";
  }
};

//below fn() to select computer choice 
const playGame = (userChoice) => {   //playGame(userchoice)--> yani computer ko pta ha k userne kya choice select ki ha 
  //Generate computer choice
  const compChoice = genCompChoice();

  if (userChoice === compChoice) {
    //Draw Game
    drawGame();
  } else {
    let userWin = true;
     if (userChoice === "rock") {
      //scissors, paper
      userWin = compChoice === "paper" ? false : true;   // on usrchoice=rock, userwin false if computer choose paper and userwin true if computer choose scissors
    } else if (userChoice === "paper") {
      //rock, scissors
      userWin = compChoice === "scissors" ? false : true;
    } else {   // checking for scissors 
      //rock, paper
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    // console.log("choice was clicked")
    const userChoice = choice.getAttribute("id");
    //console.log("the clicked choice is ", choice);
    playGame(userChoice);
  });
});


