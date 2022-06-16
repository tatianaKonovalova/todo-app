import { FC } from "react";

import { ITodo } from "src/types/todoType";
import getFilteredTodos from "src/helpers/getFilteredTodos";

import TodoItem from "src/components/TodoItem/TodoItem";

import styles from 'src/components/TodoList/TodoList.module.css';

interface Props {
    todos: ITodo[];
    filter: string;
    deleteTodoItem: (id: number) => void;
    updateTodoItem: (id: number, propertyType: string) => void;
}

const TodoList: FC<Props> = ({ todos, filter, updateTodoItem, deleteTodoItem }) => {

    const data = (!filter || filter === "total") ? todos : getFilteredTodos(todos, filter);

    return (
        <ul className={styles["TodoList"]}>
            {todos.length === 0 ? (
                <div>No todos yet. Please start adding new tasks!</div>
            ) : data.length === 0 ? (
                <div>No todos in this category. Please choose another one!</div>
            ) : (
                data.map((todo, i) =>
                    <TodoItem
                        key={i}
                        todo={todo}
                        deleteTodoItem={() => deleteTodoItem(todo.id)}
                        updateTodoItem={updateTodoItem}
                    />
                ))
            }

        </ul>
    )
}

export default TodoList
