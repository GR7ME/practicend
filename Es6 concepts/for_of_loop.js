// JS for/of loops through values of itearable objects
//loop through datastrcuture such as arrays,strings,maps,nodelists and more
/*
syntax:

for (variables of iterable){
    //code of block statement
}

*/


const cars= ["tata","nano","audi","tesla"]
const language = "javascript"
let text =""
let text_string = ""

//loop over arrays
for (let i of cars){
    text += i + " "
}

//loop over string
for (let i of language){
    text_string += i +" "
}

console.log(text) // tata nano audi tesla 
console.log(text_string) // j a v a s c r i p t 


