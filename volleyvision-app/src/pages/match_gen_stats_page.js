import React from "react";
import SearchBar from "../components/Topbar/Searchbar";
import SideBar from "../components/Sidebar/Sidebar";
import styled from "styled-components";
import { GenStatsForm } from "../components/Statistics/GenStatsForm";
import CommentForm from "../components/Statistics/CommentForm";
import ShotChart from "../components/ShotChart/ShotChart";
import SetsForm from "../components/Statistics/SetsForm";
import MatchVideoPlayer from "../components/Statistics/MatchVideo";

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
  top: 250px;
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

const match_gen_stats_page = () => {
  return (
    <div>
      <SideBar />
      <VidContainer>
          <MatchVideoPlayer/>
      </VidContainer>

      <Title_Container><b>Generate Statistics</b></Title_Container>
      <List_Container1>
        <GenStatsForm />
      </List_Container1>

      <Comment_Container>
        <CommentForm />
      </Comment_Container>

      <Chart_Container>
        <ShotChart />
      </Chart_Container>

      <Sets_Container>
        <SetsForm />
      </Sets_Container>

      <SearchBar />
    </div>
  );
};

export default match_gen_stats_page;
