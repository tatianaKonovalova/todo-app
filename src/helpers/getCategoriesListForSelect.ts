const getCategoriesListForSelect = (categories: string[]) => {
    const categoriesList = [];
    categories.forEach((category) => {
        categoriesList.push({ label: category, value: category })
    });
    return categoriesList;
}

export default getCategoriesListForSelect;