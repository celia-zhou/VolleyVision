import * as React from 'react';
import Paper from '@mui/material/Paper';
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";
import { getAuth } from "firebase/auth";
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { useHistory } from 'react-router-dom';

const columns = [
  { field: 'date', headerName: 'Date', type: 'date', flex: 0.5 },
  {
    field: 'opponent',
    headerName: 'Opponent',
    // width: 150,
    flex: 0.7,
  },
  { field: "partner", headerName: "Partner", flex: 0.7 },
  {
    field: 'tournament',
    headerName: 'Tournament',
    // width: 150,
    flex: 0.7
  },
  {
    field: 'location',
    headerName: 'Location',
    // width: 110,
    flex: 0.7
  },
  { field: "score", headerName: "Score", flex: 0.4},
  {
    field: 'result',
    headerName: 'Result',
    // width: 110,
    flex: 0.4
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
  return { id: userId, 
    date: userDate, 
    opponent: userOpponent, 
    partner: userPartner,
    tournament: userTournament, 
    location: userLocation, 
    score: userScore,
    result: userResult};
}

{
  /*Match number, date, opponent, tournament, location, result
JVA Midwest Beach championship, bvca national champsionship, club challenge series*/
}

// const rows = [
//   createData(<Link to="/match_summary">Match 1</Link>, '4/2/21', 'Harvard', 'JVA Midwest Beach Championship', 'Arizona', 'WIN'),
//   createData(<Link to="/match_summary">Match 2</Link>, '5/2/21', 'Yale', 'BVCA National Beach Championship', 'Boston', 'WIN'),
//   createData(<Link to="/match_summary">Match 3</Link>, '6/2/21', 'Princeton', 'Club Challenge Series', 'Nashville', 'WIN'),
//   createData(<Link to="/match_summary">Match 4</Link>, '7/2/21', 'MIT', 'Olympics', 'Tokyo', 'WIN'),
// ];

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
    <Paper sx={{ width: '100%' }}>
    <div style={{ height: 400, width: '100%' }}>
      <div style={{ display: 'flex', height: '100%' }}>
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
        console.log(params.id)
        history.push('/match_summary/' + params.id)
      }}
    />
     </div>
  </div>
 </div>
   </Paper>
  );
}
