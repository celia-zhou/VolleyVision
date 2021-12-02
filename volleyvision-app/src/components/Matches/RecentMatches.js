import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { getAuth } from "firebase/auth";

const columns = [
  { id: 'opponent', label: 'Opponent', minWidth: 170 },
  { id: 'date', label: 'Date', minWidth: 100 },
  { id: 'partner', label: 'Partner', minWidth: 170 },
  { id: 'location', label: 'Location', minWidth: 80 },
  {
    id: 'score',
    label: 'Score',
    minWidth: 100,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'result',
    label: 'Result',
    minWidth: 100,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
];

function createData(opponent, date, location, score, result) {
  return { opponent, date, location, score, result };
}

// const rows = [
//   createData('UCLA', 'Oct 8, 2021', 'Nashville, TN', '2-1', 'WIN'),
//   createData('Duke', 'Oct 1, 2021', 'Durham, NC', '2-0', 'WIN'),
//   createData('USC', 'Sept 23, 2021', 'Los Angeles, CA', '1-2', 'LOSS'),
//   createData('LSU', 'Sept 16, 2021', 'Nashville, TN', '2-1', 'WIN'),
// ];

function retrieveData() {
  const db = getFirestore();
  const auth = getAuth();
  const currUser = auth.currentUser;

  const matchesRef = collection(db, 'users/'+currUser.uid+'/matches');

    getDocs(matchesRef).then((snapshot) => {
        const data = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        console.log("All data in 'matches' collection", data);
});
}

const rows = [
  // retrieveData()
];

export default function ColumnGroupingTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: '100%' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell sx={{fontWeight: 'bold', fontSize: 20}}align="center" colSpan={2}>
                Recent Matches
              </TableCell>
            </TableRow>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  sx = {{fontWeight: 'bold'}}
                  key={column.id}
                  align={column.align}
                  style={{ top: 57, minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}