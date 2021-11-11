import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createMatch } from '../../store/actions/matchActions'
import SearchBar from '../Topbar/Searchbar'
import SideBar from '../Sidebar/Sidebar'
import styled from 'styled-components'
import PlayerList from '../PlayerList/PlayerList'
import { Redirect, Link } from 'react-router-dom'

import { AuthProvider } from "../AccountAuth/authcontext"

class CreateMatch extends Component {    

    state = {
        number: '',
        date: '',
        opponent: '',
        tournament: '',
        location: '',
        winorloss: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.createMatch(this.state);
        this.props.history.push('/player_dashboard')
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
                        <label htmlFor="number">Match Number</label>
                        <input type="number" id="number" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="date">Match Date</label><br/>
                        <input type="date" id="date" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="opponent">Opponent</label>
                        <input type="text" id="opponent" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="tournament">Tournament Name</label>
                        <input type="text" id="tournament" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="location">Location</label>
                        <input type="text" id="location" onChange={this.handleChange}/>
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
                        <button className="btn pink lighten-1 z-depth-0">Create Match</button>
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

