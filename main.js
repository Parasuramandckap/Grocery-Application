var form = document.getElementById("addForm");
var itemList = document.getElementById("items");
var filter = document.getElementById("filter");

//form submit event
form.addEventListener("submit", addItem);
//delete event
itemList.addEventListener("click", removeItem);
//filter event
filter.addEventListener("keyup", filterItems);
let input = document.getElementById("item")
//Add item
function addItem(e) {
  e.preventDefault();

  //Get input value
  var newItem = document.getElementById("item").value;
  //Create new li element
  var li = document.createElement("li");
  //add Class
  li.className = "list-group-item";
  // Add text node with input value
  li.appendChild(document.createTextNode(newItem));

  //crate delete button element
  var deleteButton = document.createElement("button");
  // add classes to delete button
  deleteButton.className = "btn btn-danger btn-sm float-right delete";
  // append text node
  deleteButton.appendChild(document.createTextNode("X"));
  //append button to li
  li.appendChild(deleteButton);
  //append li to list
  itemList.appendChild(li);
  input.value = ""
}

//Remove item
function removeItem(e) {
  if (e.target.classList.contains("delete")) {
    if (confirm("Are you sure?")) {
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

//filter Event
function filterItems(e) {

  // "console.log(e.key)"

  let text = e.target.value.toLowerCase()

  let li = document.querySelectorAll("li")
  //console.log(li)

  let all_li = Array.from(li)

  for (let i = 0; i < all_li.length; i++) {
    
    if(all_li[i].innerText.toLocaleLowerCase().indexOf(text) != -1){
      all_li[i].style.display = "block"
    }
    else{
      all_li[i].style.display = "none"
    }
    
  }
 
}


// function filterItems(e) {
//   //convert to lowercase
//   var text = e.target.value.toLowerCase();
//   //get lis
//   var items = document.getElementsByTagName("li");
//   //conver to an array
//   let all = Array.from(items)

//   //console.log(all)

//   for (let i = 0; i < all.length; i++) {
//    // console.log(all[i])

//    if (all[i].innerText.toLowerCase().indexOf(text) != -1) {
//     all[i].style.display = "block";
//   } else {
//     all[i].style.display = "none";
//   }
    
//   }
// }