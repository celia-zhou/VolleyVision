import React from 'react'
import SearchBar from '../components/Topbar/Searchbar'
import SideBar from '../components/Sidebar/Sidebar'
import styled from 'styled-components'
import { ListItemText } from '@material-ui/core'
import photo from './vandy.jpeg'
import videoScreenshot1 from './videoscreenshot1.png'
import videoScreenshot2 from './videoscreenshot2.png'

console.log(photo)

const Container = styled.div`
    position: absolute;
    left: 650px;
    top: 65px;
    font: Times New Roman;
    font-size: 30px;
    font-weight: bold;
    width: 400px;
    height: 150px;
`


const SubtitleContainer = styled.div`
    position: absolute;
    left: 400px;
    top: 450px;
    font: Times New Roman;
    font-size: 30px;
    font-style: italic;
    width: 300px;
    height: 150px;
`

const DescriptionContainer = styled.div`
    position: absolute;
    left: 400px;
    top: 500px;
    font: Times New Roman;
    font-size: 30px;
    width: 300px;
    height: 150px;
`

const InfoContainer = styled.div`
    position: absolute;
    left: 850px;
    top: 450px;
    font: Times New Roman;
    font-size: 30px;
    width: 300px;
    height: 150px;
    font-weight: bold;
`

const ImageContainer = styled.img`
    position: absolute;
    left: 450px;
    top: 125px;
    width: 700px;
    height: auto;
`

const VideoTitleContainer = styled.div`
    position: absolute;
    left: 825px;
    top: 525px;
    font: Times New Roman;
    font-size: 30px;
    font-style: italic;
    width: 300px;
    height: 150px;
`

const VideoThumbnailContainer = styled.img`
    position: absolute;
    left: 750px;
    top: 580px;
    width: 200px;
    height: auto;
`

const VideoThumbnailContainer2 = styled.img`
    position: absolute;
    left: 1000px;
    top: 580px;
    width: 200px;
    height: auto;
`

const RecruiterTeam = () => {
    return (
        <div>
            <SideBar/>
            <Container>
                Vanderbilt University
            </Container>

            <ImageContainer src={photo} />;

            <SubtitleContainer>
                Our Team Philosophy
            </SubtitleContainer>

            <DescriptionContainer>
                <ListItemText>Our team at Vanderbilt University is dedicated to the collective improvement of our members.
                    We place a focus on teamwork and collaboration - no player gets left behind. We preach hard work, tenacity, and grit.
                    At Vanderbilt, our team members receive a world-class education while playing on an award-winning Volleyball team.</ListItemText>
                
            </DescriptionContainer>
            
            <InfoContainer>
                <ListItemText>Location: Nashville, TN</ListItemText>
                <ListItemText>Team Coach: Celia Zhou</ListItemText>
            </InfoContainer>

            <VideoTitleContainer>Team Highlights</VideoTitleContainer>

            
            <VideoThumbnailContainer src={videoScreenshot1} />;
            <VideoThumbnailContainer2 src={videoScreenshot2} />;

            <SearchBar/>
    
        </div>

        
    )
}

export default RecruiterTeam