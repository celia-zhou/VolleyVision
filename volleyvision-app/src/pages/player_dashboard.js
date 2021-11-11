import React from 'react'
import MatchTable from '../components/Matches/RecentMatches'
import SearchBar from '../components/Topbar/Searchbar'
import SideBar from '../components/Sidebar/Sidebar'
import styled from 'styled-components'


const Container = styled.div`
    position: absolute;
    left: 100px;
    top: 115px;
    font: Times New Roman;
    font-size: 30px;
    width: 330px;
    height: 150px;
    @media all and (min-width: 480px) {
        max-width:800px
    }
`
const List_Container = styled.div`
    position: absolute;
    left: 100px;
    top: 200px;
    font: Times New Roman;
    background-color: white;
    font-size: 30px;
    width: 87%;
    @media all and (min-width: 480px) {
        min-width:200px
    }
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