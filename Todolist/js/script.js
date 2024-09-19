function addTodo(){
    var todoInput = document.getElementById("todoinput");
    var todoText = todoInput.value.trim();
    if(todoText !== ""){
        var li = document.createElement("li");
        li.textContent = todoText;
        var deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.classList.add("delete-button");
        deleteButton.onclick = function(){
            li.remove();
        }
        li.appendChild(deleteButton);
        document.getElementById("todolist").appendChild(li);
        todoInput.value = "";
    }
}
