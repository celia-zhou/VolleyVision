import React from 'react'
import SearchBar from '../components/Topbar/Searchbar'
import SideBar from '../components/Sidebar/Sidebar'
import styled from 'styled-components'
import EditableProf from '../components/Profile/ProfileForm'

const Container = styled.div`
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

const ListContainer = styled.div`
    position: absolute;
    margin-top: 200px;
    left:280px;
    background-color: white;
    font-size: 20px;
    width:60%
`

const Editable_Profile = () => {
    return (
        <div>
            <SideBar/>
            <Container>
                <b>Edit Profile</b>
            </Container>

            <ListContainer>
                <EditableProf/>
            </ListContainer>
            
            <SearchBar/>
        
        </div>

        
    )
}

export default Editable_Profile