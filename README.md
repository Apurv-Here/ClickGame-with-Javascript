# Webiste Link - https://clickgame5.netlify.app/

# Introduction
This is a basic game to release stress and have some
fun while clicking on the mouse and see your results
on the boxes on the screen.

# Documentation

# Structure
 
## HTML
    1. The html page is simple with heading and three
       boxes with red, yellow and green colors and 
       also with a reset button which clears all
       your current scores.

## Javascipt
    1. Take all the buttons of coloured boxes with
       document.querySelectorAll. After this we will 
       get 3 <button> html.
    
    2. We will loop through forEach for all the <button>
       html we got to get the value like 'red', 'green', 
       and 'yellow'.
    
    3. We will make and object with its keys as 'red',
       'green', and 'yellow' and set their values as 0
       in the start.
    
    4. The main logic is when we click on the boxes the
       onclick function will give the value of that 
       button as 'red' fo example, and we have made 
       'red' as our key already so we will increment 
       object.value by 1. In this example before::{'red': 0},
       after::{'red': 1} and add that 1 by innerText to button.

    5. AFter that we made a rest button where in 
       all the object.value will be 0 and we will
       run a for loop for all three boxes by forEach
       to not show 0 in the box but to set '' empty
       string so it looks good.