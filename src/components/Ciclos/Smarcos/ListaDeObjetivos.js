import React from "react";

export default function ListaDeObjetivos() {
  return (
    <div className="row stylep" style={{ justifyContent: "center" }}>
      <div className="col-lg-12 col-md-12 text-center">
        <h1 className="py-4">¿Qué obtendré en Starkclass.com?</h1>
      </div>
      <div className="objetivo-list col-lg-5 col-md-6 text-left">
        <ul>
          <li>Clases EN VIVO</li>
          <li>TODOS los cursos</li>
          <li>MAÑANA - TARDE</li>
          <li>SIMULACROS de admisión</li>
          <li>SEMINARIOS</li>
        </ul>
      </div>
      <div className="objetivo-list col-lg-4 col-md-6 text-left">
        <ul>
          <li>EXÁMENES y EJERCICIOS</li>
          <li>AULA Virtual</li>
          <li>ASESORÍA Virtual </li>
          <li>Material DESCARGABLE</li>
          <li>Ejercicios ACTUALIZADOS</li>
        </ul>
      </div>
    </div>
  );
}
