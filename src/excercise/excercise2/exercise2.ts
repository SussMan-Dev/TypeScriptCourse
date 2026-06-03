type UserType = {
    ID: number;
    name: string;
    age: number;
};

let UserList: UserType[] = [
    {
        ID: 1,
        name: "Đức Huy",
        age: 29
    },
    {
        ID: 2,
        name: "An Béo",
        age: 21
    },
    {
        ID: 3,
        name: "Lợi",
        age: 20
    }
];

localStorage.setItem("users", JSON.stringify(UserList));

const loadUser = () => {
    const userList = document.getElementById("userList");
    let users: string = "";
    const data = localStorage.getItem("users");

    if (data !== null) {
        const result = JSON.parse(data) as UserType[];

        result.forEach((user) => {
            users += `
                <tr>
                    <th scope="row">${user.ID}</th>
                    <td>${user.name}</td>
                    <td>${user.age}</td>
                </tr>
            `;
        });
    }

    if (userList) {
        userList.innerHTML = users;
    }
};

loadUser();