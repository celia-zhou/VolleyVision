import React from "react";
import SearchBar from "../components/Topbar/Searchbar";
import SideBar from "../components/Sidebar/Sidebar";
import styled from "styled-components";
import { CoachGenStatsForm } from "../components/Statistics/CoachGenStatsForm";
import CoachCommentForm from "../components/Statistics/CoachCommentForm";
import CoachShotChart from "../components/ShotChart/CoachShotChart";
import SetsForm from "../components/Statistics/CoachSetsForm";
import CoachMatchVideoPlayer from "../components/Statistics/CoachMatchVideo";

const Title_Container = styled.div`
  position: absolute;
  left: 100px;
  top: 115px;
  font: Times New Roman;
  font-size: 30px;
  width: 300px;
  height: 150px;
`;

const List_Container1 = styled.div`
  position: absolute;
  left: 100px;
  top: 190px;
  font: Times New Roman;
  background-color: #dbebfb;
  font-size: 18px;
  width: 100%;
`;

const VidContainer = styled.div`
  position: absolute;
  left: 100px;
  top: 270px;
  font: Times New Roman;
  font-size: 30px;
  width: 100%;
  height: 150px;
  @media screen and (min-width: 100px) and (max-width: 1100px) {
    float: bottom;
    max-width: 20vw;
  }
`;

const Comment_Container = styled.div`
  position: absolute;
  left: 100px;
  top: 720px;
  width: 500px;
`;

const Chart_Container = styled.div`
  position: absolute;
  left: 1000px;
  top: 250px;
  width: 500px;
`;

const Sets_Container = styled.div`
  position: absolute;
  left: 900px;
  top: 720px;
  width: 500px;
`;

const coach_match_gen_stats_page = () => {
  return (
    <div>
      <SideBar />
      <VidContainer>
        <CoachMatchVideoPlayer />
      </VidContainer>

      <Title_Container>
        <b>Generate Statistics</b>
      </Title_Container>
      <List_Container1>
        <CoachGenStatsForm />
      </List_Container1>

      <Comment_Container>
        <CoachCommentForm />
      </Comment_Container>

      <Chart_Container>
        <CoachShotChart />
      </Chart_Container>

      <Sets_Container>
        <SetsForm />
      </Sets_Container>

      <SearchBar />
    </div>
  );
};

export default coach_match_gen_stats_page;
