function registerUser(login, password) {
    // Проверяем, есть ли уже такой пользователь в localStorage
    if (localStorage.getItem(login)) {
        alert('Пользователь с таким логином уже существует.');
        return;
    }

    // Храним данные пользователя в localStorage
    // В реальном приложении здесь должна быть реализация хеширования пароля
    localStorage.setItem(login, password);

    alert('Пользователь зарегистрирован: ' + login);
}

// Функция для авторизации пользователя
function authenticateUser(login, password) {
    // Получаем сохраненный пароль
    var storedPassword = localStorage.getItem(login);

    // Проверяем, совпадает ли введенный пароль с сохраненным
    if (storedPassword === password) {
        alert('Авторизация прошла успешно: ' + login);
        return true;
    } else {
        alert('Ошибка авторизации: ' + login);
        return false;
    }
}

// Обработчики событий для форм
document.getElementById('registrationForm').addEventListener('submit', function (event) {
    event.preventDefault();
    var login = document.getElementById('regLogin').value;
    var password = document.getElementById('regPassword').value;
    registerUser(login, password);
});

document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();
    var login = document.getElementById('login').value;
    var password = document.getElementById('password').value;
    authenticateUser(login, password);
});
