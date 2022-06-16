import { ITodo } from "src/types/todoType";

export const useLocalStorage = () => {
    const todos = localStorage.getItem("todos");
    let data: ITodo[];
    if (todos) {
        data = JSON.parse(todos);
    } else {
        data = [];
    }

    const setTodosToLocalStorage = (todos: ITodo[]) => {
        localStorage.setItem("todos", JSON.stringify(todos));
    };

    return {
        todosList: data,
        setTodosToLocalStorage
    }
};