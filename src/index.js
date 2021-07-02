import "modern-normalize";
import "./sass/main.scss";
import template from './templates/menu.hbs';
import data from './menu.json';
import { setlocalStorage, getLocalStorage } from "./templates/utils/utils";


let tmpUserNameState = '';

window.onload = () => {
  const container = document.getElementById('container');
  container.innerHTML = template(data);
  const isName = getLocalStorage();

  if (isName) {
    const newData = Object.assign({}, data, { name: isName });
    container.innerHTML = template(newData);
  } else {
    container.innerHTML = template(data);
    const nameInput = document.getElementById("nameInput");
  const saveUser = document.getElementById("saveUser");

    nameInput.addEventListener('input', (e) => {
      // console.log(e.target.value);
      tmpUserNameState = e.target.value;
    });
    saveUser.addEventListener('click', (e) => {
      setlocalStorage(tmpUserNameState);
      const newData = Object.assign({}, data, { name: tmpUserNameState });
      container.innerHTML = template(newData);
    });
  };


  
};