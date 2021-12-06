import React from 'react'
import styled from 'styled-components'
import MatchTable from '../components/Matches/MatchList'
import SearchBar from '../components/Topbar/Searchbar'
import SideBar from '../components/Sidebar/Sidebar'
import AddMatch from '../components/Matches/AddMatchButton'
import { Button } from 'react-bootstrap'
import User from '../components/User'
import ShotChart from '../components/ShotChart/ShotChart'

const Container = styled.div`
    position: absolute;
    left: 85px;
    top: 115px;
    font: Times New Roman;
    font-size: 30px;
    width: 330px;
    height: 150px;
    @media screen and (min-width: 100px) and (max-width:1100px) {
        float: top;
        max-width: 50vw
    }
`
const List_Container = styled.div`
    position: absolute;
    left: 85px;
    top: 260px;
    font: Times New Roman;
    background-color: #DBEBFB;
    font-size: 30px;
    width: 87%;
    @media screen and (min-width: 100px) and (max-width:1100px) {
        float: left;
        max-width: 50vw
    }
`

const ButtonContainer = styled.div`
    position: absolute;
    left: 50px;
    top: 140px;
    font: Times New Roman;
    font-size: 30px;
    width: 80%;
    height: 150px;
    @media screen and (min-width: 100px) and (max-width:1100px) {
        float: right;
        max-width: 50vw
    }
`;

const Player_Dashboard = () => {
    return (
        <div>
            <SideBar/>
            
            <Container>
                <b>Player Dashboard</b>
            </Container>
            
            
            <List_Container>
                Matches
                <MatchTable/>
            </List_Container> 

            <ButtonContainer>
                <AddMatch/>
            </ButtonContainer>

            <SearchBar/>
        </div>
    )
}

export default Player_Dashboard
