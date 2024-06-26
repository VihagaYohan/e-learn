import React, { Component } from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

type tableModel = {
  id: number;
  studentName: string;
  course: string;
};

const columns: GridColDef[] = [
  {
    field: "id",
    headerName: "ID",
    width: 70,
  },
  { field: "studentName", headerName: "Student Name", width: 150 },
  { field: "course", headerName: "Course Name", width: 250 },
];

const rows: tableModel[] = [
  { id: 1, studentName: "John Doe", course: "Web application development" },
  { id: 2, studentName: "Sam Smith", course: "Mobile application development" },
  { id: 3, studentName: "Anne Teressa", course: "Game development with Unity" },
];

const UITable = () => {
  return (
    <div style={{ width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
};

export default UITable;
