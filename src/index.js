import "modern-normalize";
import './sass/main.scss';
import menu from './menu.json';
import menuTemplates from './templates/menu.hbs';

// console.log(menu);
// console.log(menuTemplates(menu));

const menuEl = document.querySelector('.js-menu');
menuEl.innerHTML = menuTemplates(menu);

const themeSwitch = document.querySelector('#theme-switch-toggle');
console.log(themeSwitch);
const bodyEl = document.querySelector('body');

// let isLightTheme = true;
// let theme = 'light';
// themeSwitch.addEventListener('change', onThemeSwitch);



let isLightTheme = true;

themeSwitch.addEventListener('change', () => {
    if (isLightTheme) {
        bodyEl.classList.add('dark-theme');
        bodyEl.classList.remove('light-theme');
    // ... dark
  } else {
    // ... light
        bodyEl.classList.add('light-theme');
         bodyEl.classList.remove('dark-theme');
  }

  isLightTheme = !isLightTheme;
});

// function onThemeSwitch (event) {
//     // event.preventDefault();
//     if (isLightTheme) {
//     //     bodyEl.classList.add('light-theme');
//     //     bodyEl.classList.remove('dark-theme');
//     // //  theme = 'dark'
//     } else {
//         isLightTheme = !isLightTheme; 
//             // bodyEl.classList.add('dark-theme');
//         }
//     //   bodyEl.classList.add('dark-theme');
// };