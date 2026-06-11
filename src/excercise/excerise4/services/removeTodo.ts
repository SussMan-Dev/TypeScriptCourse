import { getDataLocalStorage, updateTodos } from "../storage/LocalStorageAction.js"
import { Todo } from "../types/todoInterface.js"

const removeTodo = (inputId: string) => {
    const todoList: Todo[] = getDataLocalStorage()
    const newTodos = todoList.filter(
        todo => todo.id !== inputId
    )
    updateTodos(newTodos)
}
export { removeTodo }