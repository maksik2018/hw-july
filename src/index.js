import "modern-normalize";
import './sass/main.scss';
import menu from './menu.json';
import menuTemplates from './templates/menu.hbs';


const menuEl = document.querySelector('.js-menu');
menuEl.innerHTML = menuTemplates(menu);

const themeSwitch = document.querySelector('#theme-switch-toggle');
const bodyEl = document.querySelector('body');


const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

themeSwitch.addEventListener('change', onThemeChange);

onThemeStorage();

function onThemeChange () {
    if (themeSwitch.checked === true) {
    bodyEl.classList.add(Theme.DARK);
    bodyEl.classList.remove(Theme.LIGHT);
      localStorage.setItem('theme', 'dark-theme');
       //dark  
      
  } else {
    // ... light
      bodyEl.classList.add(Theme.LIGHT);
      bodyEl.classList.remove(Theme.DARK);
       localStorage.setItem('theme', 'light-theme');     
  }

   
};

function onThemeStorage() {
    const themeStorage = localStorage.getItem('theme');
      if (themeStorage === 'dark-theme') {
            bodyEl.classList.add(Theme.DARK);
            themeSwitch.checked = true;
        }
        else  {
          // else if (themeStorage === 'light-theme') {
          bodyEl.classList.add(Theme.LIGHT);
          
        }
          
      
      
};
  
