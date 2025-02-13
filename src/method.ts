

const person = {
    username:'hasan jasser',
    age: 25,

    info : function (){   // this function like property
        return `My Name Is  ${this.username} And My Age Is ${this.age}`
    } ,
    fullInfo(){
         return `My Name Is  ${this.username} And My Age Is ${this.age}`
    }
}

console.log(person.fullInfo());
