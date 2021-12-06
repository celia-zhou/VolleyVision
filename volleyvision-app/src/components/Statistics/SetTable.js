import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import { useParams } from "react-router-dom";
import { getDoc, getFirestore, doc } from "firebase/firestore/lite";
import { getAuth } from "firebase/auth";

const columns = [
  { id: "set", label: "SET SCORES", minWidth: 170 },
  { id: "setOne", label: "1", minWidth: 100 },
  {
    id: "setTwo",
    label: "2",
    minWidth: 170,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "setThree",
    label: "3",
    minWidth: 170,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "score",
    label: "SCORE",
    minWidth: 170,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
];

function createData(setOne, setTwo, setThree) {
  return { setOne, setTwo, setThree };
}

export default function ColumnGroupingTable({ match }) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [dataRows, setDataRows] = React.useState([]);
  const { id } = useParams();

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  React.useEffect(() => {
    const db = getFirestore();
    const auth = getAuth();
    const currUser = auth.currentUser;

    let string = `users/${currUser.uid}/matches/${id}/stats`;
    const setsRef = doc(db, string, "Sets");
    let fireRows = [];

    getDoc(setsRef).then((snapshot) => {
      const fireData = snapshot.data();

      fireRows.push(
        createData(
          fireData.setOneHome,
          fireData.setTwoHome,
          fireData.setThreeHome
        )
      );
      fireRows.push(
        createData(fireData.setOneOpp, fireData.setTwoOpp, fireData.setThreeOpp)
      );

      setDataRows(fireRows);
    });
  });

  return (
    <Paper sx={{ width: "100%" }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableRow>
            {columns.map((column) => (
              <TableCell
                key={column.id}
                align={column.align}
                style={{ top: 57, minWidth: column.minWidth }}
              >
                {column.label}
              </TableCell>
            ))}
          </TableRow>
          <TableBody>
            {dataRows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === "number"
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
