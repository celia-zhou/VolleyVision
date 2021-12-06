import React, { useState, useEffect } from "react";
import { getAuth } from "firebase/auth";
import { getFirestore, setDoc, getDoc, doc } from "firebase/firestore/lite";
import styled from "styled-components";
import { useParams } from "react-router-dom";

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
  const [setData, setSetData] = useState({setOneHome: 0,
    setTwoHome: 0,
    setThreeHome: 0,
    setOneOpp: 0,
    setTwoOpp: 0,
    setThreeOpp: 0,});
  const [opp, setOpp] = useState('');
  const { id } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const auth = getAuth();
    const currUser = auth.currentUser;
    let setsPath = `users/${currUser.uid}/matches/${id}/stats`
    let oppPath = `users/${currUser.uid}/matches`
    
    getDoc(doc(db, setsPath, 'Sets')).then((snapshot) => {
      const data = snapshot.data()
      
      if(data != null) {
        setSetData({
          setOneHome: data.setOneHome,
          setTwoHome: data.setTwoHome,
          setThreeHome: data.setThreeHome,
          setOneOpp: data.setOneOpp,
          setTwoOpp: data.setTwoOpp,
          setThreeOpp: data.setThreeOpp,
        })  ;
      }
  });

  getDoc(doc(db, oppPath, id)).then((snapshot) => {
    const data = snapshot.data()
    
    if(data != null) {
      setOpp(data.opponent)  ;
    }
});
  }, []);

  const updateInput = (e) => {
    setSetData({
      ...setData,
      [e.target.name]: e.target.value,
    });
  };

  const addSet = (e) => {
    e.preventDefault();

    const db = getFirestore();
    const auth = getAuth();
    const currUser = auth.currentUser;
    let string = `users/${currUser.uid}/matches/${id}/stats`;

    setDoc(doc(db, string, "setScores"), {
      setOneHome: setData.setOneHome,
      setTwoHome: setData.setTwoHome,
      setThreeHome: setData.setThreeHome,
      setOneOpp: setData.setOneOpp,
      setTwoOpp: setData.setTwoOpp,
      setThreeOpp: setData.setThreeOpp,
    });

    // setState({
    //   setOneHome: 0,
    //   setTwoHome: 0,
    //   setThreeHome: 0,
    //   setOneOpp: 0,
    //   setTwoOpp: 0,
    //   setThreeOpp: 0,
    // });
  };

  return (
    <div>
      <div style={{textAlign: 'left'}}>
      <span style={{marginLeft:"3.5em"}}><b>Home</b></span>
        <span style={{marginLeft:"9em"}}><b>{opp}</b></span>
      </div>
      <form onSubmit={addSet}>
        <label><b>Set 1</b></label>
        <span style={{marginLeft:"1em"}}>
        <input
          type="number"
          name="setOneHome"
          placeholder="Set One Home"
          onChange={updateInput}
          value={setData.setOneHome}
        />
        <span> </span>
        <input
          type="number"
          name="setOneOpp"
          placeholder="Set One Opponent"
          onChange={updateInput}
          value={setData.setOneOpp}
        />
        </span>
        <span></span><br/>
        <label><b>Set 2</b></label>
        <span style={{marginLeft:"0.9em"}}>
        <input
          type="number"
          name="setTwoHome"
          placeholder="Set Two Home"
          onChange={updateInput}
          value={setData.setTwoHome}
        />
        <span> </span>
        <input
          type="number"
          name="setTwoOpp"
          placeholder="Set Two Opponent"
          onChange={updateInput}
          value={setData.setTwoOpp}
        />
        </span>
        <span> </span><br/>
        <label><b>Set 3</b></label>
        <span style={{marginLeft:"0.9em"}}>
        <input
          type="number"
          name="setThreeHome"
          placeholder="Set Three Home"
          onChange={updateInput}
          value={setData.setThreeHome}
        />
        <span> </span>
        <input
          type="number"
          name="setThreeOpp"
          placeholder="Set Three Opponent"
          onChange={updateInput}
          value={setData.setThreeOpp}
        />
        </span>
        <span> </span>
        <br></br>
        <span style={{position:'absolute', right:'17px', bottom:'2px'}}><button type="submit">Save</button></span>
      </form>
    </div>
  );
};

export default SetsForm;
