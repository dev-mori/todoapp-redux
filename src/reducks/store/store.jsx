import { createStore as reduxCreateSrore, combineReducers } from "redux";
import { TodoReducer } from "../todos/reducers";

export default function createStore() {
  return reduxCreateSrore(
    combineReducers({
      todos: TodoReducer,
    })
  );
}
