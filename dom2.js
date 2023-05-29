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

console.log(applyColorToBody()); // this isn't exactly how the guy did it, but I like it