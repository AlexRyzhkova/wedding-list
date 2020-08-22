import React from "react";
import styled from "@emotion/styled";

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
  const [complete, setComplete] = React.useState();
  function completeTodo() {
    setComplete((prev) => !prev);
  }

  return (
    <Container complete={complete}>
      <CompleteButton onClick={completeTodo}>  Done</CompleteButton> {children}
      <DeleteButton>❌</DeleteButton>
    </Container>
  );
}
