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
  
  var userWins = "";
  
  var userLoses = "";
  
  var currentScore = 0;

  $("#putka>h1").html(goalScore);
  $("#current-score>h6").html(currentScore);

  $("#feta").click(function(){
  
    currentScore = currentScore + cheeseBoard[0];
    $("#current-score>h6").html(currentScore);
});
$("#mozarella").click(function(){

    currentScore = currentScore + cheeseBoard[1];
    $("#current-score>h6").html(currentScore);
});
$("#gorgonzola").click(function(){

    currentScore = currentScore + cheeseBoard[2];
    $("#current-score>h6").html(currentScore);
});
$("#talegio").click(function(){

    currentScore = currentScore + cheeseBoard[3];
    $("#current-score>h6").html(currentScore);
});
    // Wins
	



	// Losses


if (goalScore = currentScore){




};







});
