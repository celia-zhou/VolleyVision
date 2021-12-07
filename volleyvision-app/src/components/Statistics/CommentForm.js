import styled from "styled-components";
import React, { useState, useEffect } from "react";
import { getAuth } from "firebase/auth";
import { getFirestore, getDoc, setDoc, doc } from "firebase/firestore/lite";
import { useParams } from "react-router-dom";

export const CommentForm = () => {
  //const form = useRef();
  const [commentData, setCommentData] = useState('');
  const [isPlayer, setisPlayer] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const auth = getAuth();
    const currUser = auth.currentUser;
    let commentPath = `users/${currUser.uid}/matches/${id}/comments`

    // getDoc(doc(db,'users', currUser.uid)).then((snapshot) => {
    //   const data = snapshot.data();

    //   if(data.coach && !data.recruiter) {
    //     setisPlayer(false);
    //   }

    // });

    
    getDoc(doc(db, commentPath, 'PlayerComments')).then((snapshot) => {
      const data = snapshot.data();

      if(data != null) {
        if(isPlayer && data.playerComments != null) {
          setCommentData(data.playerComments);
        }
        // else if(data.coachComments != null) {
        //   setCommentData(data.coachComments);
        // }
        
      }
  });
  }, []);

  const updateInput = (e) => {
    setCommentData(e.target.value);
  };

  const addComment = (e) => {
    e.preventDefault();

    const db = getFirestore();
    const auth = getAuth();
    const currUser = auth.currentUser;
    let string = `users/${currUser.uid}/matches/${id}/comments`;

    if (isPlayer) {
      setDoc(doc(db, string, 'PlayerComments'), {
        playerComments: commentData,
      });
    }
    // else {
    //   setDoc(doc(db, string, 'allComments'), {
    //     coachComments: commentData,
    //   });
    // }

    
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
          value={commentData}
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
