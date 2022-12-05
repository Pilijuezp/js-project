function computerPlay () {
    const options = ['Rock','Paper','Scissors']
    const index = Math.floor((Math.random() * 100) % 3)

    return options[index]
}

function playRound(playerSelection, computerSelection ){
    switch (playerSelection.toLowerCase()) {
        case ('rock') : {
            switch (computerSelection.toLowerCase()) {
                case ('rock'): {
                    return "It's a Tie!";
                };
                case ('paper'): {
                    return 'You Lose! Paper beats Rock';
                };
                case ('scissors') : {
                    return 'You Win! Rock beats Scissors'
                }
            }
        };
        case ('paper') : {
            switch (computerSelection.toLowerCase()) {
                case ('rock'): {
                    return 'You Win! Paper beats Rock';
                };
                case ('paper'): {
                    return "It's a Tie!";
                };
                case ('scissors') : {
                    return 'You Lose! Scissors beat Paper'
                }
            }
            
        };
        case ('scissors') : {
            switch (computerSelection.toLowerCase()) {
                case ('rock'): {
                    return 'You Lose! Rock beats Scissors';
                };
                case ('paper'): {
                    return 'You Win! Scissors beat Paper';
                };
                case ('scissors') : {
                    return "It's a Tie!";
                }
            }
        }
        default: {
            return 'Incorrect option, please select one of Rock, Paper or Scissors'
        }
    }
}


function game(){
    let userPoints = 0
    let computerPoints = 0

    for (let index = 0; index < 5; index++) {
        let user = prompt('Choose your option')
        let computer = computerPlay()
        const roundResult = playRound(user,computer)
        console.log(roundResult)
        if (roundResult.includes('Win')){
            userPoints++
        } else if (roundResult.includes('Lose')) {
            computerPoints++
        }
    }
    if ( userPoints > computerPoints) {
        console.log('You Win the game! Result: ' + userPoints + ' - ' + computerPoints)
    } else if (userPoints < computerPoints ) {
        console.log('You Lose the game! Result: ' + userPoints + ' - ' + computerPoints)
    } else {
        console.log("It's a Tie! Result: " + userPoints + ' - ' + computerPoints)
    }
}

game()