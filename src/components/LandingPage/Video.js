import React from "react";
import bg from "./bg.svg";
import "./styleHome.css";

export default function Video() {
  return (
    <div
      id='pic-main'
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
