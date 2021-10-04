function addNewList() {
    alert('hello world alert!');
    console.log('hello world console');
}

function addListItem() {
    console.log("hello world!")
    let list = document.getElementById("grocery-list"); // access to grocery list 
    let itemInput = document.getElementById("new-list-item"); //allows access to input field 
    let newItem = document.createElement("li");
    newItem.appendChild(document.createTextNode(itemInput.value));
    list.appendChild(newItem);
}

function deleteListItem(item) {
    // remove li element (item) from ol element (item.parentNode)
     item.parentNode.removeChild(item);
}



