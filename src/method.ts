

const person = {
    username:'hasan jasser',
    age: 25,

    info : function (){   // this function like property
        return "this is a person"
    } ,
    fullInfo(){
         return "this is a person"
    }
}

console.log(person.fullInfo());


/** Destructuring  */

const { fullInfo , info } = person

console.log(fullInfo());
console.log(info());

/** Sperad operator*/


const jasser =  { ...person , country : 'syria' }

console.log(jasser.fullInfo());


/** Reset Operator  */
const {username , age , ...resetPerson} = person ;
console.log(resetPerson);
