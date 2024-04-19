function checkCredentials() {
    var login = document.querySelector('input[type="login"]').value;
    var password = document.querySelector('input[type="password"]').value;
    if (login === 'login' && password === 'password') {
        window.location.href = 'https://sdo.ket44.ru';
    } else {
        alert('Неверный логин или пароль. Попробуйте еще раз.');
    }
}
function Proverka() {
    if (login === 'login' && password === 'password') {
    }
    console.log('Вход произведен успешно!')
}
function registr() {
    window.location.href = 'registration.html';
}
function gotovo() {
    window.location.href = 'index.html';
}