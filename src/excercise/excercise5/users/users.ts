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
            <button type="button" class="btn btn-primary edit-btn" data-bs-toggle="modal" data-bs-target="#editUserModal" data-id="${user.id}">Edit</button>
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


const removeUser = async (id: string) => {
    await fetch(`${user_api}/${id}`, {
        method: "DELETE",
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        }
    })
}

const displayEditForm = async (id: string) => {
    const res = await fetch(`${user_api}/${id}`)
    const data = await res.json() as UserState
    const editUserName = document.getElementById("user-name-edit") as HTMLInputElement
    const editUserEmail = document.getElementById("user-email-edit") as HTMLInputElement
    editUserEmail.value = data.email
    editUserName.value = data.name
}

const saveNewChanges = async (id: string, name: string, email: string) => {
    const res = await fetch(`${user_api}/${id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name,
            email
        })
    })
    if (res.ok) {
        console.log("editing successful");
    }
}

const userTable = document.querySelector("#users-table") as HTMLTableSectionElement
userTable.addEventListener("click", (e) => {
    const target = e.target as HTMLElement
    if (target.classList.contains("delete-btn")) {
        const id = target.dataset.id
        if (id) {
            removeUser(id)
            userDisplay()
        }
    }
    if (target.classList.contains("edit-btn")) {
        const id = target.dataset.id
        if (id) {
            displayEditForm(id)
            const submitEditBtn = document.getElementById("submitEditBtn") as HTMLButtonElement
            submitEditBtn.addEventListener("click", () => {
                const editUserName = document.getElementById("user-name-edit") as HTMLInputElement
                const editUserEmail = document.getElementById("user-email-edit") as HTMLInputElement
                saveNewChanges(id,editUserName.value,editUserEmail.value)
                userDisplay()
            })
        }
    }
})
userDisplay()