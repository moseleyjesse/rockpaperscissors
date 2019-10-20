  
const game = () => {
    let pScore = 0;
    let cScore = 0;
  
    //This will start the game
    const startGame = () => {
      const playButton = document.querySelector('.intro button');
      const introScreen = document.querySelector('.intro');
      const match = document.querySelector('.match');
  
      playButton.addEventListener('click', () => {
        introScreen.classList.add('fadeOut');
        match.classList.add('fadeIn');
      });
    };
//Create a match
const newMatch = () => {
    const options = document.querySelectorAll('.options button');
    const playerHand = document.querySelector('.playerHand');
    const computerHand = document.querySelector('.computerHand');
    const hands = document.querySelectorAll('.hands img');

    hands.forEach(hand =>{
        hand.addEventListener('animationend', function(){
            this.style.animation = '';
        })
    })
    //The options for the computer to pick
    const computerOptions = ['rock', 'paper', 'scissors'];

    options.forEach(option => { 
        option.addEventListener('click', function() {
            //Computer decision
            const computerNumber = Math.floor(Math.random() * 3);
            const computerChoice = computerOptions[computerNumber];
            
            setTimeout(()=>{         
                   // call in to compare the hands function
                compareHands(this.textContent, computerChoice)
    
                //update the image based on selection
                playerHand.src = `./assets/${this.textContent}.png`;
                computerHand.src = `./assets/${computerChoice}.png`;
                }, 2000 )

        //Animation of hands
        playerHand.style.animation = "shakePlayer 2s ease";
        computerHand.style.animation = "shakeComputer 2s ease";
        });
        
    });
};

const updateScore = () => {
    const playerScore = document.querySelector('.playerScore p');
    const computerScore = document.querySelector('.computerScore p');
    playerScore.textContent = pScore;
    computerScore.textContent = cScore;
}

const compareHands = (playerChoice, computerChoice) =>{
    const winner = document.querySelector('.winner');
    //first check for tie
    if(playerChoice === computerChoice){
        winner.textContent = 'Tie game!';
        return;
    }
    //check for rock selection
    if(playerChoice === 'rock'){
        if(computerChoice === 'scissors'){
            winner.textContent = 'Player Wins the Round!'
            pScore++;
            updateScore();
            return;
        }else{
            winner.textContent = 'Computer Wins the Round'
            cScore++;
            updateScore();
            return;
        }
        
    }
    //check for paper selection
    if(playerChoice === 'paper'){
        if(computerChoice === 'rock'){
            winner.textContent = 'Player Wins the Round!'
            pScore++;
            updateScore();
            return;
        }else{
            winner.textContent = 'Computer Wins the Round'
            cScore++;
            updateScore();
            return;
        }
    }
        //check for scissors selection
        if(playerChoice === 'scissors'){
            if(computerChoice === 'paper'){
                winner.textContent = 'Player Wins the Round!'
                pScore++;
                updateScore();
                return;
            }else{
                winner.textContent = 'Computer Wins the Round'
                cScore++;
                updateScore();
                return;
            }
        }
    

}

// Call upon the inner functions
 startGame();
 newMatch();
};

//start the function for the game
 game();
 
 /*const zxz = (Math.random() * 3);
 console.log(zxz);*/