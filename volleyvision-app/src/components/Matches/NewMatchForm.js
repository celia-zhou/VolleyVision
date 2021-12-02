import React from 'react';
import { getAuth } from "firebase/auth";
import { getFirestore, addDoc, collection } from 'firebase/firestore/lite';
import { TextField } from '@mui/material';

class NewMatchForm extends React.Component {
    constructor() {
        super();
        this.state = {
            date: '', 
            partner: '',
            opponent: '', 
            tournament: '', 
            location: '',
            score: '',
            result: ''
        };
    }

    updateInput = e => {
        this.setState({
          [e.target.name]: e.target.value
        });
    }

    addMatch = e => {
        e.preventDefault();

        const db = getFirestore();
        const auth = getAuth();
        const currUser = auth.currentUser;

        const matchRef = addDoc(collection(db, 'users/'+currUser.uid+'/matches'), { 
            date: this.state.date, 
            partner: this.state.partner,
            opponent: this.state.opponent, 
            tournament: this.state.tournament, 
            location: this.state.location,
            score: this.state.score,
            result: this.state.result
        });  
        
        this.setState({
            date: '', 
            partner: '',
            opponent: '', 
            tournament: '', 
            location: '',
            score: '',
            result: ''
        });
};

    render() {
    return (
        <div className="container">
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
            </div>
        // <div className="container">
        //      <form onSubmit={this.addMatch} className="white">
        //         <div className="input-field">
        //                 <TextField
        //                 required
        //                 id="opponent"
        //                 label="Opponent"
        //                 defaultValue="Opponent"
        //                 />
                    
        //             <input
        //                 type="text"
        //                 name="opponent"
        //                 placeholder="Opponent"
        //                 onChange={this.updateInput}
        //                 value={this.state.opponent}
        //                 position="relative"
        //             /> 
        //         </div>
        //         <div className="input-field">
        //             <label htmlFor="tournament">Tournament Name</label>
        //             <input
        //                 type="text"
        //                 name="tournament"
        //                 placeholder="Tournament Name"
        //                 onChange={this.updateInput}
        //                 value={this.state.tournament}
        //             />
        //         </div>
        //         <div className="input-field">
        //             <label htmlFor="date">Match Date</label>
        //             <input
        //                 type="date"
        //                 name="date"
        //                 onChange={this.updateInput}
        //                 value={this.state.date}
        //             />
        //         </div>
        //         <div className="input-field">
        //             <label htmlFor="partner">Team Partner</label>
        //             <input
        //                 type="text"
        //                 name="partner"
        //                 placeholder="Team Partner"
        //                 onChange={this.updateInput}
        //                 value={this.state.partner}
        //             />
        //         </div>
        //         <div className="input-field">
        //             <label htmlFor="location">Location</label>
        //             <input
        //                 type="text"
        //                 name="location"
        //                 placeholder="Location"
        //                 onChange={this.updateInput}
        //                 value={this.state.location}
        //             />
        //         </div>
        //         <div className="input-field">
        //             <label htmlFor="score">Score</label>
        //             <input
        //                 type="text"
        //                 name="score"
        //                 placeholder="Score"
        //                 onChange={this.updateInput}
        //                 value={this.state.score}
        //             />
        //         </div>
        //         <div className="dropdown">
        //             <label htmlFor="result">Result</label>
        //             <button class="dropbtn">Select</button>
        //                 <div class="dropdown-content" value={this.state.result}>
        //                     <a href="#">Win</a>
        //                     <a href="#">Loss</a>
        //                 </div>
        //         </div>
        //     <button type="submit">Submit</button>
        //     </form> 
        //  </div> 
        );
      }
   }
export default NewMatchForm;
