import React from "react";
// import ReactPlayer from "react-player";
import bg from "./bg.svg";
import "./styleHome.css";

class Video extends React.Component {
  render() {
    return (
      <div
        id="pic-main"
        style={{
          backgroundImage: `url("${bg}")`,
          backgroundSize: "100% 100%",
          backgroundPosition: "center",
          width: "100%",
          height: "450px",
        }}
      />
    );
  }
}
export default Video;
