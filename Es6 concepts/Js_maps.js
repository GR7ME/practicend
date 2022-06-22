//to use object as keys is map feature

const apple ={name:"Apples"};


const fruit = new Map([["apple",500],["mango",900]]);
let text =""

fruit.forEach(function(value,key){
text += key + '=' + value + " "
})

console.log(text)
