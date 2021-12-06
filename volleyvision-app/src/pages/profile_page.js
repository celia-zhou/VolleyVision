import React, { useEffect, useState} from 'react'
import EditButton from '../components/Profile/EditButton'
import SearchBar from '../components/Topbar/Searchbar'
import SideBar from '../components/Sidebar/Sidebar'
import AuthButton from '../components/Youtube/AuthorizeButton'
import styled from 'styled-components'
import { ListItemText } from '@material-ui/core'
import ReactRoundedImage from "react-rounded-image"
import photo from './volleyball.jpeg'
import { getFirestore, doc, getDoc } from 'firebase/firestore/lite'
import { getAuth } from 'firebase/auth'
import Box from '@mui/material/Box'


const Container = styled.div`
    position: absolute;
    left: 85px;
    top: 115px;
    font: Times New Roman;
    font-size: 30px;
    width: 330px;
    height: 150px;
    @media screen and (min-width: 100px) and (max-width:1100px) {
        float: top;
        max-width: 50vw
 `  

const NameContainer = styled.div`
    position: absolute;
    left: 670px;
    top: 440px;
    font: Times New Roman;
    width: 300px;
    height: 150px;
`

const ProfileContainer1 = styled.div`
    position: absolute;
    left: 400px;
    top: 525px;
    font: Times New Roman;
    font-size: 30px;
    width: 300px;
    height: 150px;
`

const ProfileContainer2 = styled.div`
    position: absolute;
    left: 750px;
    top: 525px;
    font: Times New Roman;
    font-size: 30px;
    width: 300px;
    height: 150px;
    font-weight: bold;
`

const ProfileContainer3 = styled.div`
    position: absolute;
    left: 1000px;
    top: 525px;
    font: Times New Roman;
    font-size: 30px;
    width: 300px;
    height: 150px;
`

const EditContainer = styled.div`
    position: absolute;
    left: 670px;
    top: 580px;
    font: Times New Roman;
    font-size: 30px;
    width: 300px;
    height: 150px;
`
// const AuthContainer = styled.div`
//     position: absolute;
//     left: 650px;
//     top: 650px;
//     font: Times New Roman;
//     font-size: 30px;
//     width: 300px;
//     height: 150px;
// `

const ImageContainer = styled.div`
    position: absolute;
    left: 620px;
    top: 150px;
    width: 400px;
    height: 150px;
`

export default function Profile() {
    const [userData, setUserData] = useState({
        firstName: '',
        lastName: '',
        team: '',
        school: '',
        gpa: '',
        age: '',
        gradYear: '',
        jerseyNum: ''
    })    

    useEffect(() => {
        const db = getFirestore();
        const auth = getAuth();
        const currUser = auth.currentUser;

        getDoc(doc(db, 'users', currUser.uid)).then((snapshot) => {
            const fireData = snapshot.data();
            setUserData(fireData);
        })
    });

    return (
        <div>
            <SideBar/>
            <Box
        component="form"
        sx={{
            '& .MuiTextField-root': { m: 4, width: '30ch' },
        }}
        noValidate
        autoComplete="off"
        >
            <ImageContainer>
                <ReactRoundedImage
                image={photo}
                roundedColor="#321124"
                imageWidth="275"
                imageHeight="275"
                roundedSize="15"
                />
            </ImageContainer>
            <Container>
                <b>Profile</b>
            </Container>

            <NameContainer>
                <h1>{userData.firstName} {userData.lastName}</h1>
            </NameContainer>

            <ProfileContainer1>
                <ListItemText> Team: {userData.team} </ListItemText>
                <ListItemText>School: {userData.school}</ListItemText>
                
            </ProfileContainer1>
            
            <ProfileContainer2>
                <ListItemText>Age: {userData.age}</ListItemText>
                <ListItemText>GPA: {userData.gpa}</ListItemText>
            </ProfileContainer2>
            
            <ProfileContainer3>
                <ListItemText>Graduation Year: {userData.gradYear} </ListItemText>
                <ListItemText>Jersey Number: {userData.jerseyNum} </ListItemText>
            </ProfileContainer3>

            <EditContainer>
                {/* <ListItemText>Edit Profile</ListItemText> */}
                <EditButton/>
            </EditContainer>
        </Box>
            {/* <AuthContainer>
                <AuthButton/>
            </AuthContainer> */}
           
            <SearchBar/>
    
        </div>

        
    )
}
