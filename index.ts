

/** What Is Var Scope ? */


// Var    => Current execution context    
// Let    => block scope
// const  => block scope

// Global Scope
var isLoggedin = true;

function printUserName(){
    if(isLoggedin){
        var username = "hasan jasser";
    }
}

console.log(username);