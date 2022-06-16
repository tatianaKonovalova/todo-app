import { FC } from "react";
import clsx from "clsx";

import styles from 'src/components/Filters/FiltersListItem/FiltersListItem.module.css';

interface Props {
    category: string;
    completed: number;
    total: number;
    filterByCategory: () => void;
}

const FiltersListItem: FC<Props> = ({ category, total = 0, filterByCategory, completed }) => {

    const width = (completed / total) * 100;

    return (
        <li className={styles["FiltersList-Item"]} onClick={filterByCategory}>
            <div title={category} className={clsx(category === "total" && styles["Bold"])}>{category}</div>
            <div className={styles["FiltersListItem-ProgressBar"]}>
                <div className={styles["FiltersListItem-ProgressBar_Progress"]} style={total ? { width: `${width}%` } : { width: 0 }}></div>
            </div>
            <div>{completed}/{total}</div>
        </li>
    )
}

export default FiltersListItem;
