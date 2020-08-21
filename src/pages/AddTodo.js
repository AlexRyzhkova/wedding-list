import React from "react";
import { Link } from "react-router-dom";

export default function AddTodo() {
  return (
    <div>
      <Link to="/">Home</Link>
      <input type="text" placeholder="write hier" />
    </div>
  );
}
