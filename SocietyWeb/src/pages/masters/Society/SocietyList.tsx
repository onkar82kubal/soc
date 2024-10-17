import DataTable from "react-data-table-component";
import React, { useState, useEffect } from "react";
import axiosInstance from '../../../interceptor/axiosInstance';

const SocietyList = () => {
  const  perPage = 5;
    const columns = [
        {
          name: "Society Name",
          selector: (row) => row.society_name,
          sortable: true,
        },
        {
          name: "Address",
          selector: (row) => row.address,
          sortable: true,
        },
        {
          name: "Contact",
          selector: (row) => row.contact,
          sortable: true,
        },
        {
          name: "email",
          selector: (row) => row.email,
          sortable: true,
        }

      ];
  
  // Function to fetch data using Axios
  const fetchData = async () => {
    try {
      const response = await axiosInstance.get('/society')
      setData(response.data.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  // Call fetchData on component mount
  useEffect(() => {
    fetchData();
  }, []);

    
    
      const rows = [
        {
          personID: 1,
          fullName: "Kate Shein",
          height: "1.79m",
          eyeColor: "blue",
        }
      ];
    
      const [data, setData] = useState(rows);
    
      // Handle Search is the same as Handle Filter
      const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        let searchValue: boolean;
        let personIDValue: boolean;
        let fullNameValue: boolean;
        let heightValue: boolean;
        let eyeColorValue: boolean;
    
        const newRows = rows.filter((row) => {
          personIDValue = row.personID
            .toString()
            .toLowerCase()
            .includes(e.target.value.toLowerCase());
          fullNameValue = row.fullName
            .toLowerCase()
            .includes(e.target.value.toLowerCase());
          heightValue = row.height
            .toLowerCase()
            .includes(e.target.value.toLowerCase());
          eyeColorValue = row.eyeColor
            .toLowerCase()
            .includes(e.target.value.toLowerCase());
    
          if (personIDValue) {
            searchValue = personIDValue;
          } else if (fullNameValue) {
            searchValue = fullNameValue;
          } else if (heightValue) {
            searchValue = heightValue;
          } else {
            searchValue = eyeColorValue;
          }
    
          return searchValue;
        });
    
        setData(newRows);
      };


  return (
    <>
    <div className="card">
        <div className="header">
            <h2>Society List</h2>
        </div>
        <div className="body">
            <div className="input-group">
                <input
                    type="search"
                    className="form-control-sm border ps-3"
                    placeholder="Search"
                    onChange={handleSearch}
                    />
            </div>
            <DataTable
                columns={columns}
                data={data}
                fixedHeader
                paginationPerPage={perPage}
                paginationRowsPerPageOptions={[5,10,50,100]}
                noDataComponent={
                            <div className="no-datatable alert alert-warning">
                                There is no Items to show.    
                            </div>
                        }
                // title="React-Data-Table-Component Tutorial."
                pagination
                // selectableRows
            />
          </div>
    </div>
    </>
  )
}

export default SocietyList