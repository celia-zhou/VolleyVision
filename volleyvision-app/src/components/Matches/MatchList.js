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
                        <div className="col s1">
                        <span className="card-title"><h4>match id</h4></span></div>
                        <div className="col s2"><h4>opponent name</h4></div>
                        <div className="col s3"><h4>win or loss</h4></div>
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