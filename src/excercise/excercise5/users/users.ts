const user_api = `http://localhost:3000/users`
interface UserState {
    id: string,
    name: string,
    email: string,
}
const fetchUser = async () => {
    const res = await fetch(user_api)
    const users = await res.json() as UserState[]
    return users
}
const userDisplay = async () => {
    const userData = await fetchUser()
    const userTable = document.getElementById("users-table") as HTMLTableSectionElement
    let html = ``
    if (!userTable) {
        return
    }
    userData.forEach((user, index) => {
        html += `
        <tr>
          <th scope="row">${index + 1}</th>
          <td>${user.id}</td>
          <td>${user.name}</td>
          <td>${user.email}</td>
          <td>
            <button class="btn btn-primary">Edit</button>
            <button class="btn btn-danger delete-btn" data-id="${user.id}">Delete</button>            
          </td>
        </tr>
        `
    })
    userTable.innerHTML = html
}

const addUserBtn = document.getElementById("addBtn") as HTMLButtonElement
addUserBtn?.addEventListener("click", async () => {
    const userName = document.getElementById("user-name") as HTMLInputElement
    const userEmail = document.getElementById("user-email") as HTMLInputElement

    if (!userName.value || !userEmail.value) {
        return
    }

    const data: UserState = {
        id: crypto.randomUUID(),
        name: userName.value,
        email: userEmail.value
    }

    const res = await fetch(user_api, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })

    if (!res.ok) {
        alert("Create user failed")
        return
    }

    await userDisplay()

    userName.value = ""
    userEmail.value = ""

    const modalElement = document.getElementById("userModal")!
    const modal = bootstrap.Modal.getOrCreateInstance(modalElement)
    modal.hide()
    userDisplay()
})


const removeUser = async (id: string) =>{
    await fetch(`${user_api}/${id}`,{
        method: "DELETE",
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        }
    })
}
const userTable =  document.querySelector("#users-table") as HTMLTableSectionElement
userTable.addEventListener("click",(e)=>{
    const target = e.target as HTMLElement
    if(target.classList.contains("delete-btn")){
        const id = target.dataset.id
        if(id){
            removeUser(id)
            userDisplay()
        }
    }
})

userDisplay()