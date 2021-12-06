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

export const GenStatsForm = () => {
  let [state, setState] = useState({});
  const { id } = useParams();

  //   updateInput = (e) => {
  //     this.setState({
  //       [e.target.name]: e.target.value,
  //     });
  //   };

  const updateInput = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const addStat = (e) => {
    e.preventDefault();

    const db = getFirestore();
    const auth = getAuth();
    const currUser = auth.currentUser;
    let string = `users/${currUser.uid}/matches/${id}/stats`;

    const matchRef = setDoc(doc(db, string, "Player"), {
      kills: state.kills,
      errors: state.errors,
      attempts: state.attempts,
      digs: state.digs,
      aces: state.aces,
      blocks: state.blocks,
    });

    setState({
      kills: 0,
      errors: 0,
      attempts: 0,
      digs: 0,
      aces: 0,
      blocks: 0,
    });
  };

  return (
    <div>
      <form onSubmit={addStat}>
        <input
          type="number"
          name="kills"
          placeholder="Kills"
          onChange={updateInput}
          value={state.kills}
        />
        <span> </span>
        <input
          type="number"
          name="errors"
          placeholder="Errors"
          onChange={updateInput}
          value={state.errors}
        />
        <span> </span>
        <input
          type="number"
          name="attempts"
          placeholder="Attempts"
          onChange={updateInput}
          value={state.attempts}
        />
        <span> </span>
        <input
          type="number"
          name="digs"
          placeholder="Digs"
          onChange={updateInput}
          value={state.digs}
        />
        <span> </span>
        <input
          type="number"
          name="aces"
          placeholder="Aces"
          onChange={updateInput}
          value={state.aces}
        />
        <span> </span>
        <input
          type="number"
          name="blocks"
          placeholder="Blocks"
          onChange={updateInput}
          value={state.blocks}
        />
        <span> </span>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
