import { FC } from "react";
import { formatDate } from "src/helpers/formatDate";

import styles from 'src/components/Header/Header.module.css';

const Header: FC = () => {

    const { date, month, day, year } = formatDate();

    return (
        <>
            <div className={styles["Date-Wrapper"]}>
                <div className={styles["Date-Wrapper_Date"]}>{date}</div>
                <div className={styles["Date-Wrapper_MonthYear"]}>
                    <div>{day}</div>
                    <div>{month} {year}</div>
                </div>
            </div>
            <small>Success is not final, failure is not fatal. It is the courage to continue that counts.</small>
        </>
    )
}

export default Header;
