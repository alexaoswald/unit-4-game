// crystals have random number between 1-12
// number to get to is between 19-120
$(document).ready(function(){
    var Random=Math.floor(Math.random() * 120) + 19;
    $("#randomNumber").text(Random);
    var num1= Math.floor(Math.random() * 12) + 1;
    var num2= Math.floor(Math.random() * 12) + 1;
    var userScore= 0; 
    var wins= 0;
    var losses = 0;
    function reset(){
        Random=Math.floor(Math.random() * 120) + 19;
        $("#randomNumber").text(Random);
        num1= Math.floor(Math.random()*11+1);
        num2= Math.floor(Math.random()*11+1);
        userScore= 0;
        $("#userScore").text(userScore);
        } 
    function win(){
    alert("You won!");
        wins++; 
        $("#wins").text(wins);
        reset();
    }
    function lose(){
    alert ("You lost");
        losses++;
        $("#losses").text(losses);
        reset()
    }
    $("#crystal1").on("click", function(){
      userScore = userScore + num1;
      console.log("New score= " + userScore);
      $("#userScore").text(userScore);
        if (userScore ===  Random) {
            win();
        }
        else if (userScore > Random) {
            lose();
        }
    })  
    $("#crystal2").on("click", function(){
      userScore = userScore + num2;
      console.log("New score= " + userScore);
      $("#userScore").text(userScore); 
        if (userScore ===  Random) {
        win();
        }
        else if (userScore > Random) {
        lose();
        }
    })  
    
    // add 2 more crystals 
}); 
  