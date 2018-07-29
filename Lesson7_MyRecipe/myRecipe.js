/*
      Project Name:  Recipe Display Application
      
      Author: William Fuller
      
      Date: July 28th, 2018

      Filename: drill4.js
*/

/* global  $  */ 

//DOM Traversal and Animation event
function display2(event) { 
    $(event.currentTarget).next().animate ({height: 'toggle'}, "slow");
}

$("h3").click(display2);


//CSS Change
$("h3").hover(function() {
    $(this).css("background-color", "#f2f2f2"),
    $(this).append('<span class = "notice">&emsp;&emsp; Click to Show </span>');
    }, function() {
    $(this).css("background-color", ""),
    $(".notice").remove();
});
