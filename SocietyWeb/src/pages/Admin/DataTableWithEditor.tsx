import React, { useState } from "react";
import DataTable from "react-data-table-component";

// Define the type for the data
interface DataType {
  id: number;
  name: string;
  age: number;
}

// Column interface
interface ColumnType {
  name: string;
  selector: string;
  sortable: boolean;
  cell?: (row: DataType) => React.ReactNode;
}

const DataTableWithEditor = () => {
  // Sample data
  const initialData: DataType[] = [
    { id: 1, name: "John Doe", age: 28 },
    { id: 2, name: "Jane Smith", age: 34 },
    { id: 3, name: "Alice Johnson", age: 23 },
    { id: 4, name: "John Doe4", age: 28 },
    { id: 5, name: "Jane Smith5", age: 34 },
    { id: 6, name: "Alice Johnson6", age: 23 },
    { id: 7, name: "John Doe7", age: 28 },
    { id: 8, name: "Jane Smith8", age: 34 },
    { id: 9, name: "Alice Johnson9", age: 23 },
    { id: 10, name: "John Doe10", age: 28 },
    { id: 11, name: "Jane Smith11", age: 34 },
    { id: 12, name: "Alice Johnson12", age: 23 },
  ];

  const [data, setData] = useState<DataType[]>(initialData);
  const [editingRow, setEditingRow] = useState<DataType | null>(null);
  const [formData, setFormData] = useState<DataType | null>(null);

  // Table columns
  const columns: ColumnType[] = [
    {
      name: "Name",
      selector: "name",
      sortable: true,
      cell: (row: DataType) => row.name,
    },
    {
      name: "Age",
      selector: "age",
      sortable: true,
      cell: (row: DataType) => row.age,
    },
    {
      name: "Actions",
      button: true,
      cell: (row: DataType) => (
        <button onClick={() => handleEdit(row)}>Edit</button>
      ),
    },
  ];

  // Handle the edit button click
  const handleEdit = (row: DataType) => {
    console.log(row);
    setEditingRow(row);
    setFormData({ ...row });
  };

  // Handle form data changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (formData) {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    }
  };

  // Save the edited data
  const handleSave = () => {
    if (formData && editingRow) {
      const updatedData = data.map((item) =>
        item.id === editingRow.id ? { ...item, ...formData } : item
      );
      setData(updatedData);
      setEditingRow(null);
      setFormData(null);
    }
  };

  // Cancel the editing
  const handleCancel = () => {
    setEditingRow(null);
    setFormData(null);
  };

  return (
    <div>
      <DataTable title="User Data" columns={columns} data={data} pagination />
      {editingRow && formData && (
        <div style={{ marginTop: "20px" }}>
          <h3>Edit Row</h3>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
            />
          </label>
          <br />
          <label>
            Age:
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleInputChange}
            />
          </label>
          <br />
          <button onClick={handleSave}>Save</button>
          <button onClick={handleCancel}>Cancel</button>
        </div>
      )}
    </div>
  );
};

export default DataTableWithEditor;
