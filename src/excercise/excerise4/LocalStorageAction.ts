import { Todo } from "./interface/todoInterface";

const STORAGE_KEY = "todoList";

const createOrLoadTodo = (): void => {
    if (!localStorage.getItem(STORAGE_KEY)) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify([]));
    }
};

const getDataLocalStorage = (): Todo[] => {
    try {
        return JSON.parse(
            localStorage.getItem(STORAGE_KEY) || "[]"
        );
    } catch {
        return [];
    }
};

const updateTodos = (todos: Todo[]): void => {
    localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(todos)
    );
};

const addNewTodo = (newTodo: Todo): void => {
    const todos = getDataLocalStorage();
    todos.push(newTodo);
    updateTodos(todos);
};

export {
    STORAGE_KEY,
    createOrLoadTodo,
    getDataLocalStorage,
    updateTodos,
    addNewTodo
};