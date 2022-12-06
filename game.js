function computerPlay () {
    const options = ['rock','paper','scissors']
    const index = Math.floor((Math.random() * 100) % 3)
    return options[index]
}

function userPlay () {
    // Define options
    const options = ['rock','paper','scissors']
    // Set variable to handle incorrect options
    let isInvalid = true

    let user = prompt('Choose your option: \nRock, Paper or Scissors')
    if (!user && user !== '') {
        // In case user cancels, the game will end with partial result
        return 'break'
    }
    if (options.indexOf(user.toLowerCase().trim()) !== -1){
        // If Option given by user is among valid options, toggle flight
        isInvalid = false
    }
    while (isInvalid) {
        // Repeat while loop until is valid
        user = prompt('Incorrect option, pelase choose one of Rock, Paper or Scissors')
        if (options.indexOf(user.toLowerCase().trim()) !== -1){
            isInvalid = false
        }
    }

    return user.trim()
}

function playRound(playerSelection, computerSelection ){
    switch (playerSelection.toLowerCase()) {
        case ('rock') : {
            switch (computerSelection) {
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
            switch (computerSelection) {
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
            switch (computerSelection) {
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

function findWinner ( userPoints, computerPoints) {
    if ( userPoints > computerPoints) {
        finalMessage = 'You Win the game! Result: ' + userPoints + ' - ' + computerPoints
    } else if (userPoints < computerPoints ) {
        finalMessage = 'You Lose the game! Result: ' + userPoints + ' - ' + computerPoints
    } else {
        finalMessage = "It's a Tie! Result: " + userPoints + ' - ' + computerPoints
    }
    return finalMessage
}

function game(){
    let userPoints = 0
    let computerPoints = 0

    for (let round = 1; round <= 5; round++) {
        const user = userPlay()
        const computer = computerPlay()
        if (user === 'break'){
            break
        }
        const roundResult = playRound(user,computer)
        console.log(`Round ${round}: ${roundResult}`)
        
        if (roundResult.includes('Win')){
            userPoints++
        } else if (roundResult.includes('Lose')) {
            computerPoints++
        }
    }

    finalMessage = findWinner(userPoints,computerPoints)
    console.log(finalMessage)
    alert(`Thank you for playing\n${finalMessage}`)
}

game()