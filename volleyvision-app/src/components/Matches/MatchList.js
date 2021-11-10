import React from "react";
import MatchSummary from "./MatchSummary";
import { Link } from "react-router-dom";
import { AuthProvider } from "../AccountAuth/authcontext";
const MatchList = ({matches}) => {
    return (
        <div className="match-list section">
            <AuthProvider>
            {matches && matches.map(match => {
                return (
                    <Link to={'/match/' +  match.id}>
                        <MatchSummary match={match} key={match.id} />
                    </Link>
                )
            })}
            </AuthProvider>
        </div>
    )
}

export default MatchList