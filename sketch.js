var canvas;

var gameState = 0;
var contestantCount, database, quiz, question, contestant;

var allContestants;

function setup(){
  database = firebase.database();
  canvas = createCanvas(850,400);

  quiz = new Quiz();
  quiz.getState();
  quiz.start();
}


function draw(){
  background("pink");

  quiz.display();


  drawSprites();
}
