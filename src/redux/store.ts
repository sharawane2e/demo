import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/userReducer";
import userTableReducer from "./reducers/userTableReducer";
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension'


export const store = configureStore({
  reducer: {
    user: userReducer,
    tableData:userTableReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(thunkMiddleware),
});

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
