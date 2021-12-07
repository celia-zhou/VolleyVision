import React from 'react';
import { getAuth } from "firebase/auth";
import { getFirestore, updateDoc, getDoc, doc} from 'firebase/firestore/lite';
import { TextField } from '@mui/material';
import Box from '@mui/material/Box';
import SubmitButton from '../Matches/SubmitButton';


class ProfileForm extends React.Component {
    constructor(){
        super();
        this.state = {
            firstName: '',
            lastName: '',
            team: '',
            school: '',
            gpa: '',
            age: '',
            gradYear: '',
            jerseyNum: ''
        }
    }

    componentDidMount() {
        const db = getFirestore();
        const auth = getAuth();
        const currUser = auth.currentUser;

        getDoc(doc(db, 'users', currUser.uid)).then((snapshot) => {
            const data = snapshot.data()

            this.setState({
                firstName: data.firstName,
                lastName: data.lastName,
                team: data.team,
                school: data.school,
                gpa: data.gpa,
                age: data.age,
                gradYear: data.gradYear,
                jerseyNum: data.jerseyNum
            })
        });
    }

    updateInput = e => {
        this.setState({
          [e.target.name]: e.target.value
        });
    }

    updateInfo = e => {
        e.preventDefault();

        const db = getFirestore();
        const auth = getAuth();
        const currUser = auth.currentUser;
        const matchRef = updateDoc(doc(db, 'users', currUser.uid), { 
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            team: this.state.team,
            school: this.state.school,
            gpa: this.state.gpa,
            age: this.state.age,
            gradYear: this.state.gradYear,
            jerseyNum: this.state.jerseyNum
        }); 
        
        alert('Successfully updated information!');
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
        onSubmit={this.updateInfo}
        >
        <div>    
            <TextField
            name="firstName"
            label="First Name"
            variant="standard"
            onChange={this.updateInput}
            value={this.state.firstName}
            />
            <TextField
            name="lastName"
            label="Last Name"
            variant="standard"
            placeholder="Last Name"
            onChange={this.updateInput}
            value={this.state.lastName}
            />
            <TextField
            name="team"
            label="Team"
            variant="standard"
            placeholder="Team"
            onChange={this.updateInput}
            value={this.state.team}
            />
            <TextField
            name="school"
            label="School"
            variant="standard"
            placeholder="School"
            onChange={this.updateInput}
            value={this.state.school}
            />
            <TextField
            name="gpa"
            label="GPA"
            defaultValue="4.0"
            variant="standard"
            placeholder="GPA"
            onChange={this.updateInput}
            value={this.state.gpa}
            />
            <TextField
            name="gradYear"
            label="Grad Year"
            type="number"
            variant="standard"
            placeholder="2022"
            onChange={this.updateInput}
            value={this.state.gradYear}
            />
            <TextField
            name="age"
            label="Age"
            defaultValue="17"
            variant="standard"
            placeholder="Age"
            onChange={this.updateInput}
            value={this.state.age}
            />
            <TextField
            name="jerseyNum"
            label="Jersey Number"
            defaultValue="13"
            variant="standard"
            placeholder="Jersey Number"
            onChange={this.updateInput}
            value={this.state.jerseyNum}
            />

        <SubmitButton/> 
        </div>  
        </Box>
        );
      }
   }

export default ProfileForm;
