import { createReducer } from "@reduxjs/toolkit";
import { actions } from "react-table";
import { addTableData, setFilter,setFilterData } from "../actions/userTableActions";



export interface IUserTable {
  search: string;
  data:{"id":string,"createdAt":string,"name":string,"avatar":string}[]|any,
  filterData:{"id":string,"createdAt":string,"name":string,"avatar":string}[]|any,
}

const initialState: IUserTable = {
  search:"",
  data:[],
  filterData:[]
  
};

const userTableReducer = createReducer(initialState, (builder) => {
  builder.addCase(addTableData, (state, action) => ({
    ...state,
    data: action.payload,
    filterData:action.payload
  }));
  builder.addCase(setFilter,(state,action)=>({
    ...state,
    search:action.payload
  }));
  builder.addCase(setFilterData,(state,action)=>({
    ...state,
    filterData:action.payload
  }))
});

export default userTableReducer;
