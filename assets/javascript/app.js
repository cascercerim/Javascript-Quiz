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




// global values
var currentQs = 0; //shows current question on screen 

// tracks score of game 
var win = 0;
var lost = 0;
var score = 0;

//sets timer
var run; 



  var triviaQs = [{

    question: "1. Who does Marshall marry on the show?",
    choices: ["Barney", "Robin", "Lily", "Ted"],
    answer: "Lily"

  }, {
    question: "2. Who does Ted end up marrying on the show at the end?",
    choices: ["Tracy", "Robin", "Lily", "Victoria"],
    answer: "Tracey"

  }, {
    question: "3. Barney's known for the phrase 'It's going to be, Legen wait for it...'?",
    choices: ["-dary", "Incredible", "Amazing", "Great"],
    answer: "-dary"

  }, {
    question: "4. Whats the bar the friends go to named?",
    choices: ["Barnaby's", "Maclaren's", "Kildares", "Xfinity Live"],
    answer: "Maclaren's"

  }, {
    question: "5. Who invented the 'Have you met Ted' game?",
    choices: ["Marshall", "Lily", "Robin", "Barney"],
    answer: "Barney"

  }, {
    question: "6. What is Barney's favorite outfit of choice on the show?",
    choices: ["Sweatsuit", "Suit", "Jeans", "Onsies"],
    answer: "Suit"

  }, {
    question: "7. What is tattooed on Ted's lower back?",
    choices: ["Butterfly", "Dolphin", "Rainbow", "Eagle"],
    answer: "Butterfly"

  }, {
    question: "8. Which instrument did Ted steal for Robin in the first episode and appears in Robin’s apartment for the rest of the series?",
    choices: ["Trumpet", "Tuba", "French Horn", "Clarinet"],
    answer: "French Horn"

  }, {
    question: "9. What did Barney have to wear for a year after losing a bet?",
    choices: ["Kitten Underwear", "Bunny Socks", "Monkey Tie", "Ducky Tie"],
    answer: "Ducky Tie"

  }, {
    question: "10. Who should have really married Ted Mosby in the show?",
    choices: ["Robin", "Lily", "Marshall", "Stella"],
    answer: "Robin"

  }

];
console.log(triviaQs);



//displaying to page
function firstQs(){

  var question = triviaQs[currentQs].question;
  var choices = triviaQs[currentQs].choices;
  console.log(question);
  console.log(choices);


  $("#timer").html("Hurry Up! " + number );


 
  $(".wrapper").html("<h5>" + question + "</h5>");

   $(firstQs(choices))
}
 function firstQs(choices) {
   var result = "";

   for (var i = 0; i < choices.length; i++) {
     result += (choices [i]);
   return result;
 }
firstQs();


$(document).ready(function(){
  var number = 30;
    $(".btn").on("click", function(){
 $(".questions").css("visibility", "visible");
run();



     var intervalId;


     function run() {
       clearInterval(intervalId);
      intervalId = setInterval(decrement, 1000);
     }

     function decrement() {

       number--;
       $("#timer").html("<div>" + number + "</div>");

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
  


