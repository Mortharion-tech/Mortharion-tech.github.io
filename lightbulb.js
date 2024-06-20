//goal is to swap light bulb image on button click
//get the button
const bulbSwitch = document.querySelector('#light-switch');
console.log(bulbSwitch);
//get the image
const bulbImage = document.querySelector('#light-image');
console.log(bulbImage);

//use boolean variable to track if light is on or off
let isBulbOn = false;

//add event listener to button
//that will change our light bulb image on button click
bulbSwitch.addEventListener('click', function() {
    if (isBulbOn) {
        bulbImage.src = 'off.png';      //change image to off bulb
        isBulbOn = false;               //set variable to false
    } else {
        bulbImage.src = 'on.png';       //change image to on bulb
        isBulbOn = true;                //set variable to true
    }
    console.log(isBulbOn);
});