//xHide questions until game is started 
// xPress start button to start game
// Set timer for game when start button clicked
// xChange screen to questions 
// xDon't let player pick more then 1 answer per question
// If player runs out of time show "Times Up" pop up on screen
// Add up scores 
// Restart game button again wihtout restarting page 

var number = 51;
var win = 0;
var loser = 0;
var noA = 0;
var intervalId;


$(document).ready(function(){



  $(".btn").on("click",function(){
  $(this).hide();
  $(".wrapper").css("visibility", "visible");
  $("#timer").html( number );
  start();

  });
  function start(){
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
}
function decrement(){
  number--;
  $("#time-left").html( "<h4>Last call! "+ number +"</h4>");
  if (number === 0 ){

    scores();
    
  }else if(number ===0){
    stop();
    hide();
    results();
}


function stop(){
  clearInterval(intervalId);
  // stops the time when the submit button is pressed
  number = false;
}

function hide(){
  $('#countdown').hide();
  $('.trivia-ques').hide();
  $('#game-done').hide();
}


function results(){

  $("#answer-box").html("<h1>Game Over!!</h1>");
   $("#answers").html("<h6>You got  " + win + " correct!</h6>");
   $("#wrong-answer").html("<h6>You got  " + loser + " wrong!</h6>");
   $("#no-answer").html("<h6>You forgot  " + noA + " questions!</h6>");
 
}
//connecting to button in html
$(".submit").on("click",function(){
  console.log(this);

  results();
  stop();
  });
  }
  // function scores(){
    $("input[type=radio]").on ("change", function(){
      win = $("input[value=1]:checked").length;
      loser = $("input[value=0]:checked").length;
      noA = (5-(win+loser));
    
});
})
