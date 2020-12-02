import React from "react";
import icon1 from "../assets/icons/1.svg";
import icon2 from "../assets/icons/2.svg";
import icon3 from "../assets/icons/3.svg";
import icon4 from "./assets/Enmascarar grupo 69.svg";

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
      </div>{" "}
      <div className="col-md-3 col-sm-12 col-12  my-3 mx-auto hover_flex">
        <img alt="examen" src={icon3} width="70" />
        <p className="m-0 ">SIMULACROS</p>
        <div id="x-count-title">
          <span id="arrow"> > </span> TIPO ADMISIÓN
        </div>
      </div>{" "}
      <div className="col-md-3 col-sm-12 col-12 my-3 mx-auto hover_flex">
        <img alt="manzana_" src={icon2} width="70" />
        <p className="m-0">CALIDAD</p>
        <div id="x-count-title">
          <span id="arrow"> > </span> +15 AÑOS DE EXPERIENCIA
        </div>
      </div>{" "}
      <div className="col-md-3 col-sm-12 col-12 my-3 mx-auto hover_flex">
        <img alt="manzana_" src={icon4} width="70" />
        <p className="m-0">INGRESANTES</p>
        <div id="x-count-title">
          <span id="arrow"> > </span> 22 ALUMNOS
        </div>
      </div>{" "}
    </div>
  );
}
