import React, { useState } from "react";
import { Link } from "react-router-dom";
import { postTodo } from "../api/fetchTodos";
import styled from "@emotion/styled";

const InputField = styled.input`
  display: flex;
  flex-direction: column;
  margin: 10px;
  padding-left: 10px;
`;
export default function AddTodo() {
  const [title, setTitle] = useState("");
  const [prio, setPrio] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleTitleChange(event) {
    setTitle(event.target.value);
  }
  function handlePrioChange(event) {
    setPrio(event.target.value);
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const todo = { title, prio };
    setError(false);
    setLoading(true);

    try {
      await postTodo(todo);
      setTitle("");
      setPrio("");
    } catch (error) {
      console.log(error);
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          ToDo
          <InputField
            type="text"
            value={title}
            onChange={handleTitleChange}
            placeholder="write hier"
          />
        </label>
        <label>
          Prio
          <InputField
            type="text"
            value={prio}
            onChange={handlePrioChange}
            placeholder="write hier"
          />
        </label>
        <input type="submit" value="Add ToDo" disabled={!title || loading} />
      </form>
      {error && <p>ERROR. Please try again.</p>}
      <Link to="/">Home</Link>
    </div>
  );
}
