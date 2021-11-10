import React from 'react'
import styled from 'styled-components'
import db from '../firebase/firebase'
import { collection } from 'firebase/firestore'

import UploadButton from '../components/Videos/upload_button'
import SearchBar from '../components/Topbar/Searchbar'
import Sidebar from '../components/Sidebar/Sidebar'
import VideoGallery from '../components/Videos/ytVideos'
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
// function writeDB() {
//     const ref = db.createCollection('players');
// }
// function readDB() {
//     const citiesRef = collection(db, 'users');
//     const snapshot = citiesRef.get();
//     snapshot.forEach(doc => {
//     console.log(doc.id, '=>', doc.data());
//     });
// }

const Videos = () => {
    // writeDB();
    // readDB();
    // return null;
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
            
            <VideoGallery/>

            <SearchBar/>
        </div>
    )
}

export default Videos