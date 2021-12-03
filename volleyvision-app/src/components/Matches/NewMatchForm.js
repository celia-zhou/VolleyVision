import React from 'react';
import { getAuth } from "firebase/auth";
import { getFirestore, addDoc, collection } from 'firebase/firestore/lite';
import { TextField } from '@mui/material';
import { Row, Col} from 'react-bootstrap'
import SubmitMatchButton from './SubmitButton';


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
             <form onSubmit={this.addMatch}>
                 <br/>
                 <Row className="mb-3">
                    <TextField as={Col}
                    required
                    variant="standard"
                    name="opponent"
                    placeholder="Opponent"
                    onChange={this.updateInput}
                    value={this.state.opponent}
                    />
                    <TextField as={Col}
                    required
                    variant="standard"
                    name="date"
                    placeholder="Date"
                    onChange={this.updateInput}
                    value={this.state.date}
                    type='date'
                    />    
                </Row>    
                <Row className="mb-3">
                    <TextField as={Col}
                    required
                    variant="standard"
                    name="tournament"
                    placeholder="Tournament"
                    onChange={this.updateInput}
                    value={this.state.tournament}
                    />
                    <TextField as={Col}
                    required
                    variant="standard"
                    name="partner"
                    placeholder="Partner"
                    onChange={this.updateInput}
                    value={this.state.partner}
                    />
                </Row>
                <Row className="mb-3">
                    <TextField as={Col}
                    required
                    variant="standard"
                    name="score"
                    placeholder="Score"
                    onChange={this.updateInput}
                    value={this.state.score}
                    />
                    <TextField as={Col}
                    required
                    variant="standard"
                    name="result"
                    placeholder="Result"
                    onChange={this.updateInput}
                    value={this.state.result}
                    />
                </Row>
            <br/>    
            <SubmitMatchButton/>
            </form> 
        );
      }
   }
export default NewMatchForm;
