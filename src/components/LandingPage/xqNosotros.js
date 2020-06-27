import React from "react";
import iphone from "./iphone.svg";
export default () => {
  return (
    <div id="why-code" className="container pt-5 my-2">
      <div id="porqueStarkClass" />
      <div className="row pt-5 mt-5">
        <div className="why-code-title col-sx-10 m-auto">
          <h1 id="titulo_stark" className="dosis">
            ¿Por qué STARKCLASS?
          </h1>

          <h1 id="titulo_stark" className="dosis">
            ¡Claro, conciso, completo y práctico!
          </h1>
        </div>
      </div>

      <div className="row ">
        <div
          className="col-sm-12 col-md-4"
          style={{
            justifyContent: "space-around",
            display: "flex",
            flexFlow: "column",
          }}
        >
          <div style={{ flexFlow: "row", display: "flex" }}>
            <div>
              <h4 className="text-colum-bold" style={{ textAlign: "right" }}>
                Aprende teoría
              </h4>
              <p className="text-colum" style={{ textAlign: "right" }}>
                Profesionales experimentados que te ayudarán a entender la
                teoría de manera sencilla.
              </p>
            </div>
            <div style={{ marginLeft: 8 }}>
              <img
                src="/assets/img/izq1.svg"
                alt="Aprender teoría y práctica"
                width="50"
              />
            </div>
          </div>
          <div style={{ flexFlow: "row", display: "flex" }}>
            <div>
              <h4 className="text-colum-bold" style={{ textAlign: "right" }}>
                Siempre preparado
              </h4>
              <p className="text-colum" style={{ textAlign: "right" }}>
                Diseñamos cuidadosamente ejemplos y ejercicios de ciclos
                pasados.
              </p>
            </div>
            <div style={{ marginLeft: 8 }}>
              <img
                src="/assets/img/izq2.svg"
                alt="Prepararse para los exámenes"
                width="50"
              />
            </div>
          </div>
          <div style={{ flexFlow: "row", display: "flex" }}>
            <div>
              <h4 className="text-colum-bold" style={{ textAlign: "right" }}>
                Videos de calidad
              </h4>
              <p className="text-colum" style={{ textAlign: "right" }}>
                Estamos obsesionados con la calidad de nuestros videos (Full
                HD).
              </p>
            </div>
            <div style={{ marginLeft: 8 }}>
              <img
                src="/assets/img/izq3.svg"
                alt="Videos de calidad"
                width="50"
              />
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-md-4" id="iphone">
          <img
            className="image-responsive"
            src={iphone}
            alt="Starkclass iphone"
          />
        </div>
        <div
          className="col-sm-12 col-md-4"
          style={{
            justifyContent: "space-around",
            display: "flex",
            flexFlow: "column",
          }}
        >
          <div style={{ flexFlow: "row", display: "flex" }}>
            <div style={{ marginRight: 8 }}>
              <img
                src="/assets/img/der1.svg"
                alt="Acelera tu aprendizaje"
                width="50"
              />
            </div>
            <div>
              <h4 className="text-colum-bold" style={{ textAlign: "left" }}>
                Acelera tu aprendizaje
              </h4>
              <p className="text-colum" style={{ textAlign: "left" }}>
                No pierdas más tiempo en el tráfico o en clases aburridas.
              </p>
            </div>
          </div>
          <div style={{ flexFlow: "row", display: "flex" }}>
            <div style={{ marginRight: 8 }}>
              <img
                src="/assets/img/der2.svg"
                alt="Dominar una mentalidad rápida"
                width="50"
              />
            </div>
            <div>
              <h4 className="text-colum-bold" style={{ textAlign: "left" }}>
                Domina los temas
              </h4>
              <p className="text-colum" style={{ textAlign: "left" }}>
                Aprende de un verdadero experto en la materia y con nuestras
                asesorías virtuales.
              </p>
            </div>
          </div>
          <div style={{ flexFlow: "row", display: "flex" }}>
            <div style={{ marginRight: 8 }}>
              <img
                src="/assets/img/der3.svg"
                alt="mejoras tu oportunidad"
                width="50"
              />
            </div>
            <div>
              <h4 className="text-colum-bold" style={{ textAlign: "left" }}>
                Mejora tu ingreso
              </h4>
              <p className="text-colum" style={{ textAlign: "left" }}>
                {" "}
                Cursos claros, enfocados en desarrollar tus habilidades
                prácticas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
