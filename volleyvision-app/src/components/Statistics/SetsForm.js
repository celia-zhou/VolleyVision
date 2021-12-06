import React, { useState } from "react";
import { getAuth } from "firebase/auth";
import { getFirestore, setDoc, doc } from "firebase/firestore/lite";
import styled from "styled-components";
import { useParams, useLocation } from "react-router-dom";

const StatsContainer = styled.div`
  position: absolute;
  left: 160px;
  top: 140px;
  font: Times New Roman;
  font-size: 15px;
  width: 100%;
  height: 150px;
  @media screen and (min-width: 100px) and (max-width: 1100px) {
    float: bottom;
    max-width: 20vw;
  }
`;

const LabelContainer1 = styled.div`
  position: absolute;
  left: 1px;
  top: -30px;
  font: Times New Roman;
  font-size: 18px;
  width: 100%;
  height: 150px;
  @media screen and (min-width: 100px) and (max-width: 1100px) {
    float: bottom;
    max-width: 20vw;
  }
`;

const LabelContainer2 = styled.div`
  position: absolute;
  left: 180px;
  top: -30px;
  font: Times New Roman;
  font-size: 18px;
  width: 100%;
  height: 150px;
  @media screen and (min-width: 100px) and (max-width: 1100px) {
    float: bottom;
    max-width: 20vw;
  }
`;

const LabelContainer3 = styled.div`
  position: absolute;
  left: 360px;
  top: -30px;
  font: Times New Roman;
  font-size: 18px;
  width: 100%;
  height: 150px;
  @media screen and (min-width: 100px) and (max-width: 1100px) {
    float: bottom;
    max-width: 20vw;
  }
`;

const LabelContainer4 = styled.div`
  position: absolute;
  left: 537px;
  top: -30px;
  font: Times New Roman;
  font-size: 18px;
  width: 100%;
  height: 150px;
  @media screen and (min-width: 100px) and (max-width: 1100px) {
    float: bottom;
    max-width: 20vw;
  }
`;

const LabelContainer5 = styled.div`
  position: absolute;
  left: 716px;
  top: -30px;
  font: Times New Roman;
  font-size: 18px;
  width: 100%;
  height: 150px;
  @media screen and (min-width: 100px) and (max-width: 1100px) {
    float: bottom;
    max-width: 20vw;
  }
`;

const LabelContainer6 = styled.div`
  position: absolute;
  left: 895px;
  top: -30px;
  font: Times New Roman;
  font-size: 18px;
  width: 100%;
  height: 150px;
  @media screen and (min-width: 100px) and (max-width: 1100px) {
    float: bottom;
    max-width: 20vw;
  }
`;

export const SetsForm = () => {
  let [state, setState] = useState({});
  const { id } = useParams();

  const updateInput = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const addSet = (e) => {
    e.preventDefault();

    const db = getFirestore();
    const auth = getAuth();
    const currUser = auth.currentUser;
    let string = `users/${currUser.uid}/matches/${id}/stats`;

    const setsRef = setDoc(doc(db, string, "Sets"), {
      setOneHome: state.setOneHome,
      setTwoHome: state.setTwoHome,
      setThreeHome: state.setThreeHome,
      setOneOpp: state.setOneOpp,
      setTwoOpp: state.setTwoOpp,
      setThreeOpp: state.setThreeOpp,
    });

    setState({
      setOneHome: 0,
      setTwoHome: 0,
      setThreeHome: 0,
      setOneOpp: 0,
      setTwoOpp: 0,
      setThreeOpp: 0,
    });
  };

  return (
    <div>
      <form onSubmit={addSet}>
        <input
          type="number"
          name="setOneHome"
          placeholder="Set One Home"
          onChange={updateInput}
          value={state.setOneHome}
        />
        <span> </span>
        <input
          type="number"
          name="setOneOpp"
          placeholder="Set One Opponent"
          onChange={updateInput}
          value={state.setOneOpp}
        />
        <span> </span>
        <input
          type="number"
          name="setTwoHome"
          placeholder="Set Two Home"
          onChange={updateInput}
          value={state.setTwoHome}
        />
        <span> </span>
        <input
          type="number"
          name="setTwoOpp"
          placeholder="Set Two Opponent"
          onChange={updateInput}
          value={state.setTwoOpp}
        />
        <span> </span>
        <input
          type="number"
          name="setThreeHome"
          placeholder="Set Three Home"
          onChange={updateInput}
          value={state.setThreeHome}
        />
        <span> </span>
        <input
          type="number"
          name="setThreeOpp"
          placeholder="Set Three Opponent"
          onChange={updateInput}
          value={state.setThreeOpp}
        />
        <span> </span>
        <br></br>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SetsForm;
