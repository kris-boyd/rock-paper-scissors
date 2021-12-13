
//initialize scores
let playerScore = 0;
let computerScore = 0;

/* playerSelection
listen for a button to be clicked
and play a round of the game */

document.body.addEventListener('click', e => {
    if (e.target.classList.contains('btn-lg') ) {
        let playerSelection = e.target.id;
        playRound(playerSelection);
        
    }
})
/* computerPlay function that randomly returns Rock Paper or scissors
computerSelection variable =    
generate random number between 1 and 3

*/
function computerPlay() {

    let currentRandom = Math.floor(Math.random() * 3) + 1;
    let selection = "";
    if (currentRandom == 1) {
        selection = "rock";
    } else if (currentRandom == 2) {
        selection = "paper";
    } else {
        selection = "scissors"
    }
    return selection
}


/*  make playRound function
    takes 2 parameters playerSelection and computerSelection
    return outcome
*/ 


function playRound(playerSelection,winner) {
    let computerSelection = computerPlay();
    let outcome = "";
    let outcomeReason = "";
    if (playerScore == 0) {
        let winner = document.getElementById('winner');
        winner.textContent = "";
    }



    if (playerSelection == computerSelection) {
        outcome = "It\'s a tie!";
        outcomeReason = "Play again!";
    }
 
    else if (playerSelection == 'rock') {
        if (computerSelection == 'paper') {
            outcome = "You Lose!";
            outcomeReason = "Paper beats Rock!";
        } else if (computerSelection == "scissors") {
            outcome = "You Win!";
            outcomeReason = "Rock beats Scissors";
        }
    }
    else if (playerSelection == 'paper') {
        if (computerSelection == 'scissors') {
            outcome = "You Lose!";
            outcomeReason = "Scissors beats Paper!";
        } else if (computerSelection = "rock") {
            outcome = "You Win!";
            outcomeReason = "Paper beats Rock";
        }
    }
    else if (playerSelection == 'scissors') {
        if (computerSelection == 'rock') {
            outcome = "You Lose!";
            outcomeReason = "Rock beats Scissors!";
        } else if (computerSelection = "paper") {
            outcome = "You Win!";
            outcomeReason = "Scissors beats Paper";
        }


    }
    let result = document.getElementById('outcome');
    result.textContent = `${outcome} ${outcomeReason}`;
    keepScore(outcome);
}

function resetScore(){
    playerScore = 0;
    computerScore = 0;
    
}
//keep score for player and computer
function keepScore(outcome) {
    if (outcome == "You Win!") {
        playerScore += 1;
    } else if (outcome == "You Lose!") {
        computerScore += 1;
    }
    let currentScore = document.getElementById('currentScore');
    currentScore.textContent = `You: ${playerScore} Computer: ${computerScore}`;
   
    if (playerScore >= 5) {
        winner.textContent = 'You Win!';
        resetScore();
    }
    else if (computerScore >=5) {
        winner.textContent = "The computer wins!"
        resetScore();
    }


}


/* if (playerScore > computerScore) {
    console.log('You win the tournament!')

} else if (computerScore > playerScore) {
    console.log('The computer won the tournament!')
} else {
    console.log('The tournament is a tie! Reload the page to play another tournament') */ 
//}
/* return a string to declare the winner, eg. "You Lose! Paper beats Rock"

    write function game() that plays 5 rounds
    
        playerScore variable
        computerScore variable
    declare winner at end of 5 rounds






     */