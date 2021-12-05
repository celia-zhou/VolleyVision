import React from "react";
import { getAuth } from "firebase/auth";
import { getFirestore, addDoc, collection } from "firebase/firestore/lite";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import SubmitButton from "./SubmitButton";


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
      <Box
        component="form"
        sx={{
            '& .MuiTextField-root': { m: 4, width: '30ch' },
        }}
        noValidate
        autoComplete="off"
        onSubmit={this.addMatch}
        >
        <div>    
            <TextField
            name="opponent"
            label="Opponent"
            variant="standard"
            placeholder="opponent"
            onChange={this.updateInput}
            value={this.state.opponent}
            />
            <TextField
            name="date"
            variant="standard"
            type="date"
            onChange={this.updateInput}
            value={this.state.date}
            />
            <TextField
            name="partner"
            label="Partner"
            variant="standard"
            placeholder="Partner"
            onChange={this.updateInput}
            value={this.state.partner}
            />
            <TextField
            name="tournament"
            label="Tournament"
            variant="standard"
            placeholder="Tournament"
            onChange={this.updateInput}
            value={this.state.tournament}
            />
            <TextField
            name="location"
            label="Location"
            variant="standard"
            placeholder="Location"
            onChange={this.updateInput}
            value={this.state.location}
            />
            <TextField
            name="score"
            label="Score"
            variant="standard"
            placeholder="Score"
            onChange={this.updateInput}
            value={this.state.score}
            />
            <TextField
            name="result"
            label="Result"
            defaultValue="13"
            variant="standard"
            placeholder="Result"
            onChange={this.updateInput}
            value={this.state.result}
            />

        <SubmitButton/> 
        </div>  
        </Box>
        );
      }
   }
export default NewMatchForm;
