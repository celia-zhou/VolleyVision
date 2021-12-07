import React from "react";
import CourtImg from "../../images/vballCourt.jpeg";
import { getAuth } from "firebase/auth";
import { getFirestore, setDoc, doc, getDoc } from "firebase/firestore/lite";
import { useParams } from "react-router-dom";

export default function CoachShotChart() {
  const [countArr, setCountArr] = React.useState([
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  ]);
  // const [percentArr, setPercentArr] = React.useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
  // const [totalClicks, setTotalClicks] = React.useState(0);
  const { playerId, matchId } = useParams();

  // React.useEffect(() => {
  //     const currCounts = countArr.slice();
  //     const currPers = percentArr.slice();
  //     let i = 0;

  //     currCounts.map((count) => {
  //         if (totalClicks != 0){
  //             currPers[i] = ((count/totalClicks)*100).toFixed(2);
  //             i+=1;
  //         }
  //     });

  //     setPercentArr(currPers);
  // }, [percentArr]);

  React.useEffect(() => {
    const db = getFirestore();
    const auth = getAuth();
    const currUser = auth.currentUser;
    let string = `users/${playerId}/matches/${matchId}/shotChart`;

    getDoc(doc(db, string, "Counts")).then((snapshot) => {
      const data = snapshot.data();

      if (data != null) {
        setCountArr(data.counts);
      }
    });
  });

  const saveCounts = (e) => {
    e.preventDefault();

    const db = getFirestore();
    const auth = getAuth();
    let string = `users/${playerId}/matches/${matchId}/shotChart`;

    setDoc(doc(db, string, "Counts"), {
      counts: countArr,
      // percents: percentArr,
      // totalShots: totalClicks
    });
  };

  const handleClick = (index) => {
    const newCounts = countArr.slice();
    newCounts[index] += 1;
    setCountArr(newCounts);

    // const newTotal = totalClicks + 1;
    // setTotalClicks(newTotal);

    // const newPercents = percentArr.slice();
    // let currPercent = newCounts[index]/newTotal;
    // currPercent = currPercent*100;
    // newPercents[index] = currPercent.toFixed(2);
    // setPercentArr(newPercents);
  };

  const handleRight = (index) => {
    const newCounts = countArr.slice();
    newCounts[index] -= 1;
    setCountArr(newCounts);

    // const newTotal = totalClicks - 1;
    // setTotalClicks(newTotal);

    // const newPercents = percentArr.slice();
    // let currPercent = newCounts[index]/newTotal;
    // currPercent = currPercent*100;
    // newPercents[index] = currPercent.toFixed(2);
    // setPercentArr(newPercents);
  };

  return (
    <div
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 20,
      }}
    >
      <form onSubmit={saveCounts}>
        <img
          src={CourtImg}
          alt="Volleyball Court"
          useMap="#shotchart"
          style={{ position: "relative" }}
        />
        <map name="shotchart" style={{ position: "absolute" }}>
          <div style={{ display: "block" }}>
            <area
              shape="rect"
              coords="60,215, 109,267"
              alt="Box1"
              href="#"
              onClick={() => handleClick(0)}
            />
            {/* <div style={{position: 'absolute', right: '240px', top: '220px', fontSize:'20px'}}>
                            <text onClick={() => handleClick(0)}>{countArr[0]}</text>
                        </div>
                        <div style={{position: 'absolute', right: '220px', top: '240px', fontSize:'15px'}}>
                            <text onClick={() => handleClick(0)}>{percentArr[0]}%</text>
                        </div> */}
            <div style={{ position: "absolute", right: "230px", top: "220px" }}>
              <h1 onClick={() => handleClick(0)}>{countArr[0]}</h1>
            </div>
          </div>

          <area
            shape="rect"
            coords="109,215, 158,267"
            alt="Box2"
            href="#"
            onClick={() => handleClick(1)}
          />
          <div style={{ position: "absolute", right: "180px", top: "220px" }}>
            <h1 onClick={() => handleClick(1)}>{countArr[1]}</h1>
          </div>

          <area
            shape="rect"
            coords="158,215, 209,267"
            alt="Box3"
            href="#"
            onClick={() => handleClick(2)}
          />
          <div style={{ position: "absolute", right: "130px", top: "220px" }}>
            <h1 onClick={() => handleClick(2)}>{countArr[2]}</h1>
          </div>

          <area
            shape="rect"
            coords="209,215, 264,267"
            alt="Box4"
            href="#"
            onClick={() => handleClick(3)}
          />
          <div style={{ position: "absolute", right: "80px", top: "220px" }}>
            <h1 onClick={() => handleClick(3)}>{countArr[3]}</h1>
          </div>

          <area
            shape="rect"
            coords="60,267, 109,318"
            alt="Box5"
            href="#"
            onClick={() => handleClick(4)}
          />
          <div style={{ position: "absolute", right: "230px", top: "275px" }}>
            <h1 onClick={() => handleClick(4)}>{countArr[4]}</h1>
          </div>

          <area
            shape="rect"
            coords="109,267, 158,318"
            alt="Box6"
            href="#"
            onClick={() => handleClick(5)}
          />
          <div style={{ position: "absolute", right: "180px", top: "275px" }}>
            <h1 onClick={() => handleClick(5)}>{countArr[5]}</h1>
          </div>

          <area
            shape="rect"
            coords="158,267, 209,318"
            alt="Box7"
            href="#"
            onClick={() => handleClick(6)}
          />
          <div style={{ position: "absolute", right: "130px", top: "275px" }}>
            <h1 onClick={() => handleClick(6)}>{countArr[6]}</h1>
          </div>

          <area
            shape="rect"
            coords="209,267, 264,318"
            alt="Box8"
            href="#"
            onClick={() => handleClick(7)}
          />
          <div style={{ position: "absolute", right: "80px", top: "275px" }}>
            <h1 onClick={() => handleClick(7)}>{countArr[7]}</h1>
          </div>

          <area
            shape="rect"
            coords="60,318, 109,369"
            alt="Box9"
            href="#"
            onClick={() => handleClick(8)}
          />
          <div style={{ position: "absolute", right: "230px", top: "325px" }}>
            <h1 onClick={() => handleClick(8)}>{countArr[8]}</h1>
          </div>

          <area
            shape="rect"
            coords="109,318, 158,369"
            alt="Box10"
            href="#"
            onClick={() => handleClick(9)}
          />
          <div style={{ position: "absolute", right: "180px", top: "325px" }}>
            <h1 onClick={() => handleClick(9)}>{countArr[9]}</h1>
          </div>

          <area
            shape="rect"
            coords="158,318, 209,369"
            alt="Box11"
            href="#"
            onClick={() => handleClick(10)}
          />
          <div style={{ position: "absolute", right: "130px", top: "325px" }}>
            <h1 onClick={() => handleClick(10)}>{countArr[10]}</h1>
          </div>

          <area
            shape="rect"
            coords="209,318, 264,369"
            alt="Box12"
            href="#"
            onClick={() => handleClick(11)}
          />
          <div style={{ position: "absolute", right: "80px", top: "325px" }}>
            <h1 onClick={() => handleClick(11)}>{countArr[11]}</h1>
          </div>
        </map>

        <div style={{ position: "relative", left: "330px", bottom: "30px" }}>
          <button type="submit">Save</button>
        </div>
      </form>
    </div>
  );
}
