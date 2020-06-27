import React from "react";
import Footer from "../../Footer/footer";
import "./stylecurso.css";
import ScrollUp from "../../ScrollUp/ScrollUp";
import headerImage from "./assets/headerImage.svg";
import Icons from "./Icons";
import PruevaGratis from "../PruevaGratis";
import Counter from "./Counter";
import SocialMedia from "../SocialMedia";
import ListaDeObjetivos from "./ListaDeObjetivos";
import horario from "./assets/horarios-de-clases.png";
import horario2 from "./assets/horarios-de-clases2.png";
import AdSense from "react-adsense";

export default function Smarcos() {
  return (
    <div style={{ backgroundColor: "white" }}>
      <ScrollUp />
      <div className='imgFondo'>
        <img
          id='login'
          className='h-25 w-100 p-0'
          src={headerImage}
          alt='login'
        />
      </div>
      <div className='container'>
        <div className='row py-4'>
          <div className='col-12 text-center'>
            <br />
            <h1 id='titulo_stark'>Ciclo San Marcos</h1>
            <br />
          </div>
          <div className='col-md-8 col-sm-12  m-auto text-dark3'>
            <p>
              ¿Postulas para el examen de ADMISIÓN SAN MARCOS? ¡Te reforzamos y
              asegura tu ingreso! Por ello, Starkclass te brinda los cursos Hab.
              Matemático, Álgebra, Aritmética, Geometría, Trigonometría, Física
              y Química. Además, Habilidad Verbal, Lengua, Economía, Cívica,
              Psicología, Historia Universal, Historia del Perú, Literatura,
              Filosofía y Biológia
            </p>
          </div>
        </div>
        <PruevaGratis
          textInfo='¡POCOS ALUMNOS POR SALÓN!
Reserva AHORA'
        />
        <br /> <br />
        <Icons /> <br /> <br />
        <ListaDeObjetivos />
        <br /> <br /> <br /> <br />
        <div align='center' style={{ backgroundColor: "#fff" }}>
          <AdSense.Google
            client='ca-pub-5518804397665911'
            slot='8960762629'
            style={{ display: "block" }}
            format='auto'
            responsive='true'
            layoutKey='-gw-1+2a-9x+5c'
          />
        </div>
        <br /> <br /> <br /> <br />
      </div>
      <img
        style={{
          width: "100%",
          height: "100%",
          margin: "0",
          padding: "0",
        }}
        src={horario2}
        alt='horario2'
      />
      <img
        style={{
          width: "100%",
          height: "100%",
          margin: "0",
          padding: "0",
        }}
        src={horario}
        alt='horario'
      />
      <br /> <br />
      <Counter />
      <br /> <br />
      <br /> <br />
      <div className='fondonara'>
        <div className='container' align='center'>
          <h4 className='h2sub'>
            Obtén todas las habilidades que necesitas para ingresar
          </h4>
          <h4 className='h1sub'>¡A solo S/ 60.00 x MES!</h4>
          <p>*AL CONTADO S/ 150.00 x LOS 3 MESES</p>
          <br />
          {/* <p className="text-dscto ">
            *Inserta el código <strong>STARKCLASS10</strong> y obtén un
            descuento sorpresa.
          </p> */}
        </div>
      </div>
      <SocialMedia />
      <Footer sectionR={false} />
    </div>
  );
}
