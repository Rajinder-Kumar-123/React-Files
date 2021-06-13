import React from 'react';
import { DataGrid } from '@material-ui/data-grid';
//import { ReactSortable } from "react-sortablejs";

//Sortable.mount(new MultiDrag(), new Swap());

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'firstName', headerName: 'First name', width: 130 },
  { field: 'lastName', headerName: 'Last name', width: 130 },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 90,
  },
  {
    field: 'name',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: true,
    width: 160,
    valueGetter: (params) =>
      `${params.getValue('firstName') || ''} ${params.getValue('lastName') || ''}`,
  },
];

const rows = [
    { id: 1, name: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, name: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, name: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, name: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, name: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, name: 'Melisandre', firstName: null, age: 150 },
    { id: 7, name: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, name: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, name: 'Roxie', firstName: 'Harvey', age: 65 },
];
const Smile =()=> {
  return (
   
  
     <div style={{ height: 400, width: '100%' }}>
      <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection />
    </div>
  );
}

export default  Smile;
