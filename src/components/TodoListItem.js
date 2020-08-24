import React from "react";
import styled from "@emotion/styled";

const Container = styled.div`
  /* background: ${(props) => (props.complete ? "#ffedd2" : "#edd2ff")}; */
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
  color: ;
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
