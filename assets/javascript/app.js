window.onload = function() {
    $("#trinityForm").css("display", "none");
    $("#morpheusForm").css("display", "none");
    $("#neoForm").css("display", "none");
  };
  var trin = false;
  var morph = false;
  var neO = false;
// set the function on click for trinity based questions
$("#trinity").click( function () {
    $("#trinityForm").css("display", "block");
    });

// set the function on click for morpheus based questions
$("#morpheus").click( function () {
var flag = true;
    $("#morpheusForm").css("display", "block");
 if(flag===true) {   
   function play(){
      var audio = document.getElementById("audio");
      audio.play();
                };};
    
});

$("#neo").click( function () {

  $("#neoForm").css("display", "block");
    

});

function handleClick()
  {         
var amountCorrect = 0;          
for(var i = 1; i <= 45; i++) {
  var radios = document.getElementsByName('group'+i);
  for(var j = 0; j < radios.length; j++) {
    var radio = radios[j];
    if(radio.value == "correct" && radio.checked) {
      amountCorrect++;
    };
  };
 };                 
    alert("Correct Responses: " + amountCorrect);
}