import React from "react";
import Footer from "../../Footer/footer";
import "./stylecurso.css";
import ScrollUp from "../../ScrollUp/ScrollUp";
import headerImage from "./assets/headerImage.svg";
import Icons from "../Icons";
import PruevaGratis from "../PruevaGratis";
import Counter from "./Counter";
import SocialMedia from "../SocialMedia";
import ListaDeObjetivos from "../ListaDeObjetivos";
import horario from "./assets/horarios-de-clases.svg";
export default function CicloUlima() {
  return (
    <div style={{ backgroundColor: "white" }}>
      <ScrollUp />
      <div className="imgFondo">
        <img
          id="login"
          className="h-25 w-100 p-0"
          src={headerImage}
          alt="login"
        />
      </div>
      <div className="container">
        <div className="row py-4">
          <div className="col-12 text-center">
            <br />
            <h1 id="titulo_stark">Ciclo Pre Ulima 2020-2</h1>
            <br />
          </div>
          <div className="col-md-8 col-sm-12  m-auto text-dark3">
            <p>
              ¿Postulas por la<strong> PRE LIMA </strong>o estás preparándote en
              una academia para el examen de<strong> ADMISIÓN ULIMA? </strong>
              ¡Te acompañamos en paralelo y asegura tu ingreso!. Por ello,
              Starkclass te brinda los cursos de Mate I, Mate II, Raz.
              Matemático, Lectura y Redacción. Además, contenido adicional de
              Psicología y Procesos Históricos.
            </p>
          </div>
        </div>{" "}
        <PruevaGratis textInfo="¡HAZ LA PRUEBA AHORA! Regístrate y obtén tus primeras clases gratis" />
        <br /> <br />
        <Icons /> <br /> <br />
        <ListaDeObjetivos />
        <br /> <br /> <br /> <br />
      </div>
      {/* <img
        style={{
          width: "100%",
          height: "100%",
          margin: "0",
          padding: "0",
        }}
        src={horario}
        alt="horario"
      /> */}
      <br /> <br />
      <Counter />
      <br /> <br />
      <br /> <br />
      <div className="fondonara">
        <div className="container" align="center">
          <h4 className="h2sub">
            Obtén todas las habilidades que necesitas para ingresar
          </h4>
          <h4 className="h1sub">¡ÚNICO PAGO DE S/ 99.00!</h4>
        </div>
      </div>
      <SocialMedia />
      <Footer sectionR={false} />
    </div>
  );
}
