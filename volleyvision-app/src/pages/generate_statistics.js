import React from 'react'
import SearchBar from '../components/Topbar/Searchbar'
import SideBar from '../components/Sidebar/Sidebar'
import styled from 'styled-components'
import ReactPlayer from "react-player";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import KillCounter from '../components/kill_counter'
import ErrorCounter from '../components/error_counter'
import AttemptCounter from '../components/attempt_counter'
import AceCounter from '../components/ace_counter'
import DigCounter from '../components/dig_counter'
import BlockCounter from '../components/block_counter'
import NewGenerateStatsForm from '../components/Statistics/NewGenerateStatsForm';

const Dash_Container = styled.div`
    position: absolute;
    left: 100px;
    top: 110px;
    font: Times New Roman;
    font-size: 30px;
    width: 400px;
    height: 150px;
    @media screen and (min-width: 100px) and (max-width:1100px) {
        float: bottom;
        max-width: 100vw
    }
`

const ListContainer = styled.div`
    position: absolute;
    left: 70px;
    top: 80px;
    font: Times New Roman;
    background-color: white;
    font-size: 30px;
    width: 87%;
    @media screen and (min-width: 100px) and (max-width:1100px) {
        float: left;
        max-width: 50vw
    }
`

const Generate_Statistics = () => {
    return (
        <div>
            <SideBar/>

            <Dash_Container>
                Generate Statistics
            </Dash_Container>

            <ListContainer>
                <NewGenerateStatsForm/>
            </ListContainer>
            
            <SearchBar/>
        </div>
    )
}

const itemData = [
    {
        urlLink: 'https://www.youtube.com/watch?v=459Oda8XPy0&t=3s',
        name: 'USA vs. Australia - Tokyo 2021'
    },
];


export default Generate_Statistics