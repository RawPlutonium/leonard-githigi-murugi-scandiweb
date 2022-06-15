//This utility will help in creating a localStorage for the theme
//It will also allow for faster fetching of values 

export function setToLS(key, value){
    window.localStorage.setItem(key, JSON.stringify(value));
}


export function getFromLS(key){
    const value = window.localStorage.getItem(key);
    if (value) {
        return JSON.parse(value);
    }
}