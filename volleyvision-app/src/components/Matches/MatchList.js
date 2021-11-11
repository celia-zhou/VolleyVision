import React from "react";
import MatchSummary from "./MatchSummary";
import { Link } from "react-router-dom";
import { AuthProvider } from "../AccountAuth/authcontext";
const MatchList = ({matches}) => {
    return (
        <div className="match-list section">
            <AuthProvider>
            <div className="card z-depth-1 match-categories">
                <div className="card-content grey-text text-darken-3">
                    <div className="row">
                        <div className="col s1"><h4>Match Number</h4></div>
                        <div className="col s2"><h4>Date</h4></div>
                        <div className="col s3"><h4>Opponent</h4></div>
                        <div className="col s4"><h4>Tournament</h4></div>
                        <div className="col s5"><h4>Location</h4></div>
                        <div className="col s6"><h4>Result</h4></div>
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