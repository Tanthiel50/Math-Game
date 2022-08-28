var playing = false;
var score;
var action;
var timerRemaining;
var correctAnswer;

//If click on the start/reset
document.getElementById("startreset").onclick = function (){
    //if we are playing
    if (playing == true) {
        location.reload();//reload page
    }else{//if we are not playing

        //change mode to playing
        playing = true;

        //set score to 0
        score = 0;
        
        document.getElementById("scoreValue").innerHTML = score;

        //show countdown box
        show("time");
        timerRemaining = 60;
        document.getElementById("timeRemaining").innerHTML = timerRemaining;

        hide("gameOver");

        //change the button to reset
        document.getElementById("startreset").textContent="Reset Game";

        //start the countdown
        startCountdown();

        //generate a new question
        generateQA();

    }
}
    
//clicking on an answer box
for (i = 1; i < 5; i++) {
    document.getElementById("box"+i).onclick = function name(params) {
        //check if we are playing 
        if (plating = true) {
          if (this.innerHTML == correctAnswer) {
              score++;
              document.getElementById("scoreValue").innerHTML = score;
              hide("wrong");
              show("correct");
              setTimeout(function(){
                  hide("correct");
              }, 1000);
      
              generateQA();
          }else{
            score--;
              document.getElementById("scoreValue").innerHTML = score;
              hide("correct");
              show("wrong");
              setTimeout(function(){
                  hide("wrong");
              }, 1000); 
          }
        }
      }  
    
}      
    //if we are not playing
        
        //reduce time by 1s in loops
            //timeleft?
                //yes->continue
                //no->game over
        //change the button to reset
        //generate new question

//if we click on answer box
    //if we are playing
        //correct?
            //yes
                //increase score
                //show correct box for 1s
                //generate new question
            //no
                //show try again box for 1s

//functions

//start counter
function startCountdown() {
    action = setInterval(function() {
        timerRemaining -= 1;
        document.getElementById("timeRemaining").innerHTML = timerRemaining;
        if (timerRemaining == 0) {//game over
            stopCountdown();
            show("gameOver");
            document.getElementById("gameOver").innerHTML = "<p>Game over</p><p>Your score is "+ score +".</p>";
            hide("time");
            hide("correct");
            hide("wrong");
            playing = false;
            document.getElementById("startreset").innerHTML = "Start Game";
        }
    }, 1000);
    
}

//stop counter
function stopCountdown() {
    clearInterval(action);
}

//hide elements
function hide(Id) {
    document.getElementById(Id).style.display = "none";
}

//show elements
function show(Id) {
    document.getElementById(Id).style.display = "block";
}

//generate question and multiple answers

function generateQA(){
    var x = 1+ Math.round(9*Math.random());
    var y = 1+ Math.round(9*Math.random());
    correctAnswer = x*y;
    document.getElementById("question").innerHTML = x + "x" + y;
    var correctPosition = 1+ Math.round(3*Math.random());
    document.getElementById("box"+correctPosition).innerHTML = correctAnswer; //fill 1 box with the correct answer

    var answers = [correctAnswer];
    //fill the other box with wrong answers
    for(i=1; i<5; i++){
        if(i != correctPosition) {
            var wrongAnswer;
            do{
                wrongAnswer = (1+ Math.round(9*Math.random()))*(1+ Math.round(9*Math.random())); //a wrong answer
            }while(answers.indexOf(wrongAnswer)>-1)
            document.getElementById("box"+i).innerHTML = wrongAnswer;
            answers.push(wrongAnswer);
        }
    }
}

//function generateQA(){

//}