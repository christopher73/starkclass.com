import React from "react";
import { Link } from "react-router-dom";

export default function ClassicModal({ setIsShowNotPremiumModal, materials }) {
  function rendermaterial() {
    if (materials) {
      return materials.map((el, ind) => {
        return (
          <div key={ind}>
            {/* <a href={el.name}>ZOOM LINK</a> */}
            <a launch='' href={el.name}>
              Ir a Zoom{" "}
            </a>
          </div>
        );
      });
    }
  }
  return (
    <div
      className='fondoGrisRep'
      style={{
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        height: "100%",
        width: "100%",
      }}
    >
      <div
        className='row'
        style={{
          justifyContent: "center",
          alignContent: "center",
          height: "100%",
          position: "fixed",
        }}
      >
        <div className='caja'>
          <div className='cabeceracaja' style={{ justifyContent: "flex-end" }}>
            <h1>Link de Clases Online</h1>

            <div
              className='cerrar'
              onClick={() => setIsShowNotPremiumModal(false)}
            >
              <img alt='img' src='./assets/icons/cerrar.png' width='20' />
            </div>
          </div>
          <div className='bodycaja'>
            <div
              style={{
                paddingTop: 18,
                justifyContent: "center",
                display: "flex",
                flexFlow: "column",
              }}
            >
              <label
                style={{
                  textAlign: "center",
                  width: "100%",
                  marginTop: 5,
                  fontSize: 16,
                }}
              >
                Hola, entra al LINK:
              </label>
              <div style={{ textAlign: "center", paddingTop: 18 }}>
                {rendermaterial()}
              </div>
              <p className='text-colum-bold'>
                <strong>NOTA:</strong>
              </p>

              <p>
                *Conecta tu cable de Red a la PC o Laptop.
                <br />
                *Descarga Zoom.
                <br />
                *Usa audifonos para que puedas escuchar mejor.
                <br />
                *Presta atención a las clases.
              </p>
              <br />
              <h1
                style={{
                  textAlign: "center",
                  fontSize: 18,
                  marginBottom: 18,
                }}
              >
                ¡ESTAMOS MEJORANDO PARA BRINDARTE LA MEJOR EXPERIENCIA ONLINE!
              </h1>

              <Link style={{ alignSelf: "center", width: "70%" }} to={"/pago"}>
                <div
                  style={{
                    height: 65,
                    backgroundColor: "#E3085C",
                    color: "white",
                    textAlign: "center",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 24,
                  }}
                >
                  Comprar
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
