import React from 'react'
import SearchBar from '../components/Topbar/Searchbar'
import SideBar from '../components/Sidebar/Sidebar'
import styled from 'styled-components'
import PlayerList from '../components/PlayerList/PlayerList'

const DashContainer = styled.div`
    position: absolute;
    left: 300px;
    top: 65px;
    font: Times New Roman;
    font-size: 30px;
    width: 200px;
    height: 150px;
`

const ListContainer = styled.div`
    position: absolute;
    left: 300px;
    top: 190px;
    font: Times New Roman;
    background-color: white;
    font-size: 20px;
    width: 80%;
    height: 78%;
`

const Coach_Dashboard = () => {
    return (
        <div>
            <SideBar/>
            <DashContainer>
                Coach Dashboard
            </DashContainer>

        
            <ListContainer>
                Team Roster
                <PlayerList/>
            </ListContainer>
            
            <SearchBar/>
        
        </div>

        
    )
}

export default Coach_Dashboard