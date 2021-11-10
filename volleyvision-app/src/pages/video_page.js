import React from 'react'
import styled from 'styled-components'

import UploadButton from '../components/Videos/upload_button'
import SearchBar from '../components/Topbar/Searchbar'
import Sidebar from '../components/Sidebar/Sidebar'
import YTVideos from '../components/Videos/ytVideos'
import AuthButton from '../components/Youtube/AuthorizeButton'


const Container = styled.div`
    position: absolute;
    left: 300px;
    top: 65px;
    font: Times New Roman;
    font-size: 30px;
    width: 200px;
    height: 150px;
`

const UploadContainer = styled.div`
    position: absolute;
    left: 560px;
    top: 90px;
    font: Times New Roman;
    font-size: 30px;
    width: 200px;
    height: 150px;
`

const AuthContainer = styled.div`
    position: absolute;
    left: 250px;
    top: 90px;
    font: Times New Roman;
    font-size: 30px;
`

const Videos = () => {
    return (
        <div>
            <Sidebar/> 

            <Container>
                Videos
            </Container>

            <UploadContainer>
                <UploadButton/>
            </UploadContainer>

            <AuthContainer>
                <AuthButton/>
            </AuthContainer>
            
            <YTVideos/>

            <SearchBar/>
        </div>
    )
}

export default Videos