import React from 'react'
import styled from 'styled-components'

import UploadButton from '../components/Videos/upload_button'
import SearchBar from '../components/Topbar/Searchbar'
import Sidebar from '../components/Sidebar/Sidebar'
import YTVideos from '../components/Videos/ytVideos'
import AuthButton from '../components/Youtube/AuthorizeButton'


const Container = styled.div`
    position: absolute;
    left: 100px;
    top: 115px;
    font: Times New Roman;
    font-size: 30px;
    width: 200px;
    height: 150px;
    @media screen and (min-width: 100px) and (max-width:1100px) {
        float: right;
        max-width: 50vw
    }
`

const UploadContainer = styled.div`
    position: absolute;
    left: 50px;
    top: 130px;
    font: Times New Roman;
    font-size: 30px;
    width: 80%;
    height: 150px;
    @media screen and (min-width: 100px) and (max-width:1100px) {
        float: right;
        max-width: 50vw
    }
`

const AuthContainer = styled.div`
    position: absolute;
    left: 200px;
    top: 130px;
    font: Times New Roman;
    font-size: 30px;
    @media screen and (min-width: 100px) and (max-width:1100px) {
        float: right;
        max-width: 50vw
    }
`

const VideoContainer = styled.div`
    position: absolute;
    right: 1640px;
    top: 50px;
    @media screen and (min-width: 100px) and (max-width:1100px) {
        float: left;
        max-width: 50vw
    }
`

const Videos = () => {
    return (
        <div>
            <Sidebar/>

            <Container>
                <b>Videos</b>
            </Container>

            <UploadContainer>
                <UploadButton/>
            </UploadContainer>

            <AuthContainer>
                <AuthButton/>
            </AuthContainer>
            
            <VideoContainer>
                <YTVideos/>
            </VideoContainer>
            

            <SearchBar/>
        </div>
    )
}

export default Videos