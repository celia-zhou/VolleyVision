import React from "react";
import MatchSummary from "./MatchSummary";
import { Link } from "react-router-dom";
import { AuthProvider } from "../AccountAuth/authcontext";
const MatchList = ({matches}) => {
    return (
        <div style={{backgroundColor:'white', paddingBottom: '1%', marginTop: '2%'}}>
            <AuthProvider>
            <br />
            <div className="card-horizontal white z-depth-0 match-categories" style={{backgroundColor:'white', paddingTop:'2px'}}>
                <div className="card-content grey-text text-darken-3" >
                    <div className="row">
                        <div className="col s1"><h6>Match Number</h6></div>
                        <div className="col s2"><h6>Date</h6></div>
                        <div className="col s3"><h6>Opponent</h6></div>
                        <div className="col s4"><h6>Tournament</h6></div>
                        <div className="col s5"><h6>Location</h6></div>
                        <div className="col s6"><h6>Result</h6></div>
                    </div>    
                </div>    
            </div>
            {matches && matches.map(match => {
                return (
                    <Link to={'/match/' +  match.id + '/'}>
                        <MatchSummary match={match} key={match.id} />
                    </Link>
                )
            })}
            </AuthProvider>
        </div>
    )
}

export default MatchList
