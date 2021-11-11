import React, {Component} from "react"
import MatchList from "../components/Matches/MatchList"
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from "redux"

import SearchBar from '../components/Topbar/Searchbar'
import SideBar from '../components/Sidebar/Sidebar'
import styled from 'styled-components'
import PlayerList from '../components/PlayerList/PlayerList'

import { AuthProvider } from "../components/AccountAuth/authcontext"
import { Link } from "react-router-dom"

class Dashboard extends Component {
    render(){

        const {matches} = this.props;

        return (
            
            <div className="dashboard-container">
                <AuthProvider>
                <SideBar/>
                <br /><br /><br />
                <br /><br /><br />
                <div className="row" style={{marginBottom:'1%'}}>
                    <div className="col 1"><h2 style={{float:'left', marginLeft:'20%'}}>RECENT MATCHES</h2></div>
                    <div className="col 2">
                        <Link to="/create">
                            <button className="btn pink lighten-1 z-depth-0" style={{marginRight: '19%', float:'right'}}>Create Match
                            </button>
                        </Link>
                    </div>
                </div>
                <div className="row">
                    <div className= "col s12 m6" style={{float: 'center', marginLeft:'10%', marginRight:'9%'}}>
                        <MatchList matches={matches}/>
                    </div>
                    {/* <p>testing</p>
                    <div className="col s12 m5 offset m1">
                    <div>
                        <p>Notifications</p>
                    </div>
                    </div> */}
                </div>
                <SearchBar/>
                </AuthProvider>
            </div>
            
        )
    }
}

const mapStatetoProps = (state) => {
    console.log(state)
    return {
        matches: state.firestore.ordered.matches
    }
}
export default compose(
    connect(mapStatetoProps),
    firestoreConnect([
        {collection: 'matches'}
    ])
)(Dashboard)