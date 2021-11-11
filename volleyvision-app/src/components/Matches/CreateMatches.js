import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createMatch } from '../../store/actions/matchActions'
import SearchBar from '../Topbar/Searchbar'
import SideBar from '../Sidebar/Sidebar'
import styled from 'styled-components'
import PlayerList from '../PlayerList/PlayerList'
import { Link } from 'react-router-dom'

import { AuthProvider } from "../AccountAuth/authcontext"

class CreateMatch extends Component {    

    state = {
        id: '',
        opponent: '',
        winorloss: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.createMatch(this.state)
    }

    render() {
        return (
            <div className="container">
                <AuthProvider>
                <SideBar/>
                <br /><br /><br />
                <br /><br /><br />
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="grey-text text-darken-3"> Create Match </h5>
                    <div className="input-field">
                        <label htmlFor="opponent">Opponent</label>
                        <input type="text" id="opponent" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="winorloss"> Win Or Loss?</label>
                        <textarea name="" 
                            id="winorloss" 
                            cols="30" 
                            rows="30" 
                            className="materialize-textarea"
                            onChange={this.handleChange}
                        >
                        </textarea>
                    </div>
                    <div className="input-field">
                        <Link to="/player_dashboard">
                        <button className="btn pink lighten-1 z-depth-0">Create Match</button>
                        </Link>
                    </div>
                </form>
                <SearchBar/>
                </AuthProvider>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createMatch: (match) => dispatch(createMatch(match))
    }
}
export default connect(null, mapDispatchToProps)(CreateMatch)

