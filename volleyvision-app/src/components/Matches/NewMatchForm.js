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
      <div>
        <form onSubmit={this.addMatch}>
          <input
            type="text"
            name="opponent"
            placeholder="Opponent"
            onChange={this.updateInput}
            value={this.state.opponent}
          />
          <input
            type="text"
            name="tournament"
            placeholder="Tournament Name"
            onChange={this.updateInput}
            value={this.state.tournament}
          />
          <input
            type="date"
            name="date"
            placeholder="Date"
            onChange={this.updateInput}
            value={this.state.date}
          />
          <input
            type="text"
            name="partner"
            placeholder="Partner"
            onChange={this.updateInput}
            value={this.state.partner}
          />
          <input
            type="text"
            name="location"
            placeholder="Location"
            onChange={this.updateInput}
            value={this.state.location}
          />
          <input
            type="text"
            name="score"
            placeholder="Score"
            onChange={this.updateInput}
            value={this.state.score}
          />
          <input
            type="text"
            name="result"
            placeholder="Result"
            onChange={this.updateInput}
            value={this.state.result}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default NewMatchForm;
