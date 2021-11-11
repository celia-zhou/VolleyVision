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
    left: 100px;
    top: 110px;
    font: Times New Roman;
    font-size: 30px;
    width: 400px;
    height: 150px;
`

const UploadContainer1 = styled.div`
    position: absolute;
    left: 200px;
    top: 700px;
    font: Times New Roman;
    font-size: 30px;
    width: 200px;
    height: 150px;
`

const UploadContainer2 = styled.div`
    position: absolute;
    left: 400px;
    top: 700px;
    font: Times New Roman;
    font-size: 30px;
    width: 200px;
    height: 150px;
`

const UploadContainer3 = styled.div`
    position: absolute;
    left: 600px;
    top: 700px;
    font: Times New Roman;
    font-size: 30px;
    width: 200px;
    height: 150px;
`

const UploadContainer4 = styled.div`
    position: absolute;
    left: 800px;
    top: 700px;
    font: Times New Roman;
    font-size: 30px;
    width: 200px;
    height: 150px;
`

const UploadContainer5 = styled.div`
    position: absolute;
    left: 1000px;
    top: 700px;
    font: Times New Roman;
    font-size: 30px;
    width: 200px;
    height: 150px;
`

const UploadContainer6 = styled.div`
    position: absolute;
    left: 1200px;
    top: 700px;
    font: Times New Roman;
    font-size: 30px;
    width: 200px;
    height: 150px;
`

const VidContainer = styled.div`
    position: absolute;
    left: 100px;
    top: 1px;
    font: Times New Roman;
    font-size: 30px;
    width: 100%;
    height: 150px;
`

const Generate_Statistics = () => {
    return (
        <div>
            <VidContainer>
                <ImageList sx={{ position: 'absolute', top: 200, left: 100, width: 2000, height: 1100, bgcolor:"#DBEBFB"}} cols={3}>
                {itemData.map((item) => (
                    <ImageListItem sx={{pb: 1}} key={item.urlLink}>
                        <ReactPlayer
                            url={item.urlLink}
                            width = "1050px"
                            height = "440px"
                        />
                    <ImageListItemBar sx={{pb: 2}} position="below" title={item.name} />
                    </ImageListItem>
                ))}
                </ImageList>
            </VidContainer>

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