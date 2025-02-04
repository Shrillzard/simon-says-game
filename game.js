var level = 0;
var userClickedPattern = [];
var gamePattern = [];
var buttonColours = ["red", "blue", "green", "yellow" ];
var randomChosenColour;
function nextSequence(){
    level++;
    userClickedPattern = [];
    var randomNumber = Math.floor(Math.random()*4);
    randomChosenColour= buttonColours[randomNumber];
    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    var audio = new Audio("sounds/" + randomChosenColour + ".mp3");
    audio.play();
    gamePattern.push(randomChosenColour);
    $("h1").text("Level " + level);
    }
$( "#green" ).on( "click", function(){
    $("#green").fadeOut(75).fadeIn(75);
    var audio= new Audio('sounds/green.mp3');
    audio.play();
    var userChosenColour = "green";
    userClickedPattern.push(userChosenColour);
    checkAnswer(userClickedPattern.length-1);
});
$( "#red" ).on( "click", function(){
    $("#red").fadeOut(75).fadeIn(75);
    var audio= new Audio('sounds/red.mp3');
    audio.play();
    var userChosenColour = "red";
    userClickedPattern.push(userChosenColour);
    checkAnswer(userClickedPattern.length-1);
});
$( "#yellow" ).on( "click", function(){
    $("#yellow").fadeOut(75).fadeIn(75);
    var audio= new Audio('sounds/yellow.mp3');
    audio.play();
    var userChosenColour = "yellow";
    userClickedPattern.push(userChosenColour);
    checkAnswer(userClickedPattern.length-1);
});
$( "#blue" ).on( "click", function(){
    $("#blue").fadeOut(75).fadeIn(75);
    var audio= new Audio('sounds/blue.mp3');
    audio.play();
    var userChosenColour = "blue";
    userClickedPattern.push(userChosenColour);
    checkAnswer(userClickedPattern.length-1);
});
var flag = true;
$("body").keypress(function(event){
    if (flag)
    {
        nextSequence();
        flag = false;
        $("h1").text("Level " + level);
    }
})
function checkAnswer(currentLevel){
    if(gamePattern[currentLevel] === userClickedPattern[currentLevel])
    {
        console.log("success");
        if (userClickedPattern.length === gamePattern.length){
            setTimeout(function () {
              nextSequence();
            }, 1000);
    }
    
}
else
{
    $("body").css("background-color","red");
    var audio = new Audio('sounds/wrong.mp3');
    $("h1").text("Game Over, Press any key to continue");
    startOver();
}
}
function startOver()
{
    setTimeout(function()
    {
        $("body").css("background-color","#011F3F");
    },500);
    level = 0;
    gamePattern = [];
    flag = true;
}