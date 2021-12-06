import React from 'react'
import SearchBar from '../components/Topbar/Searchbar'
import SideBar from '../components/Sidebar/Sidebar'
import styled from 'styled-components'
import PlayerTable from '../components/PlayerList/PlayerTable'

const DashContainer = styled.div`
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
const ListContainer = styled.div`
    position: absolute;
    left: 85px;
    top: 180px;
    font: Times New Roman;
    background-color: #DBEBFB;
    font-size: 25px;
    width: 87%;
    @media screen and (min-width: 100px) and (max-width:1100px) {
        float: left;
        max-width: 50vw
    }
`

const Recruiter_Dashboard = () => {
    return (
        <div>
            <SideBar/>
            <DashContainer>
                <b>Recruiter Dashboard</b>
            </DashContainer>

        
            <ListContainer>
                Player List
                <PlayerTable/>
            </ListContainer>
            
            <SearchBar/>
        
        </div>

        
    )
}

export default Recruiter_Dashboard