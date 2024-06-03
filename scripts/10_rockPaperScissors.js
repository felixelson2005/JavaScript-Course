let scores= JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    loss: 0,
    tie: 0
};


updatescoreelements();

function playGame(playerMove){

   const computerPicks=randomSelection();
   let result='';
    if(playerMove==='rock'){
            if(computerPicks==='rock'){
            result='Tie';
        }else if(computerPicks==='paper'){
            result='You lose';        
        }else if(computerPicks==='scissors'){
            result='You win';
        }

    }else if (playerMove==='paper'){
        if(computerPicks==='paper'){
            result='Tie';
        }else if(computerPicks==='scissors'){
            result='You lose';        
        }else if(computerPicks==='rock'){
            result='You win';
        }

    }
    else if (playerMove==='scissors'){
       if(computerPicks==='scissors'){
        result='Tie';
        }else if(computerPicks==='rock'){
            result='You lose';        
        }else if(computerPicks==='paper'){
            result='You win';
        }

    }

   if(result==='You win'){
    scores.wins += 1;
   }else if (result ==='You lose'){
    scores.loss += 1;
   } else {
    scores.tie += 1;    
   }

   localStorage.setItem('score',JSON.stringify(scores));

   updatescoreelements();

   document.querySelector('.js_result')
            .innerHTML=result;
    
   document.querySelector('.js_selection')      
            .innerHTML= `you <img src="images/${playerMove}-emoji.png" class="style-icon">
               <img src="images/${computerPicks}-emoji.png" class="style-icon"> Computer`;

}

function updatescoreelements(){

        document.querySelector('.js_score')
            .innerHTML= `Wins: ${scores.wins},Losses:${scores.loss}, Ties: ${scores.tie}`;

}


function randomSelection(){
    const randomNumber=Math.random();

let computerMoves='';   
    if(randomNumber>=0 && randomNumber <1/3){
         computerMoves='rock';
        }else if(randomNumber>=1/3 && randomNumber <1/2){
            computerMoves='paper';
        }else if (randomNumber>=1/2 && randomNumber <1){
                computerMoves='scissors';
                }
        return computerMoves;
}
