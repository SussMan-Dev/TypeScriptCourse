import { getDataLocalStorage } from "./LocalStorageAction.js"
import { Todo } from "./interface/todoInterface.js"
const renderTodo = () =>{
    const todos : Todo[] = getDataLocalStorage()
    const tableData = document.getElementById("table-data") as HTMLTableSectionElement;
    let todosScripts = ``
    todos.forEach((todo, index)=>{
        todosScripts += 
        `<tr>
            <th scope="row">${index}</th>
            <td>${todo.name}</td>
            <td>${todo.description}</td>
            <td>
                <button class="btn btn-primary">Edit</button>
                <button class="btn btn-danger">Delete</button>                
            </td>
        </tr>`
    })
    tableData.innerHTML = todosScripts
}
export {renderTodo}