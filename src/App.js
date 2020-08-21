import React from "react";
import { useState, useEffect } from "react";
import { fetchTodos } from "./api/fetchTodos";

function App() {
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
      {todos?.map((todo) => (
        <div key={todo.id}>
          {todo.todo}, {todo.prio},{todo.completed}
        </div>
      ))}
    </div>
  );
}

export default App;
