var list = document.getElementById("list");
firebase.database().ref('todos app').on('child_added',function(data){
        //create li with text node
    var li = document.createElement('li')
    var liText = document.createTextNode(data.val().value);
    li.appendChild(liText);


    //create delete button
    var delBtn = document.createElement("button")
    var delText = document.createTextNode("DELETE")
    delBtn.setAttribute("class","btn")
    delBtn.setAttribute("id",data.val().key)
    delBtn.setAttribute("onclick","deleteItem(this)")
    delBtn.appendChild(delText)



    // create edit btn
   var editbtn = document.createElement("button")
   var edittext = document.createTextNode("EDIT")
   editbtn.appendChild(edittext)
   editbtn.setAttribute('id',data.val().key)
   editbtn.setAttribute("onclick","editItem(this)")

    li.appendChild(delBtn)
    li.appendChild(editbtn)

    list.appendChild(li)
    

    

})

function addToDo(){
    var todo_item = document.getElementById("todo-item");
    var key = firebase.database().ref('todos app').push().key;
    var todo={
        value: todo_item.value,
        key: key
    }
    firebase.database().ref('todos app').child(key).set(todo)    
    todo_item.value = ""
    
 }   


 

function deleteItem(e){
    // console.log(e.id);
    // e.parentNode.remove()
    firebase.database().ref('todos app').child(e.id).remove()
    e.parentNode.remove()
}

function editItem(e){
    var val = prompt("Enter updated value",e.parentNode.firstChild.nodeValue);
    
    
    var editTodo = {
        value: val,
        key: e.id
    }
    firebase.database().ref('todos app').child(e.id).set(editTodo)
    e.parentNode.firstChild.nodeValue = val;
    

}

function deleteall(){
    list.innerHTML = ""
}

 


    









  
