


const people = {
    username:'hasan',
    age : 25,

    info(){
        return  printThis.bind(this)().username; // refer to owner function
        // return  printThis.call(this).username; // refer to owner function
        // return 'Full information . . .';
    }
};


function printThis(this:any){
    return this ;
}

// console.log(people.info());


/** Implicit Binding & Explicit  Binding */

const person1 = {
    username: ' hasan',
}

const person2 = {
    username: 'ali',
    age:25,

    printAge(){
        return this.age ;
    }
}

function printUser(this: any , message:string){
    // console.log(this);
    return `Hi, ${this.username} , ${message}`
}

console.log(printUser.bind(person1)('Hello Mr'));
console.log(printUser.call(person1,'Hello Mr'));
console.log(person2.printAge());


/***************** New Binding | this with class */


class Person {
    username:string ;
    constructor(username:string){
        this.username = username
    }
}

const hasan = new Person('hasan')
console.log(hasan.username);


// --------------- this keyword binding with arrow functions ---------------


const fullName = function(this:any){
    return `${this.firstName} ${this.lastName}` ;
}

const jaser = {
    firstName : 'hasan',
    lastName: 'jasser'
}

//     - 1 -
// const hasanUser = fullName.bind(jaser)
// console.log(hasanUser());


//   - 2 -
const hasanUser = fullName.bind(jaser)()
console.log(hasanUser);



// this not work with Arrow functions
// const fullName = () => {
//     return `${this.firstName} ${this.lastName}` ;
// }