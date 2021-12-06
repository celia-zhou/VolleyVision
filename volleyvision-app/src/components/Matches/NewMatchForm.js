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
      videoURL: ""
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
        videoURL: this.state.videoURL
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
      videoURL: ""
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
            placeholder="Name"
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
            placeholder="Full Name"
            onChange={this.updateInput}
            value={this.state.partner}
            />
            <TextField
            name="tournament"
            label="Tournament"
            variant="standard"
            placeholder="Tournament Name"
            onChange={this.updateInput}
            value={this.state.tournament}
            />
            <TextField
            name="location"
            label="Location"
            variant="standard"
            placeholder="City, State"
            onChange={this.updateInput}
            value={this.state.location}
            />
            <TextField
            name="score"
            label="Score"
            variant="standard"
            placeholder="2-0"
            onChange={this.updateInput}
            value={this.state.score}
            />
            <TextField
            name="result"
            label="Result"
            variant="standard"
            placeholder="W or L"
            onChange={this.updateInput}
            value={this.state.result}
            />
            <TextField
            name="videoURL"
            label="Video Youtube URL"
            variant="standard"
            placeholder="https://youtube.com"
            onChange={this.updateInput}
            value={this.state.videoURL}
            />

        <SubmitButton/> 
        </div>  
        </Box>
        );
      }
   }
export default NewMatchForm;
