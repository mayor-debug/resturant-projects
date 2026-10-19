const root = document.documentElement;
const toggle = document.getElementById('toggle');
const STORAGE_KEY = 'theme';
 
function applyTheme(theme) {
    root.setAttribute('data-theme', theme);
 
    const isDark = theme === 'dark';
    toggle.setAttribute('aria-pressed', String(isDark));
    toggle.setAttribute('aria-label', isDark ? 'Switch to light theme' : 'Switch to dark theme');
}
 
function saveTheme(theme) {
    try {
        localStorage.setItem(STORAGE_KEY, theme);
    } catch (e) {
       
    }
}
 

applyTheme(root.getAttribute('data-theme') || 'light');
 
toggle.addEventListener('click', () => {
    const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    applyTheme(next);
    saveTheme(next);
});

const hamBurgerMenu = document.querySelector('.hamburger-menu')
const hamBurgerMenuIcon = document.querySelector('.hamburger-menu i')
const dropDownMenu = document.querySelector('.dropdown-menu')
hamBurgerMenu.onclick = function (){
 dropDownMenu.classList.toggle('open')
 const isOpen = dropDownMenu.classList.contains('open')
}

