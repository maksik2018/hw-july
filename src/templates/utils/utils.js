import { USER_NAME } from "./constants";

export const setlocalStorage = (name) => {
    
    try {
      localStorage.setItem(USER_NAME, name);  
    } catch (error) {
        console.log(error);
    }
};

export const getLocalStorage = () => {
    try {
        const isNameExists = localStorage.getItem(USER_NAME);
        if (!isNameExists) return false;
        return isNameExists;
        // console.log(isNameExists);
    } catch (error) {
        console.log(error);
    }
}