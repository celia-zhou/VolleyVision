// import * as React from "react";
// import Paper from "@mui/material/Paper";
// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
// import TablePagination from "@mui/material/TablePagination";
// import TableRow from "@mui/material/TableRow";
// import { Link } from "react-router-dom";
// import { getDocs, getFirestore, collection } from "firebase/firestore/lite";
// import { getAuth } from "firebase/auth";
// import { useParams, useLocation } from "react-router-dom";
// import { DataGrid, GridToolbar } from "@mui/x-data-grid";
// import { useHistory } from "react-router-dom";

// const columns = [
//   {
//     id: "opponent",
//     label: "Opponent",
//     minWidth: 200,
//     align: "left",
//     format: (value) => value.toLocaleString("en-US"),
//   },
//   { id: "date", label: "Date", minWidth: 80 },
//   { id: "partner", label: "Partner", minWidth: 170 },
//   {
//     id: "tournament",
//     label: "Tournament",
//     minWidth: 170,
//     align: "left",
//     format: (value) => value.toLocaleString("en-US"),
//   },
//   {
//     id: "location",
//     label: "Location",
//     minWidth: 170,
//     align: "left",
//     format: (value) => value.toFixed(2),
//   },
//   { id: "score", label: "Score", minWidth: 50 },
//   {
//     id: "result",
//     label: "Result",
//     minWidth: 50,
//     align: "right",
//     format: (value) => value.toLocaleString("en-US"),
//   },
// ];

// function createData(
//   matchOpponent,
//   matchDate,
//   matchPartner,
//   matchTournament,
//   matchLocation,
//   matchScore,
//   matchResult
// ) {
//   return {
//     opponent: matchOpponent,
//     date: matchDate,
//     partner: matchPartner,
//     tournament: matchTournament,
//     location: matchLocation,
//     score: matchScore,
//     result: matchResult,
//   };
// }

// export default function ColumnGroupingTable() {
//   const [page, setPage] = React.useState(0);
//   const [rowsPerPage, setRowsPerPage] = React.useState(10);
//   const [dataRows, setDataRows] = React.useState([]);
//   const [docId, setDocId] = React.useState("");
//   const { id } = useParams();
//   const history = useHistory();

//   const handleChangePage = (event, newPage) => {
//     setPage(newPage);
//   };

//   const handleChangeRowsPerPage = (event) => {
//     setRowsPerPage(+event.target.value);
//     setPage(0);
//   };

//   const handleDocId = (id) => {
//     sessionStorage.setItem("matchId", id);
//     setDocId(id);
//   };

//   React.useEffect(() => {
//     const db = getFirestore();
//     const auth = getAuth();
//     const currUser = auth.currentUser;
//     const matchesRef = collection(db, "users/" + currUser.uid + "/matches/");
//     let fireRows = [];

//     getDocs(matchesRef).then((snapshot) => {
//       const fireData = snapshot.docs.map((doc) => ({
//         id: doc.id,
//         ...doc.data(),
//       }));

//       fireData.map((currMatch) => {
//         fireRows.push(
//           createData(
//             // <Link to="/match_summary">
//             //   {currMatch.opponent}
//             // </Link>,
//             // <Link to={`/match_gen_stats/${currMatch.id}`}>
//             //   {currMatch.opponent}
//             // </Link>,
//             currMatch.opponent,
//             currMatch.date,
//             currMatch.partner,
//             currMatch.tournament,
//             currMatch.location,
//             currMatch.score,
//             currMatch.result
//           )
//         );
//         // this.setState({
//         //   rows: [...this.state.rows, createData(<Link to="/match_summary">{currMatch.opp}</Link>, currMatch.date, currMatch.partner, currMatch.tournament, currMatch.location, currMatch.score, currMatch.result)]
//         // });
//       });

//       setDataRows(fireRows);
//     });
//   });

//   return (
//     // <Paper sx={{ width: "100%" }}>
//     //   <TableContainer sx={{ maxHeight: 440 }}>
//     //     <Table stickyHeader aria-label="sticky table">
//     //       <TableHead>
//     //         <TableRow>
//     //           <TableCell align="center" colSpan={2}>
//     //             Matches
//     //           </TableCell>
//     //         </TableRow>
//     //         <TableRow>
//     //           {columns.map((column) => (
//     //             <TableCell
//     //               key={column.id}
//     //               align={column.align}
//     //               style={{ top: 57, minWidth: column.minWidth }}
//     //             >
//     //               {column.label}
//     //             </TableCell>
//     //           ))}
//     //         </TableRow>
//     //       </TableHead>
//     //       <TableBody>
//     //         {dataRows
//     //           .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
//     //           .map((row) => {
//     //             return (
//     //               <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
//     //                 {columns.map((column) => {
//     //                   const value = row[column.id];
//     //                   return (
//     //                     <TableCell key={column.id} align={column.align}>
//     //                       {column.format && typeof value === "number"
//     //                         ? column.format(value)
//     //                         : value}
//     //                     </TableCell>
//     //                   );
//     //                 })}
//     //               </TableRow>
//     //             );
//     //           })}
//     //       </TableBody>
//     //     </Table>
//     //   </TableContainer>
//     // </Paper>
//     <Paper sx={{ width: "100%" }}>
//       <div style={{ height: 400, width: "100%" }}>
//         <div style={{ display: "flex", height: "100%" }}>
//           <div style={{ flexGrow: 1 }}>
//             <DataGrid
//               rows={dataRows}
//               columns={columns}
//               pageSize={5}
//               rowsPerPageOptions={[5]}
//               components={{
//                 Toolbar: GridToolbar,
//               }}
//               onCellClick={(params, event) => {
//                 console.log(params.id);
//                 history.push("/match_gen_stats/" + params.id);
//               }}
//             />
//           </div>
//         </div>
//       </div>
//     </Paper>
//   );
// }

import * as React from "react";
import Paper from "@mui/material/Paper";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";
import { getAuth } from "firebase/auth";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { useHistory } from "react-router-dom";

const columns = [
  { field: "date", headerName: "Date", type: "date", flex: 0.5 },
  {
    field: "opponent",
    headerName: "Opponent",
    // width: 150,
    flex: 0.7,
  },
  { field: "partner", headerName: "Partner", flex: 0.7 },
  {
    field: "tournament",
    headerName: "Tournament",
    // width: 150,
    flex: 0.7,
  },
  {
    field: "location",
    headerName: "Location",
    // width: 110,
    flex: 0.7,
  },
  { field: "score", headerName: "Score", flex: 0.4 },
  {
    field: "result",
    headerName: "Result",
    // width: 110,
    flex: 0.4,
  },
];

function createData(
  userId,
  userDate,
  userOpponent,
  userPartner,
  userTournament,
  userLocation,
  userScore,
  userResult
) {
  return {
    id: userId,
    date: userDate,
    opponent: userOpponent,
    partner: userPartner,
    tournament: userTournament,
    location: userLocation,
    score: userScore,
    result: userResult,
  };
}

export default function ColumnGroupingTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [dataRows, setDataRows] = React.useState([]);
  const [docId, setDocId] = React.useState("");
  const history = useHistory();

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleDocId = (id) => {
    // sessionStorage.setItem("matchId", id);
    setDocId(id);
  };

  React.useEffect(() => {
    const db = getFirestore();
    const auth = getAuth();
    const currUser = auth.currentUser;
    const matchesRef = collection(db, "users/" + currUser.uid + "/matches");
    let fireRows = [];

    getDocs(matchesRef).then((snapshot) => {
      const fireData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      fireData.map((currMatch) => {
        fireRows.push(
          createData(
            currMatch.id,
            currMatch.date,
            //   <Link to={`/match_summary/${currMatch.id}`}>
            //   {currMatch.opponent}
            // </Link>,
            currMatch.opponent,
            currMatch.partner,
            currMatch.tournament,
            currMatch.location,
            currMatch.score,
            currMatch.result
          )
        );
        // this.setState({
        //   rows: [...this.state.rows, createData(<Link to="/match_summary">{currMatch.opp}</Link>, currMatch.date, currMatch.partner, currMatch.tournament, currMatch.location, currMatch.score, currMatch.result)]
        // });
      });

      setDataRows(fireRows);
    });
  });

  return (
    <Paper sx={{ width: "100%" }}>
      <div style={{ height: 400, width: "100%" }}>
        <div style={{ display: "flex", height: "100%" }}>
          <div style={{ flexGrow: 1 }}>
            <DataGrid
              rows={dataRows}
              columns={columns}
              pageSize={5}
              rowsPerPageOptions={[5]}
              components={{
                Toolbar: GridToolbar,
              }}
              onCellClick={(params, event) => {
                console.log(params.id);
                history.push("/match_gen_stats/" + params.id);
              }}
            />
          </div>
        </div>
      </div>
    </Paper>
  );
}
