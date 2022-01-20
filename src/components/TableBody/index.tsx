import React from "react";
import {RootState, store} from "../../redux/store";
import { connect, useSelector,Provider } from "react-redux";

interface Props {
    // bodyDataArr:{"id":string,"createdAt":string,"name":string,"avatar":string}[]
}

const TableBody = (props: Props) => {

  const {tableData:{filterData}} = store.getState();
 
  return (
    <div className="table-body">
    {filterData.map((bodyData:any,bodyIndex:number)=>{

        return(
            <div key={bodyIndex} className="table-row">
            <div className="table-cell cell-2">{bodyData.id}</div>
            <div className="table-cell cell-1">{bodyData.createdAt}</div>
            <div className="table-cell cell-1">{bodyData.name}</div>
            <div className="table-cell cell-1"><div className="avatarBlock"><img src={bodyData.avatar} alt={bodyData.name}></img>{bodyData.avatar}</div></div>
            </div>
        )

})}
   </div>
  );
};

const mapStateToProps = (state: RootState) => {
  const rootState = state;
return {rootState} };

export default connect(mapStateToProps)(TableBody);

