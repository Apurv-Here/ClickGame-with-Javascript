// selecting all three boxes, i.e. red yellow and greeen 
let boxesColor = document.querySelectorAll(".boxesColor");

// making an object to display the no. of time clicked inside the box
const timesClicked = { 'red': 0, 'yellow': 0, 'green': 0 };

/*  since 'boxesColor' has all the <button> html, so we have to get the value of each html
    and we have created the timesClicked object with the same names given as value in html
    we will get and thus increase the value like red-0, red-1, red-2 by clicking on the box
    and with the help of innerText we diplay the object.value in the box itself dynamically
*/
boxesColor.forEach(getBoxColor => {
    getBoxColor.onclick = () => {
        timesClicked[getBoxColor.value]++;
        getBoxColor.innerText = timesClicked[getBoxColor.value];
    }
});

/*  function to clear the value to 0 in each box and we will not show 0 so we have set it to ''
    we have used loop because there are 3 boxes and we are looping to set '' in each boxes rather
    than hard coding it
*/
function clearScores() {
    timesClicked.red = 0
    timesClicked.yellow = 0
    timesClicked.green = 0
    boxesColor.forEach(square => {
        square.innerText = 'click me'
    })
}

// on clicking the reset button the clear function is called to reset all the values
const resetGameBtn = document.getElementById('resetBtn')
resetGameBtn.onclick = () =>{
    clearScores();
}
