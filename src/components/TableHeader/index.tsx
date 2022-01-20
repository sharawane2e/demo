import React from "react";

interface Props {}

const TableHeader = (props: Props) => {
  
  return (
    <div className="tabel-header">
      <div  className="table-row">
          <div className="table-cell cell-2">ID</div>
          <div className="table-cell cell-1">Created At</div>
          <div className="table-cell cell-1">name</div>
          <div className="table-cell cell-1">avatar</div>
      </div>
    </div>
  );
};

export default TableHeader;
