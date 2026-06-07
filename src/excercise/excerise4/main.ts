import { addNewTodo, createOrLoadTodo } from "./LocalStorageAction.js"
import { renderTodo } from "./renderTodo.js";
declare const bootstrap: any

createOrLoadTodo();
renderTodo()
const addBtn = document.getElementById("addBtn");

addBtn?.addEventListener("click", () => {
    const newTodoName = document.getElementById("newTodoName") as HTMLInputElement;
    const newTodoDes = document.getElementById("newTodoDes") as HTMLInputElement;

    if (
        !newTodoName.value.trim() ||
        !newTodoDes.value.trim()
    ) {
        return;
    }

    addNewTodo({
        name: newTodoName.value,
        description: newTodoDes.value
    });

    bootstrap.Modal
        .getOrCreateInstance(document.getElementById("todoModal"))
        .hide();

    newTodoName.value = "";
    newTodoDes.value = "";

    renderTodo();
});

