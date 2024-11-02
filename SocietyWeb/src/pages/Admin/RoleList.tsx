import React from "react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { AgGridReact } from "ag-grid-react";
import { useEffect, useState } from "react";
import { ColDef } from "ag-grid-community";
import axiosInstance from "../../interceptor/axiosInstance";

export interface UserInterface {
  role_id: string;
  society_id: string;
  society_name: string;
  description: string;
  device_type: string;
  title: string;
  actions: string;
}

const RoleList: React.FC = () => {
  const [rowData, setRowData] = useState<UserInterface[]>([]);
  const [colDefs] = useState<ColDef<UserInterface>[]>([
    { headerName: "Title", field: "title", filter: true },
    { headerName: "Description", field: "description", filter: true },
    { headerName: "Device", field: "device_type", filter: true },
    { headerName: "Society", field: "society_name", filter: true },
    {
      headerName: "Actions",
      cellRenderer: (rowData: any) => {
        return (
          <>
            <ul className="dataTableAction">
              <li>
                <i
                  className="fa fa-trash"
                  aria-hidden="true"
                  onClick={() => onDeleteRow(rowData.data.role_id)}
                ></i>
              </li>
              <li>
                <i
                  className="fa fa-edit"
                  aria-hidden="true"
                  onClick={() => onDeleteRow(rowData.data.role_id)}
                ></i>
              </li>
            </ul>
          </>
        );
      },
    },
  ]);
  const onDeleteRow = (oldData: any) => {
    console.log(oldData);
  };

  useEffect(() => {
    axiosInstance
      .get("/role")
      .then((result) => result["data"]["data"])
      .then((rowData) => setRowData(rowData));
  }, []);

  return (
    <>
      <div className="card">
        <div className="header">
          <h2>Role List</h2>
        </div>
        <div className="body">
          <div className="ag-theme-quartz" style={{ height: 500 }}>
            <AgGridReact
              rowData={rowData}
              columnDefs={colDefs}
              pagination={true}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default RoleList;
