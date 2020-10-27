import * as Actions from "./action";
import initialState from "../store/initialState";

export const TodoReducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.ADD_TODO:
      return [...state, action.payload];
    case Actions.DELETE_TODO:
      return state.filter((todo) => todo.id !== action.payload);
    case Actions.HIDE_TODO:
      const todo = state.find(id: id)
      return 
    default:
      return state;
  }
};
