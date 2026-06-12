import { getDataLocalStorage } from "../storage/LocalStorageAction.js"
import { Todo } from "../types/todoInterface.js"

const editTodoForm = (id: string) => {
    const todos: Todo[] = getDataLocalStorage();
    const currTodo = todos.find(todo => todo.id === id);
    let editTodoName = document.getElementById("editTodoName") as HTMLInputElement
    let editTodoDes = document.getElementById("editTodoDes") as HTMLInputElement

    if (!currTodo) return;
    
    editTodoName.value = currTodo.name
    editTodoDes.value = currTodo.description

    bootstrap.Modal
        .getOrCreateInstance(document.getElementById("editTodoModal"))
        .show();   
    
}
export{editTodoForm}
