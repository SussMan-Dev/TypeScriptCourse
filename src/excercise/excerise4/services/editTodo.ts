import { getDataLocalStorage, updateTodos } from "../storage/LocalStorageAction.js";
import { Todo } from "../types/todoInterface.js";
const editTodo = (id: string) => {
    // if you knew the existence of this Element, you can set it HTMLInputElement only
    const editName = document.getElementById("editTodoName") as HTMLInputElement | null;
    const editDes = document.getElementById("editTodoDes") as HTMLInputElement | null;

    if (!editName || !editDes) return;

    const todos: Todo[] = getDataLocalStorage();
    
    const currTodo: Todo | undefined =
        todos.find(todo => todo.id === id);
    if (!currTodo) return;

    currTodo.name = editName.value;
    currTodo.description = editDes.value;

    updateTodos(todos)

}
export { editTodo }