import React from 'react'
import styled from 'styled-components'
import SearchBar from '../components/Topbar/Searchbar'
import SideBar from '../components/Sidebar/Sidebar'
import NewMatchForm from '../components/Matches/NewMatchForm'


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
    left: 100px;
    top: 200px;
    font: Times New Roman;
    background-color: white;
    font-size: 30px;
    width: 87%;
    @media screen and (min-width: 100px) and (max-width:1100px) {
        float: left;
        max-width: 50vw
    }
`


const Add_Match = () => {
    return (
        <div>
            <SideBar/>
            
            <Container>
                Create Match
            </Container>

<ListContainer>
<NewMatchForm/>
</ListContainer>



            <SearchBar/>
        </div>
    )
}

export default Add_Match