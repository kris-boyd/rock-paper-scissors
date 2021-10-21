

/* make computerPlay function that randomly returns Rock Paper or scissors
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


/*
playerSelection
prompt
to lowercase
*/
function playerPlay() {
    selection = prompt('Choose rock, paper, or scissors').toLowerCase();
    return selection;
}
/*
 make playRound function
    takes 2 parameters playerSelection and computerSelection
    variable round winner
*/


function playRound() {
    let playerSelection = playerPlay();
    let computerSelection = computerPlay();
    let outcome = "";
    let outcomeReason = "";
    let tied = "";
    console.log(`${playerSelection} and ${computerSelection}`);


    while (playerSelection == computerSelection) {
        console.log('It\'s a tie! Re-do!');
        playerSelection = playerPlay();
        computerSelection = computerPlay();
        console.log(`${playerSelection} and ${computerSelection}`);
    }
    if (playerSelection !== 'rock' && playerSelection !== 'paper' && playerSelection !== 'scissors') {
        console.log('I don\'t understand your answer, try again!');
        playerSelection = playerPlay();
    }
    if (playerSelection == 'rock') {
        if (computerSelection == 'paper') {
            outcome = "You Lose!";
            outcomeReason = "Paper beats Rock!";
        } else if (computerSelection == "scissors") {
            outcome = "You Win!";
            outcomeReason = "Rock beats Scissors";
        }
    }
    if (playerSelection == 'paper') {
        if (computerSelection == 'scissors') {
            outcome = "You Lose!";
            outcomeReason = "Scissors beats Paper!";
        } else if (computerSelection = "rock") {
            outcome = "You Win!";
            outcomeReason = "Paper beats Rock";
        }
    }
    if (playerSelection == 'scissors') {
        if (computerSelection == 'rock') {
            outcome = "You Lose!";
            outcomeReason = "Rock beats Scissors!";
        } else if (computerSelection = "paper") {
            outcome = "You Win!";
            outcomeReason = "Scissors beats Paper";
        }


    }
    console.log(`${outcome} ${outcomeReason}`);
    return outcome;
}

let playerScore = 0;
let computerScore = 0;
for (let i = 1; i <= 5; i++) {
    let roundWinner = playRound();
    if (roundWinner == "You Win!") {
        playerScore += 1;
    } else if (roundWinner == "You Lose!") {
        computerScore += 1;
    }
    console.log(` Round ${i}, The score is You:${playerScore}, Computer: ${computerScore}`)

}
if (playerScore > computerScore) {
    console.log('You win the tournament!')

} else if (computerScore > playerScore) {
    console.log('The computer won the tournament!')
} else {
    console.log('The tournament is a tie! Reload the page to play another tournament')
}
/* return a string to declare the winner, eg. "You Lose! Paper beats Rock"

    write function game() that plays 5 rounds
    keep score for player and computer
        playerScore variable
        computerScore variable
    declare winner at end of 5 rounds






     */