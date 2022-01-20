import { createAction } from "@reduxjs/toolkit";
import { IUserTable } from "../reducers/userTableReducer";


export const addTableData = createAction<IUserTable>("ADD_TABLE_DATA");
export const setFilter = createAction<string>("SET_FILTER");
export const setFilterData = createAction<IUserTable>("SET_FILTER_DATA");
