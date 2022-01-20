import React, { useEffect, useState } from "react";
import DataTable, { TableColumn } from 'react-data-table-component';
import { USER_DATA } from "../../config/ApiUrl";
import ApiRequest from "../../utils/Apirequest";
import userData from "../../mock/usersData";
import TableHeader from "../TableHeader";
import TableBody from "../TableBody";
import {RootState, store} from "../../redux/store";
import { addTableData, setFilter, setFilterData } from "../../redux/actions/userTableActions";
import _ from 'lodash';
import { connect } from "react-redux";

interface Props {}

const TableList = (props: Props) => {

  const {dispatch} = store;

  const {tableData:{data}} = store.getState();

  useEffect(() => {
    fetchData();
  },[]);

  const fetchData = async()=>{
    const response = await ApiRequest(USER_DATA);
    dispatch(addTableData(response));
  }

  const handleFilterChange = (e:any) =>{
    const value = e.target.value;
    dispatch(setFilter(value));
    const lowerCaseValue = value.toLowerCase();
    const newData:any = _.filter(data,function (o){return o.id.toLowerCase().indexOf(lowerCaseValue) !== -1||o.createdAt.toLowerCase().indexOf(lowerCaseValue) !== -1||o.name.toLowerCase().indexOf(lowerCaseValue) !== -1||o.avatar.toLowerCase().indexOf(lowerCaseValue) !== -1});
    dispatch(setFilterData(newData))
  }


  return <div className="detail-block">
    <div className="searchBlock">
      <input type="text" onChange={handleFilterChange} placeholder="Search"/>
    </div>
    <TableHeader />
    {/* <TableBody bodyDataArr={userData} /> */}
    <TableBody />
  </div>
};

const mapStateToProps = (state: RootState) => {
  const rootState = state;
return {rootState} };

export default connect(mapStateToProps)(TableList);
