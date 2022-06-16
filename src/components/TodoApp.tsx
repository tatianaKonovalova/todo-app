import { FC, useEffect, useState } from "react";

import { ITodo } from "src/types/todoType";
import { useLocalStorage } from "src/hooks/useLocalStorage";

import Header from "src/components/Header/Header";
import FiltersList from "src/components/Filters/FiltersList";
import TodoList from "src/components/TodoList/TodoList";
import AddTaskBtn from "src/components/AddTaskBtn/AddTaskBtn";

import styles from "src/components/TodoApp.module.css";

export const TodoApp: FC = () => {

  const { todosList, setItemsToLocalStorage, categoriesList } = useLocalStorage();

  const [todos, setTodos] = useState<ITodo[]>(todosList);
  const [filter, setFilter] = useState("");
  const [categories, setCategories] = useState(categoriesList);

  useEffect(() => {
    setItemsToLocalStorage("todos", todos);
    setItemsToLocalStorage("categories", categories)
  }, [todos, categories]);

  const addNewTodoItem = (todoText: string, category: string) => {
    setTodos((todos) => [
      ...todos,
      {
        id: Date.now(),
        text: todoText,
        category: category,
        isDone: false,
        isImportant: false
      }
    ]
    )
  }

  const updateTodoItem = (id: number, propertyType: string) => {
    setTodos((todos) => (
      todos.map(todo => {
        if (todo.id === id) {
          return { ...todo, [propertyType]: !todo[propertyType] };
        }
        return todo;
      })
    ));
  }

  const deleteTodoItem = (id: number) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== id))
  }

  const createCategory = (category: string) => {
    setCategories((categories) => [
      ...categories,
      category
    ])
  }

  const filterByCategory = (category: string) => {
    setFilter(category);
  }

  return (
    <div className={styles["TodoApp-Container"]}>
      <Header />
      <hr />
      <FiltersList
        todos={todos}
        categories={categories}
        filterByCategory={filterByCategory}
      />
      <TodoList
        todos={todos}
        filter={filter}
        updateTodoItem={updateTodoItem}
        deleteTodoItem={deleteTodoItem}
      />
      <div className={styles["TodoApp-Footer"]}>
        <AddTaskBtn
          categories={categories}
          addNewTodoItem={addNewTodoItem}
          createCategory={createCategory}
        />
      </div>
    </div>
  );
}
