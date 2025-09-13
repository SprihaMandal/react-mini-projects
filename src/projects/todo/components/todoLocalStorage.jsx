const todoKey = "todoKey";


export const getTodoLocalData = () => {
    const rawData = window.localStorage.getItem(todoKey);
    if (!rawData) return [];
    return JSON.parse(rawData);
}

export const setTodoLocalData = (todoArr) => {
    if (!todoArr) return;
    const rawData = JSON.stringify(todoArr);
    return window.localStorage.setItem(todoKey, rawData);
}