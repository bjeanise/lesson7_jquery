/*
Program Name:  Recipe Display Application
Author:  Barbara Siplin
Date:  March 11, 2018
File Name:  myRecipe.js
*/

/*This code adds interactivity to my recipe and does the following:  performs
at least one DOM traversal, one CSS change, and at least one animation event.*/

$(document).ready(function() {
    //css event changes h1 header
    $("h1").css("background-color", "lightskyblue");
    //beginning of click-event
  $("h3").click(function() {
      //DOM traversal
      var ingr = ("h3").first();
      $(this).display('ingr');
      var instr = $(this).display.last("h3");
      //animation example
      $("this").append (instr);
  });
  
  });//end of click event handler
  
 
function display(event) {
    
   $(event.currentTarget).next().fadeIn("slow");
}//end of display


//attach event listener to h3 elements to invoke display function when clicked
$("h3").click(display);


//change the background color h3 element when mouse hovers over it;  
//

 $("h3").hover(function () {
    $(this).css("background-color", "lightskyblue");

}, function() {
    $(this).css("background-color", "tan");
});



//Displays and animates the next elements after the current target

function display2(event) {
    
    $(event.currentTarget).next().animate(
        {height: 'toggle'}, "slow");
        
}//End of display2

//Attach event listener to h3 elements to invoke display function when double
//clicked.

$("h3").dblclick(display2);