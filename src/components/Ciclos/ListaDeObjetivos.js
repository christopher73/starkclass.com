import React from "react";

export default function ListaDeObjetivos() {
  return (
    <div className="row stylep" style={{ justifyContent: "center" }}>
      <div className="col-lg-12 col-md-12 text-center">
        <h1 className="py-4">¿Qué obtendré en Starkclass.com?</h1>
      </div>
      <div className="objetivo-list col-lg-5 col-md-6 text-left">
        <ul>
          {" "}
          <li>Clases GRABADAS.</li>
          <li>REPASO Parcial y Final para la Pre Lima.</li>
          <li>REPASO de Admisión General ULima.</li>
          <li>RESÚMENES en Psicología e História.</li>
        </ul>
      </div>
      <div className="objetivo-list col-lg-4 col-md-6 text-left">
        <ul>
          {" "}
          <li>EXÁMENES Y EJERCICIOS pasados.</li>
          <li>TRACKING Académico.</li>
          <li>ASESORÍA Virtual.</li>
          <li>Material DESCARGABLE.</li>
        </ul>
      </div>
    </div>
  );
}
