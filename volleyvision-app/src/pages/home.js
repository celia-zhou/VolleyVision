// NPM
import React from 'react';
import NavBar from '../components/NavBar/Navbar';

// styles
import '../styles/home.css'

//images
//import phgrey from '../images/placeholder-gray.png';


const Home = () => {
    return (
        <div>
            <NavBar />
            <div className="body-container" id="home">
                <div className="announcement" style={{textAlign: 'center'}}>
                    <br /><br /><br /><br />
                    <h1> Join the #3 Beach Club in the Nation! </h1> <br />
                    <h1> All skill levels are welcome. </h1><br />
                    <h1> Your first practice is free! </h1>
                    <br /><br /><br /><br />
                </div>
                <div class="row">
                    <div class="column3">
                        <img className="phbody" 
                        alt="placeholder img" 
                        src = "https://pbs.twimg.com/media/Ck23f_LVEAAICoE.jpg"/>
                    </div>
                    <div class="column3">
                        <img className="phbody" 
                        alt="placeholder img" 
                        src = "https://pbs.twimg.com/media/DGG75lXVwAAgGvW?format=jpg&name=900x900"/>
                    </div>
                    <div class="column3">
                        <img className="phbody" 
                        alt="placeholder img" 
                        src = "https://pbs.twimg.com/media/CwDSdODUEAASJP3.jpg:large"/>
                    </div>

                </div>
                <br /> <br /> <br />
                <div className="announcement" style={{textAlign: 'center' ,paddingLeft: '20%',paddingRight:'20%'}}>
                    <h1 >
                    Arizona's top beginner through elite year-round sand volleyball programs run by Ryan Mariano!
                    </h1>
                </div>
                <br /> <br /> <br />
                <div class="row">
                    <div class="column2" style={{paddingLeft: '20%'}}>
                        <img 
                            alt="rpm group"
                            src="https://rpmsand.com/wp-content/uploads/2021/01/slide1.jpg"
                            width= "70%"
                            height="70%"
                        />  
                        <img 
                            alt="rpm group"
                            src="https://rpmsand.com/wp-content/uploads/2021/01/slide3.jpg"
                            width= "70%"
                            height="70%"
                        />
                        <br></br>
                        <div><a class="button" href="https://rpmsand.com">LEARN MORE → </a></div>
                    </div>
                    <div class="column2" style={{paddingRight: '20%'}}>
                        <p>RPM Sand is dedicated to providing high-quality 
                            sand volleyball training to all players (professional and youth) 
                            throughout the United States. RPM Sand has been developing players 
                            across all levels on the beach. Members range from Olympians, AVP 
                            and FIVB Pro Players, Youth AAU National Champions, USAV A1 National 
                            Team Players, USAV A2 Camp Players, Current NCAA Division 1 Players, 
                            Arizona High Performance Team Players, CBVA Tournament Winners, 
                            High School State Champions, and USAV Junior Beach Tour Winners.
                        </p>
                        <p>
                            We are proud of all of our players and strive to help each and 
                            every player meet their individual goals – 
                            all the while having fun and working hard. 
                            We love what we do! 
                        </p>
                    </div>
                </div>
            </div>
            <br /><br /><br /><br /><br /><br /><br />
            <div className="footer">
                <p>Copyright 2021 - All rights reserved by RPM Sand.</p>
            </div>
        </div>
        
    );
}

export default Home;