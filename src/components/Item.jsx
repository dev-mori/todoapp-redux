import React from "react";
import { useDispatch } from "react-redux";
import { delete_todo } from "../reducks/todos/action";

export default function Item({ todo, id }) {
  const dispatch = useDispatch();
  const handle_delete = () => {
    dispatch(delete_todo(id));
  };
  // const handle_hide = () => {
  //   dispatch(hide_todo(id));
  // };
  return (
    <li>
      <span>{todo.content}</span>
      {/* <button onClick={handle_hide}>完了</button> */}
      <button onClick={handle_delete}>削除</button>
    </li>
  );
}
