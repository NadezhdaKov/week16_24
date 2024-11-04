const form = document.forms.namedItem('regForm');

const userNameInput = form.elements.namedItem('username');
const userNameError = document.getElementById('usernameError');

const emailInput = form.elements.namedItem('email');
const emailError = document.getElementById('emailError');

form.addEventListener('submit', function(evt) {
    evt.preventDefault();
    let hasError = false;

    if (userNameInput.value === '' || userNameInput.value < 2) {
        userNameError.textContent = 'Введите имя пользователя.';
        userNameError.style.display = 'block';
        hasError = true;
    }

    if (condition) {
        // проверка email
    }

        else {
        userNameError.textContent = '';
        hasError = false;
    }

});
