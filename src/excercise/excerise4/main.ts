import { addNewTodo, createOrLoadTodo } from "./storage/LocalStorageAction.js"
import { renderTodo } from "./services/renderTodo.js";
import { getRandomId } from "./services/randomID.js";
import { removeTodo } from "./services/removeTodo.js";
import { editTodoForm } from "./services/editTodoForm.js";
import { editTodo } from "./services/editTodo.js";
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

const todoList = document.querySelector("#table-data") as HTMLTableSectionElement

todoList?.addEventListener("click", (e) => {
    const target = e.target as HTMLElement;
    if (target.classList.contains("delete-btn")) {
        const id = target.dataset.id;

        if (id) {
            removeTodo(id);
            renderTodo();
        }
    }
});

document.addEventListener("click", (e) => {
    const target = e.target as HTMLElement;
    if (target.classList.contains("edit-btn")) {
        const id = target.dataset.id;
        if (id) {
            editTodoForm(id)
            const saveChangesBtn = document.getElementById("saveChanges") as HTMLButtonElement
            saveChangesBtn?.addEventListener("click", () => {
                editTodo(id)
                bootstrap.Modal
                    .getOrCreateInstance(document.getElementById("editTodoModal"))
                    .hide();
                renderTodo()
            })

        }
    }
});