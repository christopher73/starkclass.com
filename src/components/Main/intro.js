import React from "react";
import Video from "./video";
import "./styleHome.css";
import { Link } from "react-router-dom";
// import {time} from '/assets/icons/time.png'

class Intro extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <div id="home" />

        <div id="jumbotron">
          <div className="x-intro-section" role="banner" align="center">
            <div className="x-intro-holder" align="center">
              <h1>Clases Virtuales DONDE, COMO y CUANDO quieras.</h1>
              <h1>&#161;Prep&#225;rate con nosotros!</h1>
            </div>
          </div>

          <div className="container">
            <div className="row" style={{ justifyContent: "center" }}>
              <div className="col-lg-7 col-md-8 col-sm-10 col-12 m-auto p-0 py-2 ">
                <Video />
              </div>
            </div>
            <div className="row" style={{ justifyContent: "center" }}>
              <div className=" wid-auto m-auto text-dark">
                <p className="text-center">
                  ¡Hola! Somos Starkclass. Nuestra misión es ayudarte a mejorar
                  tus conocimientos y habilidades para que puedas ingresar a la
                  universidad de una manera sencilla.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row text-center h3 " style={{ paddingBottom: 10 }}>
            <div className="col-md-4 col-sm-12 col-12 my-3 mx-auto hover_flex">
              <p className="m-0">+ 8 años</p>
              <div id="x-count-title">
                <span id="arrow"> > </span> DE EXPERIENCIA POR DOCENTE
              </div>
            </div>

            <div className="col-md-4 col-sm-12 col-12  my-3  mx-auto hover_flex">
              <p className="m-0">+ 300</p>
              <div id="x-count-title">
                <span id="arrow"> > </span> EJERCICIOS EN VIDEO
              </div>
            </div>

            <div className="col-md-4 col-sm-12 col-12  my-3 mx-auto hover_flex">
              <p className="m-0">
                <img
                  className="time"
                  src={"/assets/icons/time.png"}
                  alt="time"
                />
              </p>
              <div id="x-count-title">
                <span id="arrow"> > </span> APRENDE A TU RITMO
              </div>
            </div>
          </div>

          <div className="row text-center h3">
            <div className="col-12 m-auto" align="center">
              <Link
                id="titulo-button"
                className="btn btn-danger btn-lg shadow-lg m-4"
                aria-pressed="true"
                to="/register"
              >
                Prueba Gratis
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Intro;
