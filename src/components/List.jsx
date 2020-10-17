import React from "react";
import Item from "./Item";
import { useSelector } from "react-redux";

export default function List() {
  const todos = useSelector((state) => state.todos);

  return (
    <ul>
      {todos.map((todo) => {
        return <Item todo={todo} id={todo.id}/>;
      })}
    </ul>
  );
}
