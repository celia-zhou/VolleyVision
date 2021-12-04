import React from "react";
import { getAuth } from "firebase/auth";
import { getFirestore, addDoc, collection } from "firebase/firestore/lite";

class NewMatchForm extends React.Component {
  constructor() {
    super();
    this.state = {
      date: "",
      partner: "",
      opponent: "",
      tournament: "",
      location: "",
      score: "",
      result: "",
    };
  }

  updateInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  addMatch = (e) => {
    e.preventDefault();

    const db = getFirestore();
    const auth = getAuth();
    const currUser = auth.currentUser;
    
    const matchRef = addDoc(
      collection(db, "users/" + currUser.uid + "/matches"),
      {
        date: this.state.date,
        partner: this.state.partner,
        opponent: this.state.opponent,
        tournament: this.state.tournament,
        location: this.state.location,
        score: this.state.score,
        result: this.state.result,
      }
    );

    this.setState({
      date: "",
      partner: "",
      opponent: "",
      tournament: "",
      location: "",
      score: "",
      result: "",
    });
  };

  render() {
    return (
      <div style = {{width: "80%"}}> 
          <form onSubmit={this.addMatch} className="white" style={{padding:"30px"}}>
                <h5 className="grey-text text-darken-3"> Create Match </h5>
                <div className="input-field">
                    <label htmlFor="opponent"> Opponent</label>
                    <input
                        type="text"
                        name="opponent"
                        id="opponent"
                        onChange={this.updateInput} 
                        value={this.state.opponent}
                    />
                </div>
                <div className="input-field">
                    <label htmlFor="tournament"> Tournament</label>
                    <input
                        type="text"
                        id="tournament"
                        name="tournament"
                        onChange={this.updateInput}
                        value={this.state.tournament}
                    />
                </div>
                <div className="input-field">
                <label htmlFor="date"> Date</label><br/>
                    <input
                        type="date"
                        id="date"
                        name="date"
                        onChange={this.updateInput}
                        value={this.state.date}
                    />
                </div>
                <div className="input-field">
                <label htmlFor="partner"> Partner</label>
                    <input
                        type="text"
                        id="partner"
                        name="partner"
                        onChange={this.updateInput}
                        value={this.state.partner}
                    />
                </div>
                <div className="input-field">
                    <label htmlFor="location"> Location </label>
                    <input
                        type="text"
                        id="location"
                        name="location"
                        onChange={this.updateInput}
                        value={this.state.location}
                    />
                </div>
                <div className="input-field">
                    <label htmlFor="result"> Result</label>
                    <input
                        type="text"
                        id="result"
                        name="result"
                        onChange={this.updateInput}
                        value={this.state.result}
                    />
                </div>
                <div className="input-field">
                    <button className="btn pink lighten-1 z-depth-0" type="submit">Submit</button>
                </div>
        </form>
      </div>
    );
  }
}

export default NewMatchForm;
