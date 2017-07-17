
$ (document).ready(function(){


	// 4 diamonds - rand 1-12
	// goal rand 19-120
	//score board
    //wins 
    // osses

  var cheeseBoard = ["feta", "mozarella","gorgonzola","talegio"];

  for (i=0;i<4;i++){
  	cheeseBoard[i] = Math.floor(Math.random() *12) + 1;
  }

  var goalScore = Math.floor(Math.random() * 120) + 1;
  
  var userWins = 1;
  console.log("number " + userWins);
  var userLoses = "";
  
  var currentScore = "";

// Changes the Goal score section by selecting an id in the html file
  $("#putka>h1").html(goalScore);

// Changes the Current score section by selcting an id in the html file 
  $("#current-score>h6").html(currentScore);

// Generates a random number on click 
  $("#feta").click(function(){
  
    currentScore = currentScore + cheeseBoard[0];
    $("#current-score>h6").html(currentScore);
});
  // Generates a random number on click 

$("#mozarella").click(function(){

    currentScore = currentScore + cheeseBoard[1];
    $("#current-score>h6").html(currentScore);
});
// Generates a random number on click 

$("#gorgonzola").click(function(){

    currentScore = currentScore + cheeseBoard[2];
    $("#current-score>h6").html(currentScore);
});
// Generates a random number on click 

$("#talegio").click(function(){

    currentScore = currentScore + cheeseBoard[3];
    $("#current-score>h6").html(currentScore);



});

// this will/should add to the Wins section

if (currentScore = goalScore) {

    $("#wins").text(userWins++);

 // this will add to the Losses section

} else if (currentScore < goalScore){

	$("#losses").text(userLosses++);


};

	
	

	// Losses


// if (goalScore < currentScore){
// 	userWins++;











});
