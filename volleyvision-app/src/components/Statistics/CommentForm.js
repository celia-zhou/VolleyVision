import styled from "styled-components";
import React, { useState, useEffect } from "react";
import { getAuth } from "firebase/auth";
import { getFirestore, getDoc, setDoc, doc } from "firebase/firestore/lite";
import { useParams } from "react-router-dom";

export const CommentForm = () => {
  //const form = useRef();
  let [state, setState] = useState({comments: ''});
  const { id } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const auth = getAuth();
    const currUser = auth.currentUser;
    let path = `users/${currUser.uid}/matches/${id}/comments`
    let fireRows = [];

    
    getDoc(doc(db, path, 'PlayerComments')).then((snapshot) => {
      const data = snapshot.data()

      setState({
          comments: data.comments
      })
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

    setDoc(doc(db, string, 'PlayerComments'), {
      comments: state.comments,
    });
  };

  return (
    <div>
      <form onSubmit={addComment}>
        <textarea
          type="string"
          name="comments"
          placeholder="Comment"
          onChange={updateInput}
          value={state.comments}
          rows="3"
          cols="93"
        />
        <br></br>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CommentForm;
