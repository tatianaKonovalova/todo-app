import { FC } from "react";
import clsx from "clsx";

import { ITodo } from 'src/types/todoType';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faTrashCan } from '@fortawesome/free-regular-svg-icons';

import styles from 'src/components/TodoItem/TodoItem.module.css';

interface Props {
    todo: ITodo;
    deleteTodoItem: () => void;
    updateTodoItem: (id: number, propertyType: string) => void;
}

const TodoItem: FC<Props> = ({ todo, updateTodoItem, deleteTodoItem }) => {

    const { id, text, category, isImportant, isDone } = todo;

    const markAsImportant = (e) => {
        e.stopPropagation();
        updateTodoItem(todo.id, "isImportant")
    }

    return (
        <li className={styles["TodoItem-Wrapper"]} onClick={() => updateTodoItem(id, "isDone")}>
            <div className={styles["TodoItem-TextBlock"]}>
                <div
                    title={isImportant ? "I'm important!" : undefined}
                    className={clsx(styles["TodoItem-TextBlock_Text"], isDone && styles["TodoItem-Done"])}
                >
                    <div>{text}</div>
                    {isImportant && <FontAwesomeIcon icon={faStar} />}
                </div>
                <div className={styles["TodoItem-TextBlock_Category"]}>{category}</div>
            </div>
            <div className={styles["TodoItem-IconBlock"]}>
                <span className={styles["TodoItem-IconBlock_Icon"]}>
                    <FontAwesomeIcon icon={faStar} onClick={(e) => markAsImportant(e)} />
                </span>
                <span className={styles["TodoItem-IconBlock_Icon"]}>
                    <FontAwesomeIcon icon={faTrashCan} onClick={deleteTodoItem} />
                </span>
            </div>
        </li>
    )
}

export default TodoItem;
