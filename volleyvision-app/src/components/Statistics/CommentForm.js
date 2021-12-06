import styled from "styled-components";
import React, { useState, useEffect } from "react";
import { getAuth } from "firebase/auth";
import { getFirestore, getDoc, setDoc, doc } from "firebase/firestore/lite";
import { useParams } from "react-router-dom";

export const CommentForm = () => {
  //const form = useRef();
  const [state, setState] = useState({comments: ''});
  const { id } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const auth = getAuth();
    const currUser = auth.currentUser;
    let path = `users/${currUser.uid}/matches/${id}/comments`

    
    getDoc(doc(db, path, 'allComments')).then((snapshot) => {
      const data = snapshot.data()
      
      if(data != null) {
        setState({
          comments: data.playerComments
        })  ;
      }
  });
  }, []);

  const updateInput = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const addComment = (e) => {
    e.preventDefault();

    const db = getFirestore();
    const auth = getAuth();
    const currUser = auth.currentUser;
    let string = `users/${currUser.uid}/matches/${id}/comments`;

    setDoc(doc(db, string, 'allComments'), {
      playerComments: state.comments,
    });
  };

  return (
    <div>
      <form onSubmit={addComment}>
        <b>Comments</b>
        <textarea
          type="string"
          name="comments"
          placeholder="Comment"
          onChange={updateInput}
          value={state.comments}
          rows="4"
          cols="75"
        />
        <br></br>
        <div style={{position:'relative', marginLeft:'41em', bottom:'35px'}}><button type="submit">Save</button></div>
      </form>
    </div>
  );
};

export default CommentForm;
