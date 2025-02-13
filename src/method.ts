

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

// console.log(person.fullInfo());

const { fullInfo , info } = person

console.log(fullInfo());
console.log(info());
