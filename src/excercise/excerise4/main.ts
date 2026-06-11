import { addNewTodo, createOrLoadTodo } from "./storage/LocalStorageAction.js"
import { renderTodo } from "./services/renderTodo.js";
import { getRandomId } from "./types/randomID.js";
declare const bootstrap: any

createOrLoadTodo();
renderTodo()

const addBtn = document.getElementById("addBtn") as HTMLButtonElement;
addBtn?.addEventListener("click", () => {
    const newTodoName = document.getElementById("newTodoName") as HTMLInputElement;
    const newTodoDes = document.getElementById("newTodoDes") as HTMLInputElement;

    if (!newTodoName.value.trim()) {
        return;
    }
    
    addNewTodo({
        id: getRandomId(),
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


