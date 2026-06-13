import { getDataLocalStorage } from "../storage/LocalStorageAction.js"
import { Todo } from "../types/todoInterface.js"

const editTodoForm = (id: string) => {
    const todos: Todo[] = getDataLocalStorage();
    const currTodo = todos.find(todo => todo.id === id);
    if (!currTodo) return;

    let editTodoName = document.getElementById("editTodoName") as HTMLInputElement
    let editTodoDes = document.getElementById("editTodoDes") as HTMLInputElement

    editTodoName.value = currTodo.name
    editTodoDes.value = currTodo.description

    const modalElement = document.getElementById("editTodoModal");

    if (!modalElement) return;

    bootstrap.Modal
        .getOrCreateInstance(modalElement)
        .show();
}
export { editTodoForm }
