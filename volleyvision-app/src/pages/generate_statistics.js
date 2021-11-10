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

const Dash_Container = styled.div`
    position: absolute;
    left: 300px;
    top: 65px;
    font: Times New Roman;
    font-size: 30px;
    width: 200px;
    height: 150px;
`

const UploadContainer1 = styled.div`
    position: absolute;
    left: 250px;
    top: 600px;
    font: Times New Roman;
    font-size: 30px;
    width: 200px;
    height: 150px;
`

const UploadContainer2 = styled.div`
    position: absolute;
    left: 420px;
    top: 600px;
    font: Times New Roman;
    font-size: 30px;
    width: 200px;
    height: 150px;
`

const UploadContainer3 = styled.div`
    position: absolute;
    left: 620px;
    top: 600px;
    font: Times New Roman;
    font-size: 30px;
    width: 200px;
    height: 150px;
`

const UploadContainer4 = styled.div`
    position: absolute;
    left: 820px;
    top: 600px;
    font: Times New Roman;
    font-size: 30px;
    width: 200px;
    height: 150px;
`

const UploadContainer5 = styled.div`
    position: absolute;
    left: 1020px;
    top: 600px;
    font: Times New Roman;
    font-size: 30px;
    width: 200px;
    height: 150px;
`

const UploadContainer6 = styled.div`
    position: absolute;
    left: 1220px;
    top: 600px;
    font: Times New Roman;
    font-size: 30px;
    width: 200px;
    height: 150px;
`

const Generate_Statistics = () => {
    
    return (
        <div>
            <ImageList sx={{ position: 'absolute', top: 150, left: 300, width: 1300, height: 1100, bgcolor:"#DBEBFB"}} cols={3}>
            {itemData.map((item) => (
                <ImageListItem sx={{pb: 1}} key={item.urlLink}>
                    <ReactPlayer
                        url={item.urlLink}
                        width = "1050px"
                        height = "400px"
                    />
                  <ImageListItemBar sx={{pb: 2}} position="below" title={item.name} />
                </ImageListItem>
            ))}
            </ImageList>

            <SideBar/>

            <Dash_Container>
                Generate Statistics
            </Dash_Container>

            <UploadContainer1>
                <KillCounter/>
            </UploadContainer1>

            <UploadContainer2>
                <ErrorCounter/>
            </UploadContainer2>
        
            <UploadContainer3>
                <AttemptCounter/>
            </UploadContainer3>
        
            <UploadContainer5>
                <AceCounter/>
            </UploadContainer5>
            
            <UploadContainer4>
                <DigCounter/>
            </UploadContainer4>
        
            <UploadContainer6>
                <BlockCounter/>
            </UploadContainer6>

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