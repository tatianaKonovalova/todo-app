import { FC, useState } from "react";

import AddTaskModal from "src/components/AddTaskModal/AddTaskModal";
import AddTaskModalPortal from "src/components/AddTaskModal/AddTaskModalPortal/AddTaskModalPortal";

import styles from 'src/components/AddTaskBtn/AddTaskBtn.module.css';

interface Props {
    categories: string[];
    createCategory: (category: string) => void;
    addNewTodoItem: (textTodo: string, category: string) => void;
}

const AddTaskBtn: FC<Props> = ({ categories, createCategory, addNewTodoItem }) => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <div className={styles["AddTaskBtn"]} onClick={() => setIsModalOpen(true)}>+</div>
            {isModalOpen && (
                <AddTaskModalPortal>
                    <AddTaskModal
                        setIsModalOpen={setIsModalOpen}
                        categories={categories}
                        addNewTodoItem={addNewTodoItem}
                        createCategory={createCategory}
                    />
                </AddTaskModalPortal>
            )}

        </>
    )
}

export default AddTaskBtn;