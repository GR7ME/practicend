// let obj = {
//     name:"lalit",
//     walk(){
//         console.log("I am walking")
//     },
//     talk(){
//         console.log("I am talking")
//     }
// }

//To access object
// obj.walk()
// obj.talk()


//This keyword

let obj ={
    name:"lalit",
    talk(){
        console.log(this)
    },
    walk(){}
}

obj.talk()