import React from 'react';
import { getAuth } from "firebase/auth";
import { getFirestore, addDoc, collection } from 'firebase/firestore/lite';
import { TextField } from '@mui/material';
import { Row, Col} from 'react-bootstrap'
import SubmitMatchButton from './SubmitButton';
import Box from '@mui/material/Box';
import SubmitButton from '../Matches/SubmitButton';


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
            required
            variant="standard"
            name="opponent"
            placeholder="Opponent"
            onChange={this.updateInput}
            value={this.state.opponent}
            />
            <TextField
            required
            variant="standard"
            name="date"
            placeholder="Date"
            onChange={this.updateInput}
            value={this.state.date}
            type='date'
            />    
            <TextField
            required
            variant="standard"
            name="tournament"
            placeholder="Tournament"
            onChange={this.updateInput}
            value={this.state.tournament}
            />
            <TextField 
            required
            variant="standard"
            name="partner"
            placeholder="Partner"
            onChange={this.updateInput}
            value={this.state.partner}
            />
            <TextField 
            required
            variant="standard"
            name="score"
            placeholder="Score"
            onChange={this.updateInput}
            value={this.state.score}
            />
            <TextField
            required
            variant="standard"
            name="result"
            placeholder="Result"
            onChange={this.updateInput}
            value={this.state.result}
            />
        </div>  
        <SubmitButton align='center'/> 
        </Box>
        );
      }
   }
export default NewMatchForm;
