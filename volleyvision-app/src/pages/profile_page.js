import React, { useEffect, useState } from "react";
import EditButton from "../components/Profile/EditButton";
import SearchBar from "../components/Topbar/Searchbar";
import SideBar from "../components/Sidebar/Sidebar";
import AuthButton from "../components/Youtube/AuthorizeButton";
import styled from "styled-components";
import { ListItemText } from "@material-ui/core";
import ReactRoundedImage from "react-rounded-image";
import photo from "./volleyball.jpeg";
import { getFirestore, doc, getDoc } from "firebase/firestore/lite";
import { getAuth } from "firebase/auth";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { green, pink } from "@mui/material/colors";

const Container = styled.div`
    position: absolute;
    left: 85px;
    top: 115px;
    font: Times New Roman;
    font-size: 30px;
    width: 330px;
    height: 150px;
    @media screen and (min-width: 100px) and (max-width:1100px) {
        float: top;
        max-width: 50vw
 `;

const NameContainer = styled.div`
  position: absolute;
  left: 270px;
  top: 520px;
  font: Times New Roman;
  width: 300px;
  height: 150px;
`;

const EditContainer = styled.div`
  position: absolute;
  left: 850px;
  top: 530px;
  font: Times New Roman;
  font-size: 30px;
  width: 300px;
  height: 150px;
`;

const ImageContainer = styled.div`
  position: absolute;
  left: 260px;
  top: 250px;
  width: 40000px;
  height: 5050px;
`;

const BoxContainer1 = styled.div`
  position: absolute;
  left: 620px;
  top: 175px;
  width: 400px;
  height: 150px;
`;

const BoxContainer2 = styled.div`
  position: absolute;
  left: 900px;
  top: 175px;
  width: 400px;
  height: 150px;
`;

function stringToColor(string) {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = "#";

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.substr(-2);
  }
  /* eslint-enable no-bitwise */

  return color;
}

function stringAvatar(name) {
  return {
    sx: {
      bgcolor: stringToColor(name),
    },
    children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
  };
}

export default function Profile() {
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    team: "",
    school: "",
    gpa: "",
    age: "",
    gradYear: "",
    jerseyNum: "",
  });

  useEffect(() => {
    const db = getFirestore();
    const auth = getAuth();
    const currUser = auth.currentUser;

    getDoc(doc(db, "users", currUser.uid)).then((snapshot) => {
      const fireData = snapshot.data();
      setUserData(fireData);
    });
  });

  let stringName = `${userData.firstName} ${userData.lastName}`;

  return (
    <div>
      <SideBar />
      <ImageContainer>
        <Stack direction="row" spacing={2}>
          <Avatar
            {...stringAvatar(stringName)}
            sx={{ width: 200, height: 200, bgcolor: green[500], fontSize: 100 }}
          />
        </Stack>
      </ImageContainer>
      <Container>
        <b>Profile</b>
      </Container>

      <NameContainer>
        <h1>
          {userData.firstName} {userData.lastName}
        </h1>
      </NameContainer>
      <Box sx={{ flexGrow: 1, overflow: "hidden", px: 3 }}>
        <BoxContainer1>
          <Paper sx={{ maxWidth: 200, my: 1, mx: "auto", p: 2 }}>
            <Grid container wrap="nowrap" spacing={2}>
              <Grid item xs zeroMinWidth>
                <b>First Name:</b>
                <Typography noWrap>{userData.firstName}</Typography>{" "}
              </Grid>
            </Grid>
          </Paper>
          <Paper sx={{ maxWidth: 200, my: 1, mx: "auto", p: 2 }}>
            <Grid container wrap="nowrap" spacing={2}>
              <Grid item xs zeroMinWidth>
                <b>Last Name:</b>
                <Typography noWrap>{userData.lastName}</Typography>{" "}
              </Grid>
            </Grid>
          </Paper>
          <Paper sx={{ maxWidth: 200, my: 1, mx: "auto", p: 2 }}>
            <Grid container wrap="nowrap" spacing={2}>
              <Grid item xs zeroMinWidth>
                <b>Team:</b>
                <Typography noWrap>{userData.team}</Typography>{" "}
              </Grid>
            </Grid>
          </Paper>
          <Paper sx={{ maxWidth: 200, my: 1, mx: "auto", p: 2 }}>
            <Grid container wrap="nowrap" spacing={2}>
              <Grid item xs zeroMinWidth>
                <b>School:</b>
                <Typography noWrap>{userData.school}</Typography>{" "}
              </Grid>
            </Grid>
          </Paper>
        </BoxContainer1>
        <BoxContainer2>
          <Paper sx={{ maxWidth: 200, my: 1, mx: "auto", p: 2 }}>
            <Grid container wrap="nowrap" spacing={2}>
              <Grid item xs zeroMinWidth>
                <b>Age:</b>
                <Typography noWrap>{userData.age}</Typography>{" "}
              </Grid>
            </Grid>
          </Paper>
          <Paper sx={{ maxWidth: 200, my: 1, mx: "auto", p: 2 }}>
            <Grid container wrap="nowrap" spacing={2}>
              <Grid item xs zeroMinWidth>
                <b>GPA:</b>
                <Typography noWrap>{userData.gpa}</Typography>{" "}
              </Grid>
            </Grid>
          </Paper>
          <Paper sx={{ maxWidth: 200, my: 1, mx: "auto", p: 2 }}>
            <Grid container wrap="nowrap" spacing={2}>
              <Grid item xs zeroMinWidth>
                <b>Graduation Year:</b>
                <Typography noWrap>{userData.gradYear}</Typography>{" "}
              </Grid>
            </Grid>
          </Paper>
          <Paper sx={{ maxWidth: 200, my: 1, mx: "auto", p: 2 }}>
            <Grid container wrap="nowrap" spacing={2}>
              <Grid item xs zeroMinWidth>
                <b>Jersey Number:</b>
                <Typography noWrap>{userData.jerseyNum}</Typography>{" "}
              </Grid>
            </Grid>
          </Paper>
        </BoxContainer2>
      </Box>
      <EditContainer>
        <EditButton />
      </EditContainer>
      <SearchBar />
    </div>
  );
}
