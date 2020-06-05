import React from "react";

export default function PremiumModal({ setIsShowMaterials, materials }) {
  function rendermaterial() {
    if (materials) {
      return materials.map((el, ind) => {
        return (
          <div>
            <a href={el.name}>{el.name}</a>
          </div>
        );
      });
    }
  }
  return (
    <div className="fondoGrisRep">
      <div
        className="row"
        style={{
          justifyContent: "center",
          alignContent: "center",
          height: "100%",
        }}
      >
        <div className="caja">
          <div
            className="cabeceracaja"
            style={{ justifyContent: "center", alignContent: "center" }}
          >
            <h1>Link de Clases Online</h1>
            <div className="cerrar" onClick={() => setIsShowMaterials(false)}>
              <img alt="img" src="./assets/icons/cerrar.png" width="20" />
            </div>
          </div>
          <div className="bodycaja">
            <br />
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
            <p className="text-colum-bold">
              <strong>NOTA:</strong>
            </p>

            <p>
              *Conecta tu cable de Red a la PC o Laptop.
              *Descarga Zoom.
              *Usa audifonos para que puedas escuchar mejor.
              *Presta atención a las clases.
            </p>
            <br />
            <h1 style={{ textAlign: "center", fontSize: 18, marginBottom: 18 }}>
              ¡ESTAMOS MEJORANDO PARA BRINDARTE LA MEJOR EXPERIENCIA ONLINE!
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
