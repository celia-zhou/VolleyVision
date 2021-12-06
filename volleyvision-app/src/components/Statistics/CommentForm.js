import styled from "styled-components";
import React, { useState } from "react";
import { getAuth } from "firebase/auth";
import { getFirestore, addDoc, collection } from "firebase/firestore/lite";
import { useParams, useLocation } from "react-router-dom";

export const CommentForm = () => {
  //const form = useRef();
  let [state, setState] = useState({});
  const { id } = useParams();

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

    const commentRef = addDoc(collection(db, string), {
      comments: state.comments,
    });

    setState({
      comments: "",
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
          cols="92"
        />
        <br></br>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CommentForm;
