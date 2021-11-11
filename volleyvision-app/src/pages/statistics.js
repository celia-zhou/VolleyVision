import React from 'react'
import SearchBar from '../components/Topbar/Searchbar'
import SideBar from '../components/Sidebar/Sidebar'
import styled from 'styled-components'
import MatchList from '../components/Matches/MatchList'

const Dash_Container = styled.div`
    position: absolute;
    left: 100px;
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

const List_Container1 = styled.div`
    position: absolute;
    left: 100px;
    top: 190px;
    font: Times New Roman;
    background-color: white;
    font-size: 20px;
    width: 86%;
    @media screen and (min-width: 100px) and (max-width:1100px) {
        float: top;
        max-width: 50vw
    }
`

const Statistics_Summary = () => {
    return (
        <div>
            <SideBar/>
            <Dash_Container>
                Statistics
            </Dash_Container>

            <List_Container1>
                <MatchList/>
            </List_Container1>
            
            <SearchBar/>
        
        </div>

        
    )
}

export default Statistics_Summary