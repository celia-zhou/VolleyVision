import React from 'react'
<<<<<<< HEAD

import SideBar from '../components/Sidebar/Sidebar'
=======
import SearchBar from '../components/Topbar/Searchbar'
import SideBar from '../components/Sidebar/Sidebar'
import styled from 'styled-components'

const Container = styled.div`
    position: absolute;
    left: 300px;
    top: 65px;
    font: Times New Roman;
    font-size: 30px;
    width: 200px;
    height: 150px;
`
>>>>>>> feature/upload/celia

const Dashboard = () => {
    return (
        <div>
            <SideBar/>
<<<<<<< HEAD
=======
            <Container>
                Dashboard
            </Container>
            <SearchBar/>
    
>>>>>>> feature/upload/celia
        </div>
    )
}

export default Dashboard
