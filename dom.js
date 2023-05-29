// import "./sass/style.scss";

document.querySelector(".app").innerHTML = `<h1>Hello World</h1>`;

// console.log(document.body);
const heading = document.createElement("h1");
heading.innerHTML = '<span>this is a test</span>'
document.body.appendChild(heading);