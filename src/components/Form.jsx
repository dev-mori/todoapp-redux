import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { add_todo } from "../reducks/todos/action";
import shortid from "shortid";

export default function Form() {
  const { register, handleSubmit, errors, reset } = useForm();
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    data.id = shortid.generate();
    dispatch(add_todo(data));
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input name="content" ref={register({ required: true })} />
      {errors.exampleRequired && <span>This field is required</span>}
      <input type="submit" />
    </form>
  );
}
