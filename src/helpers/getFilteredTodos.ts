import { ITodo } from "src/types/todoType";

const getFilteredTodos = (todos: ITodo[], category: string) => {
    return todos.filter(todo => todo.category === category);;
}

export default getFilteredTodos;