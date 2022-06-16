import { ITodo } from "src/types/todoType";

export const getFiltersData = (todos: ITodo[]) => {
    const categoryTotal = todos.reduce((accum, currentValue) => {
        accum[currentValue.category] = (accum[currentValue.category] || 0) + 1;
        return accum;
    }, {});

    const getCompleted = (categoryName: string) => {
        const completed = todos.filter(todo => todo.category === categoryName && todo.isDone);
        return completed.length;
    }

    return { categoryTotal, getCompleted }
}