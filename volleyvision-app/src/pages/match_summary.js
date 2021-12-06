import React from "react";
import SearchBar from "../components/Topbar/Searchbar";
import SideBar from "../components/Sidebar/Sidebar";
import styled from "styled-components";
import SetTable from "../components/Statistics/SetTable";
import StatisticsTable from "../components/Statistics/StatisticsTable";

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

const Match_Summary = () => {
  return (
    <div>
      <SideBar />
      <Dash_Container>
        <b>Match Statistics</b>
      </Dash_Container>

      <Set_Container>Set Table</Set_Container>

      <List_Container1>
        <SetTable />
      </List_Container1>

      <Stats_Container>Stats Table</Stats_Container>
      <List_Container2>
        <StatisticsTable />
      </List_Container2>
      <SearchBar />
    </div>
  );
};

export default Match_Summary;
