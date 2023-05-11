const BASE_SALARY = 16000;
const SALARY_MULTIPLIER = 4;

const makePerson = ({firstName, age, job, lastName}) => {
    return {
        name : firstName + ' ' + lastName,
        age,
        job
    }
}

//Testing

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

//correct
const hireDev = ({ dev}) => {
    const hiredDev= {
        hired : true,
        ...dev
    }
    return hiredDev;
}

const dev = makePerson(tempName);
console.log(hireDev({ dev }));