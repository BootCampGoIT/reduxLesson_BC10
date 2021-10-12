import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { INCREMENTTYPE } from "./counter/actions";
import { tasksReducer } from "./tasks/tasksReducers";

const counterReducer = (state = { count: 0, name: "Alex" }, action) => {
  switch (action.type) {
    case INCREMENTTYPE:
      return { ...state, count: state.count + action.payload }; //;
    case "counter/decrement":
      return { ...state, count: state.count - action.payload }; //;

    default:
      return state;
  }
};

const rootReducer = combineReducers({
  counter: counterReducer,
  tasks: tasksReducer,
});

const store = configureStore({
  reducer: rootReducer,
  // devTools: process.env.NODE_ENV !== "production",
});
export default store;

// =============== redux ===============

// import { combineReducers, createStore } from "redux";
// import { composeWithDevTools } from "redux-devtools-extension";
// import { INCREMENTTYPE } from "./counter/actions";
// import { tasksReducer } from "./tasks/tasksReducers";

// // Используем редюсер-болванку
// const counterReducer = (state = { count: 0, name: "Alex" }, action) => {
//   switch (action.type) {
//     case INCREMENTTYPE:
//       return { ...state, count: state.count + action.payload }; //;
//     case "counter/decrement":
//       return { ...state, count: state.count - action.payload }; //;

//     default:
//       return state;
//   }
// };

// const rootReducer = combineReducers({
//   counter: counterReducer,
//   tasks: tasksReducer,
// });

// const store = createStore(rootReducer, composeWithDevTools());

// export default store;
