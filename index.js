//this is a test of git from the new thinkpad 2
const BASE_SALARY = 16000;
const SALARY_MULTIPLIER = 4;

const makePerson = ({firstName, age, job, lastName}) => {
    return {
        name : firstName + ' ' + lastName,
        age,
        job
    }
}

//pure functions
// - always return the same thing with the same input, pure
const addTwo = (x) => x + 2;
console.log(addTwo(2)); //always will return the same thing

//returns different things, even with the same input, not pure
let multi = 3;
const addThree = (x) => x + multi;
console.log(addThree(2)); 
multi = 4;
console.log(addThree(2)); 


const tempName = {
    firstName : 'josh',
    lastName : 'vacarchuk' ,
    age : 23,
    job : 'java dev',
    salary : BASE_SALARY * SALARY_MULTIPLIER
}

// Incorrect 
// const hireDev = ({ devInfo }) => {
//     const hiredDevInfo = {
//         hired : true,
//         ...devInfo
//     }
//     return hiredDevInfo;
// }

//correct keep the same naming scheme, no need to rename when you dont need it
const hireDev = ({ dev }) => {
    const hiredDev= {
        hired : true,
        ...dev
    }
    return hiredDev;
}

const dev = makePerson(tempName);
console.log(hireDev({ dev }));