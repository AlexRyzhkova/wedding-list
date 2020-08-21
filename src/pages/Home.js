import React from "react";
import { useState, useEffect } from "react";
import { getTodos } from "../api/fetchTodos";
import { Link } from "react-router-dom";

export default function Home() {
  const [todos, setTodos] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const doFetch = async () => {
      try {
        const todos = await getTodos();
        setTodos(todos);
        setError(false);
        setLoading(true);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    doFetch();
  }, []);

  return (
    <div className="App">
      <Link to="/add">New Todo</Link>
      {error && <p>Error</p>}
      {loading && <div>Loading...</div>}
      {todos?.map((todo) => (
        <div key={todo.id}>
          {todo.titel}, {todo.prio},{todo.completed}
        </div>
      ))}
    </div>
  );
}
