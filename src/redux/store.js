import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { authReducer } from "./auth/authReducers";
import { tasksReducer } from "./tasks/tasksReducers";
import storage from "redux-persist/lib/storage";

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

const authConfig = {
  key: "user",
  storage: storage,
  whitelist: ["user", "tokens"],
};
// const tasksConfig = {
//   key: "tasks",
//   storage: storage,
//   // whitelist: ["list"],
// };

const rootReducer = combineReducers({
  // tasks: persistReducer(tasksConfig, tasksReducer),
  tasks: tasksReducer,
  authorization: persistReducer(authConfig, authReducer),
});

const store = configureStore({
  reducer: rootReducer,
  // devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
export default store;
