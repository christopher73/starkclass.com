import React from "react";

export default function ComoFunciona() {
  return (
    <React.Fragment>
      {" "}
      <div className='row pt-5 mt-5'>
        <div className='why-code-title col-sx-10 m-auto'>
          <h1 id='titulo_stark' className='dosis'>
            ¿CÓMO FUNCIONA?
          </h1>
        </div>
      </div>
      <div className='container'>
        <div className='row text-center h3 ' style={{ paddingBottom: 100 }}>
          <div className='col-md-3 col-sm-12 col-12  my-3'>
            <p className='m-0'>
              <img
                src={"/assets/img/registrate.png"}
                alt='registrate'
                width='150'
              />
            </p>
            <p
              id='titulo_stark ffamily'
              style={{ paddingTop: 20, fontSize: 25 }}
            >
              Regístrate
            </p>
          </div>
          <div className='col-md-3 col-sm-12 col-12  my-3'>
            <p className='m-0'>
              <img src={"/assets/img/comprar.png"} alt='comprar' width='150' />
            </p>
            <p
              id='titulo_stark ffamily'
              style={{ paddingTop: 20, fontSize: 25 }}
            >
              Compra
            </p>
          </div>
          <div className='col-md-3 col-sm-12 col-12  my-3'>
            <p className='m-0'>
              <img src={"/assets/img/ver.png"} alt='ver' width='150' />
            </p>
            <p
              id='titulo_stark ffamily'
              style={{ paddingTop: 20, fontSize: 25 }}
            >
              Ver clases
            </p>
          </div>
          <div className='col-md-3 col-sm-12 col-12  my-3'>
            <p className='m-0'>
              <img
                src={"/assets/img/asesoria.png"}
                alt='asesoria'
                width='150'
              />
            </p>
            <p
              id='titulo_stark ffamily'
              style={{ paddingTop: 20, fontSize: 25 }}
            >
              Pide asesoría
            </p>
          </div>
          <div className='col-md-12 '>
            <img
              src='/assets/icons/cello.svg'
              className='img_sello mt-4'
              alt='cello'
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
