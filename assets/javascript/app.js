var names = ['trinity', 'morpheus', 'neo' ];

window.onload = function() {
  for (let i in names) {
    $("#"+names[i]+"Form").css("display", "none");
  }
};

for (let i in names) {
  $("#"+names[i]).click(
    function () {
      if ($("#"+names[i]+"Form").css("display") == "none") {
        $("#"+names[i]+"Form").css("display", "block");
      } else {
        $("#"+names[i]+"Form").css("display", "none");
      }
    }
  );
}

  /*
  $("#trinityForm").css("display", "none");
    $("#morpheusForm").css("display", "none");
    $("#neoForm").css("display", "none");
*/

// var trin = false;
// var morph = false;
// var neO = false;

  
// set the function on click for trinity based questions
// $("#trinity").click( function () {
//     $("#trinityForm").css("display", "block");
//     });

// // set the function on click for morpheus based questions
// $("#morpheus").click( function () {
//     if (morph === true) {
//       $("#morpheusForm").css("display", "none");
//       morph = false;
//     }
//     else {
//       $("#morpheusForm").css("display", "block");
//       morph = true;
//     }
// });

// $("#neo").click( function () {

//   $("#neoForm").css("display", "block");
    

// });

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