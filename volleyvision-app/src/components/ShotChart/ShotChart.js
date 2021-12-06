import React from 'react';
import CourtImg from '../../images/vballCourt.jpeg';
import ImageMapper from 'react-image-mapper';

export default function ShotChart() {
    const [mapAreas, setMapAreas] = React.useState({
        name: "courtMap",
        areas: [
          { id: 1, shape: "rect", coords: [60,215, 109,267]},
          { id: 2, shape: "rect", coords: [109,215, 158,267]},
          { id: 3, shape: "rect", coords: [158,215, 209,267]},
        ]
      });
    
    return (
        <div>
            <ImageMapper src={CourtImg} map={mapAreas} fillColor='rgba(24, 194, 41, 0.5)'/>
            {/* <img src={CourtImg} alt="Volleyball Court" useMap="#shotchart"/>
            <map name="shotchart" sx={{
            '& .MuiTextField-root': { m: 4, width: '30ch' },
            '& .selector:hover': {color: 'blue' }
        }}>
                <area shape="rect" coords="60,215, 109,267" alt="Box1" href="#" onClick={changeBackground}/> 
                <area shape="rect" coords="109,215, 158,267" alt="Box2" href="#" onClick={() => handleClick(1)}/>
                <area shape="rect" coords="158,215, 209,267" alt="Box3" href="#" onClick={() => handleClick(2)}/>
                <area shape="rect" coords="209,215, 264,267" alt="Box4" href="#" onClick={() => handleClick(3)}/>
                <area shape="rect" coords="60,267, 109,318" alt="Box5" href="#" onClick={() => handleClick(4)}/>
                <area shape="rect" coords="109,267, 158,318" alt="Box6" href="#" onClick={() => handleClick(5)}/>
                <area shape="rect" coords="158,267, 209,318" alt="Box7" href="#" onClick={() => handleClick(6)}/>
                <area shape="rect" coords="209,267, 264,318" alt="Box8" href="#" onClick={() => handleClick(7)}/>
                <area shape="rect" coords="60,318, 109,369" alt="Box9" href="#" onClick={() => handleClick(8)}/>
                <area shape="rect" coords="109,318, 158,369" alt="Box10" href="#" onClick={() => handleClick(9)}/>
                <area shape="rect" coords="158,318, 209,369" alt="Box11" href="#" onClick={() => handleClick(10)}/>
                <area shape="rect" coords="209,318, 264,369" alt="Box12" href="#" onClick={() => handleClick(11)}/>
            </map> */}
        </div>
        
    )
}

