interface Todo {
    name: string
}




const loadPage = () => {
    const todoData: Todo[] = JSON.parse(
        localStorage.getItem("todoList") || "[]"
    );

    let todoDataScripts = "";

    todoData.forEach((action) => {
        todoDataScripts += `
        <tr>
            <td>${action.name}</td>
            <td>Edit</td>
            <td>Delete</td>
        </tr>`;
    });

    document.getElementById("todo-table")!.innerHTML = todoDataScripts;
};

const saveToLocalStorage = (value: string): void => {
    const todoData: Todo[] = JSON.parse(
        localStorage.getItem("todoList") || "[]"
    );

    todoData.push({
        name: value
    });

    localStorage.setItem(
        "todoList",
        JSON.stringify(todoData)
    );

    loadPage();
};
let addTodoBtn = document.getElementById("addTodo-btn")
declare const bootstrap: any;
addTodoBtn?.addEventListener("click", () => {
    const input = document.getElementById(
        "action-name"
    ) as HTMLInputElement;

    const todoName = input.value.trim();

    if (!todoName) {
        return;
    }

    saveToLocalStorage(todoName);

    const modalElement = document.getElementById("myModal");

    if (modalElement) {
        const modal =
            bootstrap.Modal.getInstance(modalElement) ??
            new bootstrap.Modal(modalElement);

        modal.hide();
    }

    input.value = "";
});
loadPage()