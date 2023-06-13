//fetch API, lets you hit a website and get a response
//hits an API and returns a search result of books with Javascript realted to them

const SEARCH_QUERY = 'Javascript';
const SEARCH_URL = 'https://openlibrary.org/search.json?q=' //remember to use https every time
const API_URL = `${SEARCH_URL}${SEARCH_QUERY}`;

//fetch returns a promise
fetch(API_URL)
    .then((res) => {
        return res.json();
    })
    .then ((data) => { //this is the promise we got from the return statement above
        console.log(data);
    })
    .catch((err) => {
        console.log(err);
    });