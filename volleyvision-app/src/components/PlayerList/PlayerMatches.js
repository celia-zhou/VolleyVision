import * as React from "react";
import Paper from "@mui/material/Paper";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";
import { getAuth } from "firebase/auth";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { useHistory, useParams } from "react-router-dom";

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
  const [playerName, setPlayerName] = React.useState([]);
  const history = useHistory();
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
    const path = `users/${id}/matches`;
    const matchesRef = collection(db, path);
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
            currMatch.opponent,
            currMatch.partner,
            currMatch.tournament,
            currMatch.location,
            currMatch.score,
            currMatch.result
          )
        );
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
                history.push("/match_summary/" + params.id);
              }}
            />
          </div>
        </div>
      </div>
    </Paper>
  );
}
