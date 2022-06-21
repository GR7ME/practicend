//Declaring variables in js

let a = 5
var b = 6
const c = 4

/*
Difference between let and var
*/

// function difference(){                  // Output
//     for (var i=0;i<5;i++){              // 0
//         console.log(i)                  // 1
//     }                                   // 2
// }                                       // 3
// difference()                            // 4
                 


//Now what if we console.log(i) like this

// function difference(){                  
//     for (var i=0;i<5;i++){              
//         console.log(i)                  
//     }
//     console.log(i)                                   
// } 
// difference()

//Output
// 0
// 1
// 2
// 3
// 4
// 5

//As we can see even though i is declared in for loop scope still we can access it in the outscope of forloop 
//this is a problem with var
//For this let was introduced in Es6
//Lets write the same code with let and see the difference

function difference(){                  
    for (let i=0;i<5;i++){              
        console.log(i)                  
    }
    console.log(i)                                   
} 
difference()

//This gives Error "ReferenceError: i is not defined"
//As we can see thst declaring with let makes that variable only available in its decalred scope

// As such 
// let -> Declared Scope only i.e has block scope
// var -> Function scope

//Now lets look into const

const l = 1

//FYI const is also Declared Scope only i.e has block scope

//lets try assigning l with another value

l = 2
//here it gives an error as variable declared with const remains immutable i.e cannot be change



