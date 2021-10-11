import React from 'react'
import SearchBar from '../components/Topbar/Searchbar'
import SideBar from '../components/Sidebar/Sidebar'
import styled from 'styled-components'
import PlayerList from '../components/PlayerList/PlayerList'

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
    top: 200px;
    font: Times New Roman;
    background-color: white;
    font-size: 30px;
    width: 40%;
    height: 45%;
`

const Coach_Dashboard = () => {
    return (
        <div>
            <SideBar/>
            <Dash_Container>
                Coach Dashboard
            </Dash_Container>

            <List_Container>
                Team Roster
                <PlayerList/>
            </List_Container>
            
            <SearchBar/>
        
        </div>

        
    )
}

export default Coach_Dashboard