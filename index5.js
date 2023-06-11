//tutorial #18, this keyword

console.log(this);

// 'this' in an object will refer to the object
const test = {
    testFunc: function() {
        console.log(this);
    },
    testFuncTwo: () => { //when using an arrow func, 'this' refers to the arrow func, not parent function
        console.log(this);
    }
};

function team(name) { // object constructor
    this.name = name;
    console.log(this);
}

const button = document.getElementById("new-colors");
//cannot use arraow function here, otherwise 'this' refers to the window rather than the button
button.addEventListener("click", function() { 
    this.innerText = 'Clicked!';
});

// test.testFunc();
// test.testFuncTwo();
// team();
const wings = new team('Red Wings');
