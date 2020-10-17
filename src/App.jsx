import React from "react";
import List from "./components/List";
import Form from "./components/Form";
import { useSelector } from "react-redux";

export default function App() {
  const todos = useSelector((state) => state.todos);

  console.log(todos);

  return (
    <div>
      <h1>Todo App</h1>
      <Form />
      <List />
    </div>
  );
}
