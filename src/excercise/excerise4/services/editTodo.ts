import { getDataLocalStorage } from "../storage/LocalStorageAction";
import { Todo
    
 } from "../types/todoInterface";
const editTodo = (id: string) =>{
    const editName = document.getElementById("editTodoName") as HTMLInputElement
    const editDes = document.getElementById("editTodoDes") as HTMLInputElement

    const todos: Todo[] = getDataLocalStorage();
    const currTodo = todos.find(todo => todo.id === id);
    if(currTodo){
        currTodo.name = editName.value
        currTodo.description = editDes.value
    }
} 
export {editTodo}