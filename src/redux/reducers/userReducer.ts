import { createReducer } from "@reduxjs/toolkit";
import { setUserName } from "../actions/userActions";

export interface IUserState {
  name: any;
}

const initialState: IUserState = {
  name: "",
};

const userReducer = createReducer(initialState, (builder) => {
  builder.addCase(setUserName, (state, action) => ({
    ...state,
    name: action.payload,
  }));
});

export default userReducer;
