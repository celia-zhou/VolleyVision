import React from "react";
import { AuthProvider } from "../AccountAuth/authcontext";

const MatchSummary = ({match}) => {
    return (
        <div className="card z-depth-0 match-summary">
            <AuthProvider>
            <div className="card-content grey-text text-darken-3">
                <span className="card-title">match id: {match.number}</span>
                <p>opponent name: {match.opponent} </p>
                <p className="grey-text">win or loss: {match.winorloss}</p>
            </div>
            </AuthProvider>
        </div>
    )
}

export default MatchSummary