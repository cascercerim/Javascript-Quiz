// xHide questions until game is started 
// xPress start button to start game
// Set timer for game when start button clicked
// xChange screen to questions 
// Don't let player pick more then 1 answer per question
// If person selects right answer show a screen congratulating them 
// If person selects wrong answer show a funny gif 
// After a few seconds display another question
// If player runs out of time show "Times Up" pop up on screen
// Add up scores 
// Restart game button again wihtout restarting page 

$(document).ready(function(){
    $(".btn").on("click", function(){
$(".questions").css("visibility", "visible");
run();
});
var number = 300;

    var intervalId;


    function run() {
      clearInterval(intervalId);
      intervalId = setInterval(decrement, 1000);
    }

    function decrement() {

      number--;
      $("#Timer").html("<div>" + number + "</div>");

      if (number === -1) {
        stop();
        alert("Time Up!");
      }
    }
    function stop() {
      clearInterval(intervalId);
    }
    
    run();
});
// for(var i=0; questions.length);
// console.log("")