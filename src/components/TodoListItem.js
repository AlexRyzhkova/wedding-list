import React from "react";
import styled from "@emotion/styled";
import { deleteTodo } from "../api/fetchTodos";

const Container = styled.div`
  background: ${(props) => (props.complete ? "#d6eadf" : "#eac4d5")};
  color: ${(props) => (props.complete ? "grey" : "#030303")};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 10px;
  margin: 5px;
  border-radius: 10px;
  font-size: 1.5em;
`;
const DeleteButton = styled.button`
  border-radius: 20px;
  border: none;
  outline: none;
  background: none;
  align-self: flex-end;
`;

const CompleteButton = styled.button`
  border-radius: 10px;
  font-size: 1rem;
  background-color: #d8f3dc;
  outline: none;
  border: none;
  order: 1;
`;

export default function TodoListItem({ children, todoId }) {
  const [complete, setComplete] = React.useState();
  const [deleteId, setDeleteId] = React.useState();

  function completeTodo() {
    setComplete((prev) => !prev);
  }
  async function handleDeleteTodo(event) {
    event.preventDefault();
    // const todo = { id };
    await deleteTodo(todoId);
    setDeleteId(true);
  }

  return (
    <Container complete={complete}>
      <CompleteButton onClick={completeTodo}>  Done</CompleteButton> {children}
      <DeleteButton onClick={handleDeleteTodo}>❌</DeleteButton>
    </Container>
  );
}
