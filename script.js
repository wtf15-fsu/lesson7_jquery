/*
      Project Name:  Recipe Display Application
      
      Author: William Fuller
      
      Date: July 27th, 2018

      Filename: script.js
*/

/* global  $  */ 

function display(event) {
    $(event.currentTarget).next().fadeIn("slow");
}

$("h3").click(display);