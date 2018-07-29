/*
      Project Name:  Recipe Display Application
      
      Author: William Fuller
      
      Date: July 27th, 2018

      Filename: drill4.js
*/

/* global  $  */ 

function display(event) { //display1
    $(event.currentTarget).next().fadeIn("slow");
}//end display1

//create listener for h3
//$("h3").click(display);


function display2(event) { //display2
    $(event.currentTarget).next().animate ({height: 'toggle'}, "slow");
}//end of display2

//create listener for h3
$("h3").click(display2);


//change the background color of h3 when user hovers over it
$("h3").hover(function() {
    $(this).css("background-color", "yellow");
    }, function() {
    $(this).css("background-color", "pink");
});


//hover() will trigger display2 method each time mouse hovers over the header
$("h3").hover(display2);