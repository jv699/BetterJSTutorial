//fetch API, lets you hit a website and get a response
//hits an API and returns a search result of books with Javascript realted to them

// const SEARCH_QUERY = 'Javascript';
// const SEARCH_URL = 'https://openlibrary.org/search.json?q=' //remember to use https every time
// const API_URL = `${SEARCH_URL}${SEARCH_QUERY}`;

// //fetch returns a promise
// fetch(API_URL)
//     .then((res) => {
//         return res.json();
//     })
//     .then ((data) => { //this is the promise we got from the return statement above
//         console.log(data);
//     })
//     .catch((err) => {
//         console.log(err);
//     });

//IIFE code that runs right away (immediately invoked function expression)
//function wrapped in parenthesis, with another set afterwards to run it 

// (async function() { either can be used to write the function
(async () => {
    try {
        const SEARCH_QUERY = 'Javascript';
        const SEARCH_URL = 'https://openlibrary.org/search.json?q=' 
        const API_URL = `${SEARCH_URL}${SEARCH_QUERY}`;

        const res = await fetch(API_URL);
        const data = await res.json();
        
        console.log(data);
    } catch (e) {
        console.error(e.message);
    }
}) (); //self invoking funciton syntax

//returns not defined since it is no longer in scope
//console.log(SEARCH_QUERY);