import React from 'react';
import CourtImg from '../../images/vballCourt.jpeg';
export default function ShotChart() {
    return (
        <div>
            <img src={CourtImg} alt="Volleyball Court" usemap="#workmap"/>
            <map name="workmap">
                <area shape="rect" coords="34,44,270,350" alt="Computer" href="http://localhost:3000/match_summary"/>
            </map>
        </div>
        
    )
}

