import React from 'react';
import CourtImg from '../../images/vballCourt.jpeg';
export default function ShotChart() {
    const handleClick = (index) => {
        console.log(index)
    }
    return (
        <div>
            <img src={CourtImg} alt="Volleyball Court" useMap="#shotchart"/>
            <map name="shotchart">
                {/* <area shape="rect" coords="55, 191, 100,234" alt="Box1" onClick={handleClick(1)}/> */}
                <area shape="rect" coords="55, 191, 100,234" alt="Box1" href="#" onClick={handleClick(1)}/>
            </map>
        </div>
        
    )
}

