function page1auth() {
    let login = document.querySelector('input[type="login"]').value;
    let password = document.querySelector('input[type="password"]').value;
    if (login === 'login' && password === 'password') {
        
        console.log('Вход произведен успешно!');
    } else {
        alert('Неверный логин или пароль. Попробуйте еще раз.');
        console.log('Зарегистрируйтесь!');
    }
}
function Registered() {
    window.location.href = 'registration.html'
    let registeredUsers = {};
    document.getElementById('login.registr').addEventListener('submit', function (event) {
        event.preventDefault();
        let newUsername = document.getElementById('newUsername').value;
        let newPassword = document.getElementById('newPassword').value;
        registeredUsers[newUsername] = newPassword;
        alert('Registered new user: ' + newUsername);
    })
    window.location.href = 'index.html';;
}
