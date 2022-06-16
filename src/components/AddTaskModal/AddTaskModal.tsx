import { Dispatch, FC, SetStateAction, useState } from 'react';
import CreatableSelect from 'react-select/creatable';

import getCategoriesListForSelect from 'src/helpers/getCategoriesListForSelect';

import styles from 'src/components/AddTaskModal/AddTaskModal.module.css';

interface Props {
    categories: string[];
    setIsModalOpen: Dispatch<SetStateAction<boolean>>;
    createCategory: (category: string) => void;
    addNewTodoItem: (textTodo: string, category: string) => void;
}

const AddTaskModal: FC<Props> = ({ categories, addNewTodoItem, createCategory, setIsModalOpen }) => {

    const categoriesList = getCategoriesListForSelect(categories);

    const [inputValue, setInputValue] = useState('');
    const [selectOptions, setSelectOptions] = useState(categoriesList);
    const [selectedValue, setSelectedValue] = useState("");

    const addNewTodo = () => {
        if (!inputValue || !selectedValue) {
            return;
        }
        addNewTodoItem(inputValue, selectedValue);
        setIsModalOpen(false);
    }

    const createNewCategory = (selectValue: string) => {
        const newCategory = { value: selectValue.toLowerCase(), label: selectValue };
        setSelectOptions([...selectOptions, newCategory]);
        createCategory(selectValue.toLowerCase());
    }

    return (
        <>
            <div className={styles["AddTaskModal-Backdrop"]} onClick={() => setIsModalOpen(false)}></div>
            <div className={styles["AddTaskModal-Wrapper"]}>
                <input
                    type="text"
                    placeholder="Add new task..."
                    className={styles["AddTaskModal-Input"]}
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                />
                <CreatableSelect
                    className={styles["AddTaskModal-Select"]}
                    onChange={(value) => { setSelectedValue(value.label) }}
                    options={selectOptions}
                    placeholder="Select or type new category..."
                    onCreateOption={createNewCategory}
                />
                <button
                    className={styles["AddTaskModal-Button"]}
                    onClick={addNewTodo}
                >
                    Add New Todo
                </button>
            </div>
        </>
    )
}

export default AddTaskModal;
