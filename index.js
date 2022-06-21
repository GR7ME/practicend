let count_id = document.getElementById("count")
let count = 0 
function increment(){
  if (count >= 0) {
  count  = count + 1
  count_id.innerHTML = count    
  }
}

function decrement(){
  if (count >0) {
  count  = count - 1
  count_id.innerHTML = count 
  }
}
