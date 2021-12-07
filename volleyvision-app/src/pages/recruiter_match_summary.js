import React from "react";
import SearchBar from "../components/Topbar/Searchbar";
import SideBar from "../components/Sidebar/Sidebar";
import styled from "styled-components";
import RecruiterSetTable from "../components/Statistics/RecruiterSetTable";
import RecruiterStatisticsTable from "../components/Statistics/RecruiterStatisticsTable";
import RecruiterDispShotChart from "../components/ShotChart/RecruiterDisplayChart";
import RecruiterDispComments from "../components/Statistics/RecruiterDisplayComment";

const Dash_Container = styled.div`
  position: absolute;
  left: 100px;
  top: 100px;
  font: Times New Roman;
  font-size: 30px;
  width: 300px;
  height: 150px;
`;

const List_Container1 = styled.div`
  position: absolute;
  left: 100px;
  top: 200px;
  font: Times New Roman;
  background-color: white;
  font-size: 20px;
  width: 86%;
`;

const List_Container2 = styled.div`
  position: absolute;
  left: 100px;
  top: 450px;
  font: Times New Roman;
  background-color: white;
  font-size: 20px;
  width: 86%;
`;

const Set_Container = styled.div`
  position: absolute;
  left: 100px;
  top: 160px;
  font: Times New Roman;
  font-size: 20px;
  width: 300px;
  height: 150px;
`;

const Stats_Container = styled.div`
  position: absolute;
  left: 100px;
  top: 410px;
  font: Times New Roman;
  font-size: 20px;
  width: 300px;
  height: 150px;
`;

const Chart_Container = styled.div`
  position: absolute;
  left: 100px;
  top: 680px;
  font: Times New Roman;
  font-size: 20px;
  width: 300px;
  height: 150px;
`;

const Comment_Container = styled.div`
  position: absolute;
  left: 500px;
  top: 680px;
  font: Times New Roman;
  font-size: 20px;
  width: 300px;
  height: 150px;
`;

const Recruiter_Match_Summary = () => {
  return (
    <div>
      <SideBar />
      <Dash_Container>
        <b>Match Statistics</b>
      </Dash_Container>

      <Set_Container>Set Table</Set_Container>

      <List_Container1>
        <RecruiterSetTable />
      </List_Container1>

      <Stats_Container>Stats Table</Stats_Container>
      <List_Container2>
        <RecruiterStatisticsTable />
      </List_Container2>

      <Chart_Container>
        Shot Chart
        <RecruiterDispShotChart />
      </Chart_Container>

      <Comment_Container>
        <RecruiterDispComments />
      </Comment_Container>

      <SearchBar />
    </div>
  );
};

export default Recruiter_Match_Summary;
