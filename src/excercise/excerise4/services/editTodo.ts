import { getDataLocalStorage, updateTodos } from "../storage/LocalStorageAction.js";
import { Todo } from "../types/todoInterface.js";
const editTodo = (id: string) => {
    const editName = document.getElementById("editTodoName") as HTMLInputElement
    const editDes = document.getElementById("editTodoDes") as HTMLInputElement

    const todos: Todo[] = getDataLocalStorage();
    const currTodo = todos.find(todo => todo.id === id);

    if (!currTodo) return;

    currTodo.name = editName.value;
    currTodo.description = editDes.value;

    updateTodos(todos)

}
export { editTodo }