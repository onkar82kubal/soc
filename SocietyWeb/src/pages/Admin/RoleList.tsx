import React from "react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { AgGridReact } from "ag-grid-react";
import { useEffect, useState } from "react";
import { ColDef } from "ag-grid-community";
import axiosInstance from "../../interceptor/axiosInstance";
import jsPDF from "jspdf";
import "jspdf-autotable";

export interface UserInterface {
  role_id: string;
  society_id: string;
  society_name: string;
  description: string;
  device_type: string;
  title: string;
  actions: string;
}

const RoleList = () => {
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
                  onClick={() => onEditRow(rowData.data.role_id)}
                ></i>
              </li>
            </ul>
          </>
        );
      },
    },
  ]);
  const onDeleteRow = (oldData: any) => {
    axiosInstance
      .delete("/role/" + oldData)
      .then((result) => console.log(result["data"]["data"]));
  };

  const onEditRow = (oldData: any) => {
    axiosInstance
      .get("/role/" + oldData)
      .then((result) => console.log(result["data"]["data"]));
  };

  useEffect(() => {
    axiosInstance
      .get("/role")
      .then((result) => result["data"]["data"])
      .then((rowData) => setRowData(rowData));
  }, []);

  const onBtnExport = () => {
    const gridOptions = gridRef.current?.api;
    gridOptions?.exportDataAsCsv();
  };
  const gridRef = React.useRef<AgGridReact>(null);

  const onExportPdf = () => {
    const doc = new jsPDF();
    const gridData = gridRef.current?.api.getDisplayedRowAtIndex(0);
    const columnHeaders = colDefs.map((col) => col.headerName);

    doc.autoTable(
      columnHeaders,
      rowData.map((row) => Object.values(row)),
      { startY: 20 }
    );

    doc.save("ag-grid-export.pdf");
  };

  return (
    <>
      <div className="card">
        <div className="header">
          <h2>Role List</h2>
        </div>
        <div className="body">
          <button onClick={onBtnExport}>Export to CSV</button>
          <button onClick={onExportPdf}>Export to PDF</button>
          <div className="ag-theme-quartz">
            <AgGridReact
              ref={gridRef}
              rowData={rowData}
              columnDefs={colDefs}
              pagination={true}
              paginationPageSize={5}
              paginationPageSizeSelector={[5, 10, 20]}
              domLayout="autoHeight"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default RoleList;
