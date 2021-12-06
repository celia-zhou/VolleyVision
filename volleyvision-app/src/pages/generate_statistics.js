import React from "react";
import SearchBar from "../components/Topbar/Searchbar";
import SideBar from "../components/Sidebar/Sidebar";
import styled from "styled-components";
import ReactPlayer from "react-player";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import NewGenerateStatsForm from "../components/Statistics/NewGenerateStatsForm";
import { GenStatsForm } from "../components/Statistics/GenStatsForm";
import MatchGenStats from "../components/Statistics/MatchGenStats";

const Dash_Container = styled.div`
  position: absolute;
  left: 100px;
  top: 110px;
  font: Times New Roman;
  font-size: 30px;
  width: 400px;
  height: 150px;
  @media screen and (min-width: 100px) and (max-width: 1100px) {
    float: bottom;
    max-width: 100vw;
  }
`;

const VidContainer = styled.div`
  position: absolute;
  left: 100px;
  top: 50px;
  font: Times New Roman;
  font-size: 30px;
  width: 100%;
  height: 150px;
  @media screen and (min-width: 100px) and (max-width: 1100px) {
    float: bottom;
    max-width: 20vw;
  }
`;

const ListContainer = styled.div`
  position: absolute;
  left: 80px;
  top: 180px;
  font: Times New Roman;
  background-color: white;
  font-size: 30px;
  width: 87%;
  @media screen and (min-width: 100px) and (max-width: 1100px) {
    float: left;
    max-width: 50vw;
  }
`;

const Generate_Statistics = () => {
  return (
    <div>
      <SideBar />

      <Dash_Container>
        <b>Generate Statistics</b>
      </Dash_Container>

      <ListContainer>
        <MatchGenStats />
      </ListContainer>
      <SearchBar />
    </div>
  );
};

export default Generate_Statistics;
