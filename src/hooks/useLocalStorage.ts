import { ITodo } from "src/types/todoType";

import { defaultCategories } from "src/constant/defaultCategories";

export const useLocalStorage = () => {
    const todos = localStorage.getItem("todos");
    let todosList: ITodo[];
    if (todos) {
        todosList = JSON.parse(todos);
    } else {
        todosList = [];
    }

    const categories = localStorage.getItem("categories");
    let categoriesList: string[];
    if (categories) {
        categoriesList = JSON.parse(categories);
    } else {
        categoriesList = defaultCategories;
    }

    const setItemsToLocalStorage = (key: string, items: string[] | ITodo[]) => {
        localStorage.setItem(key, JSON.stringify(items));
    };

    return {
        categoriesList,
        todosList,
        setItemsToLocalStorage
    }
};