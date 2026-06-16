import { getDataLocalStorage } from "../storage/LocalStorageAction.js"
import { Todo } from "../types/todoInterface.js"
const renderTodo = () => {
    const todos: Todo[] = getDataLocalStorage()
    const tableData = document.getElementById("table-data") as HTMLTableSectionElement;
    let todosScripts = ``
    todos.forEach((todo, index) => {
        todosScripts +=
            `<tr>
            <th scope="row">${index}</th>
            <td>${todo.id}</td>
            <td>${todo.name}</td>
            <td>${todo.description}</td>
            <td>
                <button class="btn btn-primary edit-btn" data-id="${todo.id}" >Edit</button>
                <button class="btn btn-danger delete-btn" data-id="${todo.id}">Delete</button>            
            </td>
        </tr>`
    })
    tableData.innerHTML = todosScripts
}
export { renderTodo }