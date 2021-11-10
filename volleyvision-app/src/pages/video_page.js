import React from 'react'
import styled from 'styled-components'

import UploadButton from '../components/Videos/upload_button'
import SearchBar from '../components/Topbar/Searchbar'
import Sidebar from '../components/Sidebar/Sidebar'
import VideoGallery from '../components/Videos/video_gallery'

const Container = styled.div`
    left: 300px;
    top: 165px;
    font: Times New Roman;
    font-size: 30px;
    width: 200px;
    height: 150px;
`

const Videos = () => {
    return (
        <div>
            <Sidebar/>
            <Container>
                Videos
            </Container> 

            <Container>
                <UploadButton/>
            </Container>
      
            <VideoGallery/>

            <SearchBar/>
        </div>
    )
}

export default Videos