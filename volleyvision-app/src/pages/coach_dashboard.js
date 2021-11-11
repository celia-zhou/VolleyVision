import React from 'react'
import SearchBar from '../components/Topbar/Searchbar'
import SideBar from '../components/Sidebar/Sidebar'
import styled from 'styled-components'
import PlayerList from '../components/PlayerList/PlayerList'

const DashContainer = styled.div`
    position: absolute;
    left: 10%;
    top: 100px;
    font: Times New Roman;
    font-size: 30px;
    width: 200px;
    height: 150px;
`

const ListContainer = styled.div`
    position: relative;
    left: 10%;
    top: 250px;
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
                <h2>Coach Dashboard</h2><br />
                <h4>Team Roster</h4>
            </DashContainer>

            
            <ListContainer>
                <PlayerList />
            </ListContainer>
            
            <SearchBar/>
        
        </div>

        
    )
}

export default Coach_Dashboard