import React from 'react'
import styled from 'styled-components'
import Menu from './Menu/Menu'
import Profile from './Profile'
import TempMenu from './Menu/TempMenu'

const Container = styled.div`
    background-color: #DBEBFB;
    position: absolute;
    left: 0;
    top: 20;
    bottom: 20px;
    width: 8rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media all and (min-width: 375px) {
        min-width:20px
    }
`

const Sidebar = () => {
    return (

        <Container>
            <Profile />
        
        </Container>

    )
}

export default Sidebar