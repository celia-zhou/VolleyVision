import React from 'react'
import SearchBar from '../components/Topbar/Searchbar'
import SideBar from '../components/Sidebar/Sidebar'
import styled from 'styled-components'
import PlayerList from '../components/PlayerList/PlayerList'
import StatisticsTable from '../components/Statistics/StatisticsTable'

const Dash_Container = styled.div`
    position: absolute;
    left: 300px;
    top: 65px;
    font: Times New Roman;
    font-size: 30px;
    width: 200px;
    height: 150px;
`

const List_Container = styled.div`
    position: absolute;
    left: 300px;
    top: 190px;
    font: Times New Roman;
    background-color: white;
    font-size: 20px;
    width: 80%;
    height: 78%;
`

const Statistics_Summary = () => {
    return (
        <div>
            <SideBar/>
            <Dash_Container>
                Statistics
            </Dash_Container>

        
        
            Team Roster
            <StatisticsTable/>
            
            
            <SearchBar/>
        
        </div>

        
    )
}

export default Statistics_Summary