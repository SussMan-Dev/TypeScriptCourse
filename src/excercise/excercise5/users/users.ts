const user_api = `http://localhost:3000/users`

interface UserState {
    id: string
    name: string
    email: string
}

let editingUserId: string | null = null

const fetchUser = async () => {
    const res = await fetch(user_api)
    const users = await res.json() as UserState[]
    return users
}

const userDisplay = async () => {
    const userData = await fetchUser()

    const userTable = document.getElementById("users-table") as HTMLTableSectionElement

    if (!userTable) return

    let html = ``

    userData.forEach((user, index) => {
        html += `
        <tr>
          <th scope="row">${index + 1}</th>
          <td>${user.id}</td>
          <td>${user.name}</td>
          <td>${user.email}</td>
          <td>
            <button
                type="button"
                class="btn btn-primary edit-btn"
                data-bs-toggle="modal"
                data-bs-target="#editUserModal"
                data-id="${user.id}">
                Edit
            </button>

            <button
                class="btn btn-danger delete-btn"
                data-id="${user.id}">
                Delete
            </button>
          </td>
        </tr>
        `
    })

    userTable.innerHTML = html
}

/* =========================
   CREATE
========================= */

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
})

/* =========================
   DELETE
========================= */

const removeUser = async (id: string) => {
    const res = await fetch(`${user_api}/${id}`, {
        method: "DELETE"
    })

    return res.ok
}

/* =========================
   EDIT
========================= */

const displayEditForm = async (id: string) => {
    const res = await fetch(`${user_api}/${id}`)

    const data = await res.json() as UserState

    const editUserName = document.getElementById("user-name-edit") as HTMLInputElement
    const editUserEmail = document.getElementById("user-email-edit") as HTMLInputElement

    editUserName.value = data.name
    editUserEmail.value = data.email
}

const saveNewChanges = async (
    id: string,
    name: string,
    email: string
) => {

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

    return res.ok
}

/* =========================
   EVENT DELEGATION
========================= */

const userTable = document.querySelector(
    "#users-table"
) as HTMLTableSectionElement

userTable.addEventListener("click", async (e) => {

    const target = e.target as HTMLElement

    if (target.classList.contains("delete-btn")) {

        const id = target.dataset.id

        if (!id) return

        await removeUser(id)
        await userDisplay()
    }

    if (target.classList.contains("edit-btn")) {

        const id = target.dataset.id

        if (!id) return

        editingUserId = id

        await displayEditForm(id)
    }
})

/* =========================
   SUBMIT EDIT
========================= */

const submitEditBtn = document.getElementById(
    "submitEditBtn"
) as HTMLButtonElement

submitEditBtn.addEventListener("click", async () => {

    if (!editingUserId) return

    const editUserName = document.getElementById(
        "user-name-edit"
    ) as HTMLInputElement

    const editUserEmail = document.getElementById(
        "user-email-edit"
    ) as HTMLInputElement

    const success = await saveNewChanges(
        editingUserId,
        editUserName.value,
        editUserEmail.value
    )

    if (!success) {
        alert("Update failed")
        return
    }

    await userDisplay()

    const modalElement = document.getElementById("editUserModal")!

    const modal =
        bootstrap.Modal.getOrCreateInstance(modalElement)

    modal.hide()

    editingUserId = null
})

userDisplay()