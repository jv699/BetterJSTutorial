//Promises 101

//made up code
// const chargeCard = () => null;

// chargeCard('123456789', () => {
//     //this is a callback, it runs when chargeCard is done running
//     saveToDB(result, () => {
//         //another callback, callback hell, especially with returns
//     })
// });

//Promises can be used in place of a callback, works like the name
//Most APIs return promises, so good to learn
//using the example from above

//promise is given code to be run out of order, or rather independently of everything else
//promise is a asynchronus function
const chargeCard = () => new Promise((resolve, reject) => {
    //card is valid
    // reject('FAIL'); //this skips the 'then' state and goes right to 'reject'
    if (true) {
        return resolve(true);
    }
    return resolve(false); //no error, just a declined card
    //rejecting is used if there is something wrong
});

chargeCard().then((val) => {
    //then runs when the promise is resolved
    console.log(val);
}).catch((err) => {
    //this is used if it returns a rejection 
    console.log(err);
});