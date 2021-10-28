import React from 'react'
import MatchTable from '../components/MatchTable'
import SearchBar from '../components/Topbar/Searchbar'
import SideBar from '../components/Sidebar/Sidebar'
import styled from 'styled-components'

const Container = styled.div`
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
    font-size: 20px;
    width: 80%;
`

const Player_Dashboard = () => {
    return (
        <div>
            <SideBar/>
            
            <Container>
                Player Dashboard
            </Container>
            
            <List_Container>
                <MatchTable/>
            </List_Container>
            
            <SearchBar/>
        </div>
    )
}

export default Player_Dashboard