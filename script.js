//poner el modo oscuro o claro dependiendo de la preferencia del usuario guardada en localStorage
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

const currentTheme = localStorage.getItem('theme');

if (currentTheme === 'light') {
    body.classList.add('light-mode');
    themeToggle.textContent = '☀️';
}

themeToggle.addEventListener('click', () => {
    body.classList.toggle('light-mode');

    let theme = 'dark';
    if (body.classList.contains('light-mode')) {
        theme = 'light';
        themeToggle.textContent = '☀️';
    } else {
        themeToggle.textContent = '🌙';
    }

    localStorage.setItem('theme', theme);
});