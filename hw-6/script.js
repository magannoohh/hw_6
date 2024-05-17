const users = [];

function addItem() {
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;

    if (name && age) {
        users.push({ name, age });

        renderList();
        
        
        document.getElementById('name').value = '';
        document.getElementById('age').value = '';
    } else {
        alert('Пожалуйста, заполните оба поля!');
    }
}

function renderList() {
    const userList = document.getElementById('userList');
    userList.innerHTML = ''; 

    users.forEach((user, index) => {
        const listItem = document.createElement('li');
        listItem.className = 'list-item';
        listItem.textContent = `Имя: ${user.name}, Возраст: ${user.age}`;
        userList.appendChild(listItem);
    });
}