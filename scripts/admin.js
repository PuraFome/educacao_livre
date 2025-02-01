const initializeAdmin = () => {
    loadUsers();
    console.log('Admin page initialized');

    const userForm = document.getElementById('userForm');
    const clearFormButton = document.getElementById('clearForm');
    const clearAllButton = document.getElementById('clearAll');
    const searchInput = document.getElementById('search');

    userForm.onsubmit = handleFormSubmit;
    clearFormButton.onclick = clearForm;
    clearAllButton.onclick = clearAllUsers;
    searchInput.oninput = (e) => searchUsers(e.target.value);
};

const loadUsers = () => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const userList = document.getElementById('userList');
    userList.innerHTML = '';
    users.forEach((user, index) => {
        const li = document.createElement('li');
        li.textContent = `${user.date} - ${user.username} - ${user.email}`;
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Excluir';
        deleteButton.onclick = () => {
            deleteUser(index);
        };
        li.appendChild(deleteButton);
        userList.appendChild(li);
    });
};

const saveUser = (user) => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));
    loadUsers();
};

const deleteUser = (index) => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    users.splice(index, 1);
    localStorage.setItem('users', JSON.stringify(users));
    loadUsers();
};

const clearAllUsers = () => {
    localStorage.removeItem('users');
    loadUsers();
};

const searchUsers = (query) => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const userList = document.getElementById('userList');
    userList.innerHTML = '';
    users.filter(user => user.username.includes(query) || user.email.includes(query))
        .forEach((user, index) => {
            const li = document.createElement('li');
            li.textContent = `${user.date} - ${user.username} - ${user.email}`;
            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Excluir';
            deleteButton.onclick = () => {
                deleteUser(index);
            };
            li.appendChild(deleteButton);
            userList.appendChild(li);
        });
};

const handleFormSubmit = (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const date = new Date().toLocaleString();
    saveUser({ username, email, date });
    document.getElementById('userForm').reset();
};

const clearForm = () => {
    document.getElementById('userForm').reset();
};