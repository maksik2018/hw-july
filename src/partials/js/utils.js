
export const onThemeStorage = () => {
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
// const bodyEl = document.querySelector('body');
// const themeSwitch = document.querySelector('#theme-switch-toggle');
// themeSwitch.addEventListener('change', onThemeChange);