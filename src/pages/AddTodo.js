import React, { useState } from "react";
import { Link } from "react-router-dom";
import { postTodo } from "../api/fetchTodos";

export default function AddTodo() {
  const [title, setTitle] = useState("");
  const [prio, setPrio] = useState("");

  function handleTitleChange(event) {
    setTitle(event.target.value);
  }
  function handlePrioChange(event) {
    setPrio(event.target.value);
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const todo = { title, prio };
    await postTodo(todo);
    setTitle("");
    setPrio("");
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          ToDo
          <input
            type="text"
            value={title}
            onChange={handleTitleChange}
            placeholder="write hier"
          />
        </label>
        <label>
          Prio
          <input
            type="text"
            value={prio}
            onChange={handlePrioChange}
            placeholder="write hier"
          />
        </label>
        <input type="submit" value="Add ToDo" />
      </form>
      <Link to="/">Home</Link>
    </div>
  );
}
