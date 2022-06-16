import { days, months } from "src/constant/dateInfo";

export const formatDate = () => {
    const date = new Date();
    const currentDate = {
        date: date.getDate(),
        month: months[date.getMonth()],
        day: days[date.getDay()],
        year: date.getFullYear(),
    }

    return currentDate;
}