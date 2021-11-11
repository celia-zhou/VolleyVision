import React from 'react'
import SearchBar from '../components/Topbar/Searchbar'
import SideBar from '../components/Sidebar/Sidebar'
import styled from 'styled-components'
import EditableProf from '../components/Profile/EditableProfile'

const DashContainer = styled.div`
    position: absolute;
    float:center;
    left: 15%;
    top: 120px;
    font: Times New Roman;
    font-size: 30px;
    width: 200px;
    height: 150px;
`

const ListContainer = styled.div`
    position: relative;
    float:center;
    left: 15%;
    top: 130px;
    font: Times New Roman;
    background-color: white;
    font-size: 20px;
    width: 75%;
    height: 60%;
`

const Editable_Profile = () => {
    return (
        <div>
            <SideBar/>
            <DashContainer>
                <h4> Edit Profile </h4>
            </DashContainer>

            <ListContainer>
                <EditableProf/>
            </ListContainer>
            
            <SearchBar/>
        
        </div>

        
    )
}

export default Editable_Profile