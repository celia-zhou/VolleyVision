import * as React from "react";
import Paper from "@mui/material/Paper";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";
import { getAuth } from "firebase/auth";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { useHistory } from "react-router-dom";

const columns = [
  { field: "firstName", headerName: "First Name", resizable: true, flex: 0.7 },
  {
    field: "lastName",
    headerName: "Last Name",
    // width: 150,
    resizable: true,
    flex: 0.7,
  },
  { field: "team", headerName: "Team", flex: 0.6 },
  {
    field: "school",
    headerName: "School",
    resizable: true,
    // width: 150,
    flex: 0.6,
  },
  {
    field: "gpa",
    headerName: "GPA",
    resizable: true,
    // width: 110,
    flex: 0.3,
  },
  { field: "age", headerName: "Age", resizable: true, flex: 0.3 },
  {
    field: "gradYear",
    headerName: "Grad Year",
    resizable: true,
    // width: 110,
    flex: 0.3,
  },
  {
    field: "jerseyNum",
    headerName: "Jersey Number",
    resizable: true,
    // width: 110,
    flex: 0.4,
  },
];

function createData(
  userId,
  userFirstName,
  userLastName,
  userTeam,
  userJerseyNum,
  userAge,
  userSchool,
  userGradYear,
  userGpa
) {
  return {
    id: userId,
    firstName: userFirstName,
    lastName: userLastName,
    team: userTeam,
    jerseyNum: userJerseyNum,
    age: userAge,
    school: userSchool,
    gradYear: userGradYear,
    gpa: userGpa,
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
    setRowsPerPage(event.target.value);
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
    const matchesRef = collection(db, "users");
    let fireRows = [];

    getDocs(matchesRef).then((snapshot) => {
      const fireData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      fireData.map((profile) => {
        if (!profile.coach && !profile.recruiter) {
          fireRows.push(
            createData(
              profile.id,
              profile.firstName,
              profile.lastName,
              profile.team,
              profile.jerseyNum,
              profile.age,
              profile.school,
              profile.gradYear,
              profile.gpa
            )
          );
        }
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
              pageSize={10}
              rowsPerPageOptions={[5]}
              components={{
                Toolbar: GridToolbar,
              }}
              onCellClick={(params, event) => {
                console.log(params.id);
                history.push("/selected_player_coach/" + params.id);
              }}
            />
          </div>
        </div>
      </div>
    </Paper>
  );
}
