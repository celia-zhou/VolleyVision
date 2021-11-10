import React from 'react'
import styled from 'styled-components'
import Menu from './Menu/Menu'
import Profile from './Profile'

const Container = styled.div`
    background-color: #FFFFFF;
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
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
            <Menu />
           
        </Container>
    )
}

export default Sidebar