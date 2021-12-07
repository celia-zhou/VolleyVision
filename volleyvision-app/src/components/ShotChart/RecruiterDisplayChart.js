import React from "react";
import CourtImg from "../../images/vballCourt.jpeg";
import { getAuth } from "firebase/auth";
import { getFirestore, getDoc, doc } from "firebase/firestore/lite";
import { useParams } from "react-router-dom";

export default function RecruiterDisplayChart() {
  const [countArr, setCountArr] = React.useState([
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  ]);
  // const [percentArr, setPercentArr] = React.useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
  // const [totalClicks, setTotalClicks] = React.useState(0);
  const { playerId, matchId } = useParams();

  React.useEffect(() => {
    const db = getFirestore();
    const auth = getAuth();
    let string = `users/${playerId}/matches/${matchId}/shotChart`;

    getDoc(doc(db, string, "Counts")).then((snapshot) => {
      const data = snapshot.data();
      if (data != null) {
        setCountArr(data.counts);
      }
    });
  }, []);

  return (
    <div
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 20,
      }}
    >
      <img
        src={CourtImg}
        alt="Volleyball Court"
        useMap="#shotchart"
        style={{ position: "relative" }}
      />
      <map name="shotchart" style={{ position: "absolute" }}>
        <div style={{ display: "block" }}>
          <area shape="rect" coords="60,215, 109,267" alt="Box1" href="#" />
          <div style={{ position: "absolute", left: "70px", bottom: "160px" }}>
            <h1>{countArr[0]}</h1>
          </div>
        </div>

        <area shape="rect" coords="109,215, 158,267" alt="Box2" href="#" />
        <div style={{ position: "absolute", left: "120px", bottom: "160px" }}>
          <h1>{countArr[1]}</h1>
        </div>

        <area shape="rect" coords="158,215, 209,267" alt="Box3" href="#" />
        <div style={{ position: "absolute", left: "170px", bottom: "160px" }}>
          <h1>{countArr[2]}</h1>
        </div>

        <area shape="rect" coords="209,215, 264,267" alt="Box4" href="#" />
        <div style={{ position: "absolute", left: "220px", bottom: "160px" }}>
          <h1>{countArr[3]}</h1>
        </div>

        <area shape="rect" coords="60,267, 109,318" alt="Box5" href="#" />
        <div style={{ position: "absolute", left: "70px", bottom: "110px" }}>
          <h1>{countArr[4]}</h1>
        </div>

        <area shape="rect" coords="109,267, 158,318" alt="Box6" href="#" />
        <div style={{ position: "absolute", left: "120px", bottom: "110px" }}>
          <h1>{countArr[5]}</h1>
        </div>

        <area shape="rect" coords="158,267, 209,318" alt="Box7" href="#" />
        <div style={{ position: "absolute", left: "170px", bottom: "110px" }}>
          <h1>{countArr[6]}</h1>
        </div>

        <area shape="rect" coords="209,267, 264,318" alt="Box8" href="#" />
        <div style={{ position: "absolute", left: "220px", bottom: "110px" }}>
          <h1>{countArr[7]}</h1>
        </div>

        <area shape="rect" coords="60,318, 109,369" alt="Box9" href="#" />
        <div style={{ position: "absolute", left: "70px", bottom: "60px" }}>
          <h1>{countArr[8]}</h1>
        </div>

        <area shape="rect" coords="109,318, 158,369" alt="Box10" href="#" />
        <div style={{ position: "absolute", left: "120px", bottom: "60px" }}>
          <h1>{countArr[9]}</h1>
        </div>

        <area shape="rect" coords="158,318, 209,369" alt="Box11" href="#" />
        <div style={{ position: "absolute", left: "170px", bottom: "60px" }}>
          <h1>{countArr[10]}</h1>
        </div>

        <area shape="rect" coords="209,318, 264,369" alt="Box12" href="#" />
        <div style={{ position: "absolute", left: "220px", bottom: "60px" }}>
          <h1>{countArr[11]}</h1>
        </div>
      </map>
    </div>
  );
}
