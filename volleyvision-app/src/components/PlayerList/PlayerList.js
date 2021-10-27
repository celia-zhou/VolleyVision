import React from 'react';
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';

const rows: GridRowsProp = [
  { id: 1, col1: 'Celia Zhou', col2: 'RPM Sand', col3: 'celia.x.zhou@vanderbilt.edu', col4: 'Vanderbilt', col5: '1' },
  { id: 2, col1: 'Katelyn Itano', col2: 'RPM Sand', col3: 'ki123@gmail.com', col4: 'Chaparral', col5: '2' },
  { id: 3, col1: 'Michelle Liu', col2: 'RPM Sand', col3: 'michelle.liu@vanderbilt.edu', col4: 'Vanderbilt', col5: '3' },
  { id: 4, col1: 'Pei Tan', col2: 'RPM Sand', col3: 'pei.tan@vanderbilt.edu', col4: 'Vanderbilt', col5: '4' },
  { id: 5, col1: 'Tony Stark', col2: 'Avengers', col3: 'tony@vanderbilt.edu', col4: 'Vanderbilt', col5: '5' },
  { id: 6, col1: 'Hulk', col2: 'Avengers', col3: 'hulk@vanderbilt.edu', col4: 'Vanderbilt', col5: '6' },
  { id: 7, col1: 'Thor', col2: 'Avengers', col3: 'thor@vanderbilt.edu', col4: 'Vanderbilt', col5: '7' },
  { id: 8, col1: 'Black Widow', col2: 'Avengers', col3: 'widow@vanderbilt.edu', col4: 'Vanderbilt', col5: '8' },
  { id: 9, col1: 'Hawkeye', col2: 'Avengers', col3: 'hawk@vanderbilt.edu', col4: 'Vanderbilt', col5: '9' },
  { id: 10, col1: 'Captain America', col2: 'Avengers', col3: 'cap@vanderbilt.edu', col4: 'Vanderbilt', col5: '10' },
  { id: 11, col1: 'Shang-Chi', col2: 'Avengers', col3: 'shang@vanderbilt.edu', col4: 'Vanderbilt', col5: '11' },
  { id: 12, col1: 'Wanda', col2: 'Avengers', col3: 'wanda@vanderbilt.edu', col4: 'Vanderbilt', col5: '12' },
];

const columns: GridColDef[] = [
  { field: 'col1', headerName: 'Name', width: 300 },
  { field: 'col2', headerName: 'Team', width: 300 },
  { field: 'col3', headerName: 'Email', width: 300 },
  { field: 'col4', headerName: 'School', width: 300 },
  { field: 'col5', headerName: 'Jersey Number', width: 300 },
];

export default function App() {
  return (
    <div style={{ height: 750, width: '100%' }}>
      <DataGrid rows={rows} columns={columns} />
    </div>
  );
}