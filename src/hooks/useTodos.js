import { useState, useEffect } from "react";
import { saveTodo, deleteTodo } from "../services/fakeApi";

export default function useTodos() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const data = localStorage.getItem("todos");
    if (data) setTodos(JSON.parse(data));
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = async (text) => {
    const newTodo = {
      id: Date.now(),
      text,
      completed: false
    };

    await saveTodo(newTodo);
    setTodos(prev => [...prev, newTodo]);
  };

  const toggleTodo = (id) => {
    setTodos(prev =>
      prev.map(t =>
        t.id === id
          ? { ...t, completed: !t.completed }
          : t
      )
    );
  };

  const removeTodo = async (id) => {
    await deleteTodo(id);
    setTodos(prev => prev.filter(t => t.id !== id));
  };

  return { todos, addTodo, toggleTodo, removeTodo };
}
