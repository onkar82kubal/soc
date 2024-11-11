import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import axiosInstance from "../../interceptor/axiosInstance";
import { CSVLink } from "react-csv";

interface DataType {
  title: string;
  description: string;
  device_type: string;
  society_id: string;
  society_name: string;
  role_id: string;
}

const List = () => {
  const [data, setData] = useState<DataType[]>([]);
  const [filteredData, setFilteredData] = useState<DataType[]>([]);
  const [searchText, setSearchText] = useState<string>("");
  const fetchData = async (): Promise<DataType[]> => {
    const response = await axiosInstance.get("/role"); // Replace with your actual API
    const data = response["data"]["data"];
    return data;
  };

  const columns = [
    {
      name: "Title",
      selector: (row: DataType) => row.title,
      sortable: true,
    },
    {
      name: "Description",
      selector: (row: DataType) => row.description,
      sortable: true,
    },
    {
      name: "Device",
      selector: (row: DataType) => row.device_type,
      sortable: true,
    },
    {
      name: "Society Name",
      selector: (row: DataType) => row.society_name,
      sortable: false,
    },
    {
      name: "Actions",
      button: true,
      cell: (row: DataType) => (
        <ul className="dataTableAction">
          <li>
            <i
              className="fa fa-trash"
              aria-hidden="true"
              onClick={() => onDeleteRow(row)}
            ></i>
          </li>
          <li>
            <i
              className="fa fa-edit"
              aria-hidden="true"
              onClick={() => handleEdit(row)}
            ></i>
          </li>
        </ul>
      ),
    },
  ];
  const handleEdit = (row: DataType) => {
    console.log(row);
  };
  const onDeleteRow = (oldData: DataType) => {
    axiosInstance
      .delete("/role/" + oldData.role_id)
      .then((result) => console.log(result["data"]["data"]));
  };
  useEffect(() => {
    const loadData = async () => {
      const apiData = await fetchData();
      setData(apiData);
      setFilteredData(apiData);
    };

    loadData();
  }, []);

  useEffect(() => {
    const filter = data.filter((row) => {
      return (
        row.title.toString().toLowerCase().includes(searchText.toLowerCase()) ||
        row.description
          .toString()
          .toLowerCase()
          .includes(searchText.toLowerCase()) ||
        row.device_type
          .toString()
          .toLowerCase()
          .includes(searchText.toLowerCase())
        //   ||
        // row.society_name
        //   .toString()
        //   .toLowerCase()
        //   .includes(searchText.toLowerCase())
      );
    });
    setFilteredData(filter);
  }, [searchText, data]);

  return (
    <>
      <div className="card">
        <div className="header">
          <h2>Role List</h2>
        </div>
        <div className="body">
          <div className="d-flex justify-content-between">
            <div>
              <input
                type="search"
                className="form-control-sm border ps-3"
                placeholder="Search"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
              />
            </div>
            <div>
              <CSVLink
                data={filteredData}
                filename="roleList.csv"
                className="btn btn-primary"
                style={{
                  padding: "6px",
                  backgroundColor: "#007bff",
                  color: "#fff",
                  textDecoration: "none",
                }}
              >
                Export to CSV
              </CSVLink>
            </div>
          </div>

          <DataTable
            columns={columns}
            data={filteredData}
            fixedHeader
            pagination
          />
        </div>
      </div>
    </>
  );
};

export default List;
