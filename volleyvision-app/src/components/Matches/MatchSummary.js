import React from "react";
import { AuthProvider } from "../AccountAuth/authcontext";

const MatchSummary = ({match}) => {
    return (
        // <div className="card white z-depth-0 match-summary">
        <div style={{backgroundColor:'white'}}>
            <AuthProvider>
            {/* <div className="card-content grey-text text-darken-3">
                <span className="card-title">match id: {match.number}</span>
                <p>opponent name: {match.opponent} </p>
                <p className="grey-text">win or loss: {match.winorloss}</p>
            </div> */}
            <hr class="dotted" style={{border: '1px', borderColor: 'whitesmoke'}}/>
            <div className="card-content white grey-text text-darken-3">
                
                <div className="row" >
                    <div className="col s1">{match.number}</div>
                    <div className="col s2">{match.date}</div>
                    <div className="col s3">{match.opponent}</div>
                    <div className="col s4">{match.tournament}</div>
                    <div className="col s5">{match.location}</div>
                    <div className="col s6">{match.winorloss}</div>
                </div>    
            </div>         
            </AuthProvider>
        </div>
    )
}

export default MatchSummary