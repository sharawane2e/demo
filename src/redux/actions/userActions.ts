import { createAction } from "@reduxjs/toolkit";
import { IUserState } from "../reducers/userReducer";

export const setUserName = createAction<IUserState>("SET_USER_STATE");
