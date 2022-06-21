let arr = [1,2,3,4,5]

let obj = [
  {id:1,name:"lalit"},
    {id:2,name:"kamal"},
    {id:3,name:"human"}
]

//Map function
// let map_fn = arr.map(arr => arr*2);

// console.log(map_fn)

//output
// [2,4,6,8,10]

//forEach function

let for_each = arr.forEach(function(item,index){
  return console.log(item,index)
})
console.log(for_each)

//reduce function
//it performs reduction technique where it reduces the no of items 
//here result contains the item given in after call back function as an initial value and after that performs whatever action you define it to do

let reduce_fn = arr.reduce(function(result,item){
  return result + item  
},0)

console.log(reduce_fn)

//filter function
//filter filters the items in an array by given condtion
//and returns items that matches that  condition only in an array

let filter_fn = arr.filter(item => item % 2 == 0)

console.log(filter_fn)

//some function
//Returns logical value if given condition is fulfilled by any of the given items
let some_fn = arr.some(item => item % 2 == 0)
console.log(some_fn)

//Every
//Same as some but all items in an array must fulfill the condition given
//and yeah returns true if all item meets the condition otherwise false
let every_fnc = arr.every(item => item % 2 ==0)
console.log(every_fnc)

//find function
// helps find item in an object that matches its condition and returns it
let find_fnc = obj.find(item =>{
return item.name === "human"
})
console.log(find_fnc)


//find index function
//returns index of an item that  matches the condition 

let find_index_fnc = obj.findIndex(item =>
 item.id === 2
)

console.log(find_index_fnc)
