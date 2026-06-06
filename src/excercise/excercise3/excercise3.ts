interface Todo {
    id: number
    name: string;
}

const STORAGE_KEY = "todoList";

const getTodos = (): Todo[] => {
    return JSON.parse(
        localStorage.getItem(STORAGE_KEY) || "[]"
    );
};

const saveTodos = (todos: Todo[]): void => {
    localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(todos)
    );
};

const renderTodos = (): void => {
    const todos = getTodos();

    const table = document.getElementById("todo-table");

    if (!table) {
        return;
    }

    table.innerHTML = todos
        .map(
            (todo) => `
            <tr>
                <td>${todo.id}</td>
                <td>${todo.name}</td>
                <td>
                    <button class="btn btn-primary">
                        Edit
                    </button>
                    <button class="btn btn-danger delete-btn" data-id="${todo.id}">Delete</button>
                </td>
            </tr>
        `
        )
        .join("");
};

const addTodo = (id: number, name: string): void => {
    const todos = getTodos();

    todos.push({ id, name });

    saveTodos(todos);

    renderTodos();
};

const addTodoBtn = document.getElementById(
    "addTodo-btn"
);
declare const bootstrap: any;
addTodoBtn?.addEventListener("click", () => {
    const inputName = document.getElementById(
        "action-name"
    ) as HTMLInputElement | null;
    const inputId = document.getElementById(
        "action-id"
    ) as HTMLInputElement | null;
    if (!inputName || !inputId) {
        return;
    }

    const todoName = inputName.value.trim();
    const todoId = Number(inputId.value)
    if (!todoName) {
        return;
    }

    addTodo(todoId, todoName);

    const modalElement =
        document.getElementById("myModal");

    if (modalElement) {
        const modal =
            bootstrap.Modal.getInstance(modalElement) ??
            new bootstrap.Modal(modalElement);

        modal.hide();
    }

    inputId.value = "";
    inputName.value = "";
});

const deleteTodo = (inputId: number) => {
    const todos = getTodos();
    const newTodo = todos.filter(todo => todo.id !== inputId);
    saveTodos(newTodo);
    renderTodos();
};

const todoTable = document.getElementById("todo-table");

todoTable?.addEventListener("click", (event) => {
    const target = event.target as HTMLElement;

    if (!target.classList.contains("delete-btn")) {
        return;
    }

    const id = Number(target.dataset.id);

    deleteTodo(id);
});

renderTodos();