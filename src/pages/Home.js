import React from "react";
import { getTodos } from "../api/fetchTodos";
import { Link } from "react-router-dom";
import { useQuery } from "react-query";

export default function Home() {
  const { data: todos, loading, error } = useQuery("todos", getTodos);

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
