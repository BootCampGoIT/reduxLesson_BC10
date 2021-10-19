import {
  configureStore,
  combineReducers,
  createReducer,
  createAction,
} from "@reduxjs/toolkit";
import { authReducer } from "./auth/authReducers";
import { tasksReducer } from "./tasks/tasksReducers";

// ==================
export const increment = createAction("counter/increment");

const counterReducer = createReducer(0, {
  [increment]: (state) => (state += 1),
});
// ====================

const rootReducer = combineReducers({
  tasks: tasksReducer,
  authorization: authReducer,
  counter: counterReducer,
});

const store = configureStore({
  reducer: rootReducer,
  // devTools: process.env.NODE_ENV !== "production",
});
export default store;

// =============== redux ===============

// import { combineReducers, createStore, applyMiddleware } from "redux";
// import { composeWithDevTools } from "redux-devtools-extension";
// import thunk from "redux-thunk";
// import { tasksReducer } from "./tasks/tasksReducers";

// const customMiddleware = (store) => (next) => (action) => {
//   console.log(action.constructor.name);
//   next(action);
// };
// const rootReducer = combineReducers({
//   tasks: tasksReducer,
// });

// const store = createStore(
//   rootReducer,
//   composeWithDevTools(applyMiddleware(customMiddleware, thunk))
// );

// export default store;

// ===================================
// const action = {
//   type: "dfghjk",
//   payload: [{ name: "alex" }],
// };

// const action = (task) => {
//   axios.post("https://fghj", task)
// }

// console.log(action.constructor.name); //Object
// console.log(action.constructor.name); //Function

// const getData = async () => {
//   console.log("1");
//   const get = () => {
//     console.log("2");
//   };
//   await get();
//   console.log("3");
// };

// console.log("1");
// setTimeout(() => {
//   console.log("3");
// }, 300);
// console.log("2");

// =======================
// const middleware1 = (store) => (next) => (action) => {
//   console.log(action);
//   if (action.type === "tasks/addTask") {
//     axios.post(
//       `https://schoology-fa20e-default-rtdb.firebaseio.com/views.json`,
//       {
//         id: action.payload.id,
//       }
//     );
//   }
//   return next(action);
// };

// const middleware2 = (store) => (next) => (action) => {
//   if (action.type === "tasks/removeTask") {
//     return;
//   }
//   return next(action);
// };

// const thunk = (store) => (next) => (action) => {
//   if (action.type.constructor.name === "Function") {
//     console.log("async");
//     const request = async () => {
//       try {
//         await axios.post(
//           `https://schoology-fa20e-default-rtdb.firebaseio.com/views.json`,
//           {
//             id: action.payload.id,
//           }
//         );
//         return next(action);
//       } catch (error) {
//         store.dispatch({
//           type: "tasks/setError",
//           payload: {
//             error: "Something went wrong",
//           },
//         });
//       }
//     };
//     request();
//   } else {
//     return next(action);
//   }
// };
