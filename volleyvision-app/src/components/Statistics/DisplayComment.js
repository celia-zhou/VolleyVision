import styled from "styled-components";
import React, { useState, useEffect } from "react";
import { getAuth } from "firebase/auth";
import { getFirestore, getDoc, setDoc, doc } from "firebase/firestore/lite";
import { useParams } from "react-router-dom";

export const DisplayCommentForm = () => {
  //const form = useRef();
  const [state, setState] = useState({playerComments: '', coachComments: ''});
  const { id } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const auth = getAuth();
    const currUser = auth.currentUser;
    let path = `users/${currUser.uid}/matches/${id}/comments`

    
    getDoc(doc(db, path, 'PlayerComments')).then((snapshot) => {
      const data = snapshot.data();
    
      if (data != null){
        if (data.playerComments != null) {
            setState({
                playerComments: data.playerComments
            })
          }
      }
  });

  getDoc(doc(db, path, 'CoachComments')).then((snapshot) => {
    const data = snapshot.data();
  
    if (data != null){
      if(data.coachComments != null) {
        setState({
            coachComments: data.coachComments
        })
      }
    }
});
  }, []);

  return (
    <div>
        Player Comments
        <textarea
          type="string"
          name="comments"
          value={state.playerComments}
          rows="3"
          cols="93"
        />
        <br/><br/>
        Coach Comments
        <textarea
          type="string"
          name="comments"
          value={state.coachComments}
          rows="3"
          cols="93"
        />
    </div>
  );
};

export default DisplayCommentForm;
