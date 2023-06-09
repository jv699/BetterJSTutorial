//event listeners and timeouts

//generate random color
// // RBG (0-255)
//apply to background
//update color on event

const generateColorValue = () => Math.floor(Math.random() * 256);

const createColor = () => {
    const red = generateColorValue();
    const green = generateColorValue();
    const blue = generateColorValue();
    return `rgb(${red}, ${green}, ${blue})` //back ticks allow the use of js in a string
}

const applyColorToBody = () => document.body.style.backgroundColor = createColor();

applyColorToBody(); // this isn't exactly how the guy did it, but I like it

const newColors = document.getElementById("new-colors"); //gets html element and puts it in a variable
//on click attaches one event
// newColors.onclick = () => applyColorToBody();

//this is a preferable solution because you can add as many event listeners as you want
newColors.addEventListener('click', applyColorToBody); //you exclude the () for some reason
// newColors.addEventListener('mouseover', applyColorToBody);

const log = () => console.log('in timeout');
//adding a () evaluates the function, then uses the result for set timeout
//just using the name will evaluate it after the timer
// setTimeout(applyColorToBody , 5000); 
console.log('ran here'); //settimeout is not blocking, code continues to evaluates
//setTimeout happens once

//set interval happens over and over
const interval = setInterval(applyColorToBody, 2000);
//clearInterval allows us to stop the shifting
newColors.addEventListener('click', () => clearInterval(interval));