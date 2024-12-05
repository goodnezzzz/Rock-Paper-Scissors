let totalSets;
let userScore = 0;
let computerScore = 0;
let currentRound = 0;

function startGame(sets) {
    totalSets = sets;
    userScore = 0;
    computerScore = 0;
    currentRound = 0;
    document.getElementById("gameArea").style.display = "block";
    document.getElementById("roundResult").innerHTML = "";
    document.getElementById("score").innerHTML = `Your Score: 0 | Computer Score: 0`;
    document.getElementById("result").innerHTML = "";
}

function playRound(userChoice) {
    const choices = ["rock", "paper", "scissors"];
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    
    let roundResult = `You chose ${userChoice}. Computer chose ${computerChoice}.`;
    if (userChoice === computerChoice) {
        roundResult += " It's a tie!";
    } else if (
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissors" && computerChoice === "paper")) {
            roundResult += " You win this round!";
            userScore++;
        }
        else {
        roundResult += " Computer wins this round!";
        computerScore++;
    }

    currentRound++;
    document.getElementById("roundResult").innerHTML = roundResult;
    document.getElementById("score").innerHTML = `Your Score: ${userScore} | Computer Score: ${computerScore}`;
    

    if (currentRound === totalSets) {
        determineWinner();
    }
}

function determineWinner() {
    let finalResult;
    if (userScore > computerScore) {
        finalResult = "Congratulations! You are the final winner!";
    } else if (userScore < computerScore) {
        finalResult = "Computer is the final winner!";
    } else {
        finalResult = "It's a tie overall!";
    }
    document.getElementById("result").innerHTML = finalResult;
    document.getElementById("gameArea").style.display = "none";
}

// roundResult.style.color = 'red';
// result.style.color = 'purple';
result.style.fontWeight = 'bolder'
