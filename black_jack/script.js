let first_child = 10
let second_child = 11
let sum =  first_child + second_child
let hasBlackJack = false

if (sum <= 0){
    console.log("Do you want to draw a new card?")
}
else if (sum === 21){
    console.log("Wohoo! You've got Blackjack!")
    hasBlackJack = true
}
else{
    console.log("You're out of the game! ")
}

if (hasBlackJack == true){
  alert("Won!!")
}


console.log(hasBlackJack)






