import React from "react";
import { Link } from "react-router-dom";
import ReactPlayer from "react-player";

export default function PruevaGratis({ textInfo }) {
  return (
    <div
      className="row"
      style={{ width: "90%", margin: "auto", justifyContent: "center" }}
    >
      <div className="col-lg-8 col-md-7 col-sm-12 p-0 m-auto ">
        <div className="player-wrapper2">
          <ReactPlayer
            className="react-player2"
            url="https://vimeo.com/403129889"
            // light="./assets/img/player123.png"
            width="100%"
            height="100%"
            playing={false}
            controls
          />
        </div>
      </div>
      <div
        style={{ textAlign: "center" }}
        className="col-lg-4 col-md-5 col-sm-12 p-0  m-auto "
      >
        <h4 className="py-5">{textInfo}</h4>
        <Link
          className="btn-orange btn shadow-lg my-4 mx-auto"
          aria-pressed="true"
          to="/register"
        >
          REGÍSTRATE
        </Link>
      </div>
    </div>
  );
}
