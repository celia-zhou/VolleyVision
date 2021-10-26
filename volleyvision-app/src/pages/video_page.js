import React from 'react'

import UploadButton from '../components/upload_button'
import SearchBar from '../components/Topbar/Searchbar'
import Sidebar from '../components/Sidebar/Sidebar'


const Container = styled.div`
    position: absolute;
    left: 300px;
    top: 65px;
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
                <UploadButton/>
            </Container>
            <SearchBar/>
        </div>
    )
}

export default Videos