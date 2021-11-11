import React from "react";
import { AuthProvider } from "../AccountAuth/authcontext";

const MatchSummary = ({match}) => {
    return (
        <div className="card z-depth-0 match-summary">
            <AuthProvider>
            {/* <div className="card-content grey-text text-darken-3">
                <span className="card-title">match id: {match.number}</span>
                <p>opponent name: {match.opponent} </p>
                <p className="grey-text">win or loss: {match.winorloss}</p>
            </div> */}
            <div className="card-content grey-text text-darken-3">
                <div className="row">
                    <div className="col s1">
                    <span className="card-title">{match.number}</span></div>
                    <div className="col s2"><p>{match.opponent}  </p></div>
                    <div className="col s3"><p>{match.winorloss} </p></div>
                </div>    
            </div>         
            </AuthProvider>
        </div>
    )
}

export default MatchSummary