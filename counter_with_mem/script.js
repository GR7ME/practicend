//create a variable ,bonuspoint . Initialize it as 50 Increase it to 199
//Decrease it to down to 25 and then finally it to 70
//Console.log the value after each step

// let bonusPoints = 50
// console.log(bonusPoints)

// bonusPoints = bonusPoints + 50
// console.log(bonusPoints)

// bonusPoints = bonusPoints - 75
// console.log(bonusPoints)

// bonusPoints = bonusPoints + 45
// console.log(bonusPoints)

/*
	Output
	50
	100
	25
	70
*/

//initialize the count as 0
//listen for clicks on the increment button
//increment the count varible when the button is clicked
//change count in html to reflect new changes


//Also added saving button to save previous entires

//accessing count through dom
let count_id = document.getElementById("count")
//declaring count
let count = 0 

//declaring memory to save previous entires 
let memory = ""

//accessing dom to show memory
let prev = document.getElementById("mem")

function increment(){
  console.log("Increment button is clicked");
  if (count >= 0) {
  count  = count + 1
  count_id.innerHTML = count    
  }
}

function save_to_mem(){
  console.log("Saved to mem");
  count_str = count.toString()
  memory = memory + "-" + count_str 
  prev.innerHTML = "Previous entires:" + memory
}


//finished till 1:14:05 of javascript course
