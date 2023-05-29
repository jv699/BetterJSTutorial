// import "./sass/style.scss";

// document.querySelector(".app").innerHTML = `<h1>Hello World</h1>`;

const logo = document.getElementById("logo");
logo.innerText = "Yo!";

const heading = document.createElement("h1");
heading.innerHTML = '<span>this is a test</span>'
document.body.appendChild(heading);