import React from 'react';
import { getFirestore, collection, addDoc } from 'firebase/firestore'

class Stats extends React.Component {
    constructor() {
        super();
        this.state = {
            email: '',
            fullname: ''
        };
    }

    updateInput = e => {
        this.setState({
          [e.target.name]: e.target.value
        });
    }

    addUser = e => {
        e.preventDefault();
        // db.settings({
        //   timestampsInSnapshots: true
        // });
        // const userRef = db.collection('profiles').add({
        //   fullname: this.state.fullname,
        //   email: this.state.email
        // });  
        // this.setState({
        //   fullname: '',
        //   email: ''
        // });
        const db = getFirestore();
        const userRef = addDoc(collection(db, 'statistics'), {
          fullname: this.state.fullname,
          email: this.state.email
        });  
        this.setState({
          fullname: '',
          email: ''
        });
      };
      
    
    render() {
    return (
        <form onSubmit={this.addUser}>
          <input
            type="text"
            name="fullname"
            placeholder="Full name"
            onChange={this.updateInput}
            value={this.state.fullname}
          />
          <input
            type="email"
            name="email"
            placeholder="Full name"
            onChange={this.updateInput}
            value={this.state.email}
          />
          <button type="submit">Submit</button>
        </form>
        );
      }
   }

export default Stats;