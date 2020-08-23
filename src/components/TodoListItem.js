import React from "react";
import styled from "@emotion/styled";
import { deleteTodo } from "../api/fetchTodos";

const Container = styled.div`
  background: ${(props) => (props.complete ? "#ffedd2" : "#edd2ff")};
  color: ${(props) => (props.complete ? "grey" : "#030303")};
  display: flex;
  justify-content: space-between;
  padding: 10px;
  margin: 5px;
  border-radius: 5px;
`;
const DeleteButton = styled.button`
  border-radius: 10px;
  margin: 10px;
  border: none;
`;

const CompleteButton = styled.button`
  border-radius: 10px;
  font-size: 0.7rem;
`;

export default function TodoListItem({ children }) {
  const [complete, setComplete] = React.useState(false);
  //   const [removeTodo, setRemoveTodo] = React.useState(false);
  const [deleteId, setDeleteId] = React.useState(true);

  function handleCompleteTodo(event) {
    setComplete((prev) => !prev);
  }

  async function handleDeleteTodo(event) {
    event.preventDefault();
    const deleteId = { id };
    await deleteTodo(id);
    setDeleteId(true);
    // removeTodo("");
    // setId("");
  }

  return (
    <Container complete={complete}>
      <CompleteButton onClick={handleCompleteTodo}>  Done</CompleteButton> 
      {children}
      <DeleteButton onClick={handleDeleteTodo}>❌</DeleteButton>
    </Container>
  );
}
