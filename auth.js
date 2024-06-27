function authenticateUser(login, password) {
    var storedPassword = localStorage.getItem(login);
    if (storedPassword === password) {
        alert('Авторизация прошла успешно!');
        console.log('Авторизация прошла успешно!');
        // Пример данных пользователя
        var userData = {
            name: "Иван",
            email: "ivan@example.com"
        };
        // Отображение данных пользователя
        document.getElementById('user-data').style.display = 'block';
        document.getElementById('user-name').textContent = userData.name;
        document.getElementById('user-email').textContent = userData.email;
        window.location.href = 'index.html';
    } else {
        alert('Ошибка авторизации!');
        return false;
    }
}