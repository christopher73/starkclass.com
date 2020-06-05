import React from "react";
import icon1 from "./assets/icons/1.svg";
import icon2 from "./assets/icons/2.svg";
import icon3 from "./assets/icons/3.svg";
import icon4 from "./assets/icons/4.svg";

export default function Icons() {
  return (
    <div
      className="row text-center h3 mb-4"
      style={{ justifyContent: "center" }}
    >
      {" "}
      <div className="col-md-3 col-sm-12 col-12 my-3 mx-auto hover_flex">
        <img alt="manzana_" src={icon1} width="70" />
        <p className="m-0">ONLINE</p>
        <div id="x-count-title">
          <span id="arrow"> > </span> CLASES
        </div>
      </div>
      <div className="col-md-3 col-sm-12 col-12 my-3 mx-auto hover_flex">
        <img alt="manzana_" src={icon2} width="70" />
        <p className="m-0">6</p>
        <div id="x-count-title">
          <span id="arrow"> > </span> CURSOS
        </div>
      </div>{" "}
      <div className="col-md-3 col-sm-12 col-12  my-3 mx-auto hover_flex">
        <img alt="examen" src={icon3} width="70" />
        <p className="m-0">REPASOS</p>
        <div id="x-count-title">
          <span id="arrow"> > </span> EN VIDEO
        </div>
      </div>{" "}
      <div className="col-md-3 col-sm-12 col-12  my-3  mx-auto hover_flex">
        <img alt="userpc" src={icon4} width="70" />
        <p className="m-0">+ 300</p>
        <div id="x-count-title">
          <span id="arrow"> > </span> EJERCICIOS EN VIDEO
        </div>
      </div>
    </div>
  );
}
