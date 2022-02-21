let users = []

let changeColor = function () {
    let userColor = document.querySelectorAll('.user')

    for (let user of userColor) {
        let red = Math.round(Math.random()*255)
        let green = Math.round(Math.random()*255)
        let blue = Math.round(Math.random()*255)
        user.style.background = `rgb(${red},${green},${blue})`
    }
}

let createUser = () => {
    let name = document.getElementById('name').value
    let surname = document.getElementById('surname').value
    let age = document.getElementById('age').value

    let user = {
        name,
        surname,
        age,
    }
    users.push(user)
    console.log(users)
    let usersBlock = document.querySelector('.users')
    usersBlock.insertAdjacentHTML('beforeend', `
        <div class="user">
            <div class="name">${user.name}</div>
            <div class="surname">${user.surname}</div>
            <div class="age">${user['age']}лет</div>
        </div>
    `)
}
let loadUsers = () => {
    let loadedUsers = JSON.parse(localStorage.getItem('new_users'))
    console.log('loadedUsers',loadedUsers)
    
    let usersBlock = document.querySelector('.users')
    for (const user of loadedUsers) {
        usersBlock.insertAdjacentHTML('beforeend', `
            <div class="user">
                <div class="name">${user.name}</div>
                <div class="age">${user['age']}</div>
                <button onclick="changeColor()">Color</button>
            </div>
        `)        
        users.push(user)
    }    
}