import React from "react";
import { useState, useEffect } from "react";
import { fetchTodos } from "../api/fetchTodos";
import { Link } from "react-router-dom";

export default function Home() {
  const [todos, setTodos] = useState(null);

  useEffect(() => {
    const doFetch = async () => {
      const todos = await fetchTodos();
      setTodos(todos);
    };
    doFetch();
  }, []);

  return (
    <div className="App">
      <Link to="/add">New Todo</Link>
      {todos?.map((todo) => (
        <div key={todo.id}>
          {todo.todo}, {todo.prio},{todo.completed}
        </div>
      ))}
    </div>
  );
}
