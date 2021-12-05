import React from "react";
import { getAuth } from "firebase/auth";
import { getFirestore, addDoc, collection } from "firebase/firestore/lite";
import SideBar from "../Sidebar/Sidebar";
import styled from "styled-components";
import ReactPlayer from "react-player";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";

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

const VidContainer = styled.div`
  position: absolute;
  left: 100px;
  top: 50px;
  font: Times New Roman;
  font-size: 30px;
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

class NewGenerateStatsForm extends React.Component {
  constructor() {
    super();
    this.state = {
      kills: "",
      errors: "",
      attempts: "",
      digs: "",
      aces: "",
      blocks: "",
    };
  }

  updateInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  addStats = (e) => {
    e.preventDefault();

    const db = getFirestore();
    const auth = getAuth();
    const currUser = auth.currentUser;

    const statsRef = addDoc(
      collection(
        db,
        "users/" + currUser.uid + "/matches/ZxL9M0vchGEswvadOs2g/stats"
      ),
      {
        kills: this.state.kills,
        errors: this.state.errors,
        attempts: this.state.attempts,
        digs: this.state.digs,
        aces: this.state.aces,
        blocks: this.state.blocks,
      }
    );

    this.setState({
      kills: "",
      errors: "",
      attempts: "",
      digs: "",
      aces: "",
      blocks: "",
    });
  };

  render() {
    return (
      <div>
        <VidContainer>
          <ImageList
            sx={{
              position: "absolute",
              top: 150,
              left: 100,
              width: 2000,
              height: 1100,
              bgcolor: "#DBEBFB",
            }}
            cols={3}
          >
            {itemData.map((item) => (
              <ImageListItem sx={{ pb: 1 }} key={item.urlLink}>
                <ReactPlayer url={item.urlLink} width="1050px" height="440px" />
                <ImageListItemBar
                  sx={{ pb: 2 }}
                  position="below"
                  title={item.name}
                />
              </ImageListItem>
            ))}
          </ImageList>
        </VidContainer>

        <SideBar />
        <StatsContainer>
          <form onSubmit={this.addStats}>
            <LabelContainer1>Kill Count:</LabelContainer1>
            <input
              type="string"
              name="kills"
              placeholder="Kills"
              onChange={this.updateInput}
              value={this.state.kills}
              label="Kills:"
            />

            <span> </span>
            <LabelContainer2>Error Count:</LabelContainer2>
            <input
              type="string"
              name="errors"
              placeholder="Errors"
              onChange={this.updateInput}
              value={this.state.errors}
            />

            <span> </span>
            <LabelContainer3>Attempt Count:</LabelContainer3>
            <input
              type="number"
              name="attempts"
              placeholder="Attempts"
              onChange={this.updateInput}
              value={this.state.attempts}
            />

            <span> </span>
            <LabelContainer4>Dig Count:</LabelContainer4>
            <input
              type="number"
              name="digs"
              placeholder="Digs"
              onChange={this.updateInput}
              value={this.state.digs}
            />

            <span> </span>
            <LabelContainer5>Ace Count:</LabelContainer5>
            <input
              type="number"
              name="aces"
              placeholder="Aces"
              onChange={this.updateInput}
              value={this.state.aces}
            />

            <span> </span>
            <LabelContainer6>Block Count:</LabelContainer6>
            <input
              type="number"
              name="blocks"
              placeholder="Blocks"
              onChange={this.updateInput}
              value={this.state.blocks}
            />
            <span> </span>
            <button type="submit">Submit</button>
          </form>
        </StatsContainer>
      </div>
    );
  }
}

const itemData = [
  {
    urlLink: "https://www.youtube.com/watch?v=459Oda8XPy0&t=3s",
    name: "USA vs. Australia - Tokyo 2021",
  },
];
export default NewGenerateStatsForm;
