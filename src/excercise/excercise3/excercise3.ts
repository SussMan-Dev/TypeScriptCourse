interface Todo {
    name: string
}

let todoList: Todo[] = JSON.parse(localStorage.getItem("todoList") || "[]")

const loadPage = () => {
    localStorage.setItem("todoList", JSON.stringify(todoList))
    console.log(todoList)
}

let addTodoBtn = document.getElementById("addTodo-btn")

addTodoBtn?.addEventListener("click", () => {
    let todoName: string = (document.getElementById("action-name") as HTMLInputElement).value

    //@ts-ignore
    const myModal = bootstrap.Modal.getInstance(
        document.getElementById("myModal"),
        {
            keyboard: false
        }
    )

    todoList.push({
        name: todoName
    }),
    (document.getElementById("action-name") as HTMLInputElement).value = ``
    myModal.hide()
    loadPage()
})