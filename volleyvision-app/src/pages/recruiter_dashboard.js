import React from 'react'
import SearchBar from '../components/Topbar/Searchbar'
import SideBar from '../components/Sidebar/Sidebar'
import styled from 'styled-components'
import PlayerList2 from '../components/PlayerList/PlayerList2'

const DashContainer = styled.div`
    position: absolute;
    left: 300px;
    top: 65px;
    font: Times New Roman;
    font-size: 30px;
    width: 300px;
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

const Recruiter_Dashboard = () => {
    return (
        <div>
            <SideBar/>
            <DashContainer>
                Recruiter Dashboard
            </DashContainer>

        
            <ListContainer>
                Eligible Recruits
                <PlayerList2/>
            </ListContainer>
            
            <SearchBar/>
        
        </div>

        
    )
}

export default Recruiter_Dashboard