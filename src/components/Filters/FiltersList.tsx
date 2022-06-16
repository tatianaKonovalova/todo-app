import { FC } from "react";

import { ITodo } from "src/types/todoType";
import { getFiltersData } from "src/helpers/getFiltersData";

import FiltersListItem from "src/components/Filters/FiltersListItem/FiltersListItem";

import styles from 'src/components/Filters/FiltersList.module.css';

interface Props {
    todos: ITodo[];
    categories: string[];
    filterByCategory: (category: string) => void;
}

const FiltersList: FC<Props> = ({ todos, filterByCategory, categories }) => {

    const { categoryTotal, getCompleted } = getFiltersData(todos);

    return (
        <div className={styles["FiltersList-Wrapper"]}>
            <ul className={styles["FiltersList"]}>
                {categories.map(category => {
                    const completed = getCompleted(category)
                    return <FiltersListItem
                        key={category}
                        total={categoryTotal[category]}
                        category={category}
                        filterByCategory={() => filterByCategory(category)}
                        completed={completed}
                    />
                })}
            </ul>
            <FiltersListItem
                category="total"
                total={todos.length}
                completed={todos.filter(todo => todo.isDone === true).length}
                filterByCategory={() => filterByCategory("total")}
            />
        </div>
    )
}

export default FiltersList;
