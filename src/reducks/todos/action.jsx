export const ADD_TODO = "ADD_TODO";
export const add_todo = (todo) => {
  return {
    type: "ADD_TODO",
    payload: todo,
  };
};

export const DELETE_TODO = "DELETE_TODO";
export const delete_todo = (id) => {
  return {
    type: "DELETE_TODO",
    payload: id,
  };
};

export const HIDE_TODO = "HIDE_TODO";
export const hide_todo = (id) => {
  return {
    type: "HIDE_TODO",
    payload: id,
  };
};
