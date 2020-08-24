import React from "react";
import { getTodos } from "../api/fetchTodos";
import { Link } from "react-router-dom";
import { useQuery } from "react-query";
import TodoListItem from "../components/TodoListItem";
import styled from "@emotion/styled";

export default function Home() {
  const { data: todos, loading, error } = useQuery("todos", getTodos);

  const Container = styled.div`
    background-color: #fafafa;
    width: 100vw;
    display: flex;
    flex-direction: column;
  `;

  const Header = styled.h2`
    font-size: 1.5rem;
    color: black;
    text-align: center;
    font-style: italic;
  `;

  return (
    <Container>
      <Header>Your wedding plan</Header>
      <Link to="/add">Add new Todo</Link>
      {error && <p>Error</p>}
      {loading && <div>Loading...</div>}
      {todos?.map((todo) => (
        <TodoListItem key={todo.id}>
          {todo.title}, {todo.prio}
        </TodoListItem>
      ))}
    </Container>
  );
}
