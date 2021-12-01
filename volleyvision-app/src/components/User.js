import React from 'react';
import { getFirestore, collection, addDoc, getDocs, setDoc, doc} from 'firebase/firestore/lite'


// testing 

class User extends React.Component {
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

        const db = getFirestore();
        // const userRef = addDoc(collection(db, 'profiles'), {
        //   fullname: this.state.fullname,
        //   email: this.state.email
        // });  
        // this.setState({
        //   fullname: '',
        //   email: ''
        // });

        const userRef = setDoc(doc(db, "id_profiles", "LA"), {
          fullname: this.state.fullname,
          email: this.state.email
        });  
        this.setState({
          fullname: '',
          email: ''
        });
      };

    displayUser = e => {
        e.preventDefault();
        const db = getFirestore();

        const profileRef = collection(db, 'profiles');

        getDocs(profileRef).then((snapshot) => {
            const data = snapshot.docs.map((doc) => ({
              id: doc.id,
              ...doc.data(),
            }));
            console.log("All data in 'books' collection", data);
    });
};

    render() {
    return (
        <div>
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
            <button onClick={this.displayUser}>Load Data</button>
        </div>
        );
      }
   }
export default User;