import React from "react";

export default function SocialMedia() {
  return (
    <div className="container ">
      <div className="row  contactanos">
        <div
          className="col-12"
          align="center"
          style={{ paddingTop: 40, paddingBottom: 10 }}
        >
          <img
            src="/assets/icons/cello.svg"
            className="img_sello"
            alt="cello"
          />
        </div>

        <h1 id="titulo_stark" className="contacth1">
          Contáctanos
        </h1>

        <div className="col-md-12 m-auto text-left p-2 contacto_informe">
          <img
            src="/assets/icons/mail.svg"
            className="img-contacto"
            alt="cello"
          />
          <span className="h3" style={{ marginLeft: 20 }}>
            Informes@starkclass.com
          </span>
        </div>
        <div className="col-md-12 m-auto  text-left p-2 contacto_informe">
          <a
            href="https://wa.me/51997914757?text=%C2%A1Hola!%20%F0%9F%99%82"
            target="blank"
          >
            <img
              src="/assets/icons/whatsup.svg"
              className="img-contacto"
              alt="cello"
            />
            <span className="h3" style={{ marginLeft: 20 }}>
              997 914 757
            </span>
          </a>
        </div>
        <div className="col-md-12 m-auto  text-left p-2 contacto_informe">
          <a
            href="https://www.instagram.com/starkclass_oficial/"
            target="blank"
          >
            <img
              src="/assets/icons/instagram.svg"
              className="img-contacto"
              alt="cello"
            />
          </a>
          <span className="h3" style={{ marginLeft: 20 }}>
            @starkclass
          </span>
        </div>
        <div className="col-md-12 m-auto  text-left p-2 contacto_informe">
          <a href="https://www.facebook.com/Starkclass/" target="blank">
            <img
              src="/assets/icons/facebook.svg"
              className="img-contacto"
              alt="cello"
            />
          </a>
          <span className="h3" style={{ marginLeft: 20 }}>
            @starkclass
          </span>
        </div>

        <div className="col-md-12 m-auto  text-center p-2" align="center">
          <br />
          <br />
          <br />
          <img
            src="/assets/icons/footer.png"
            className="img-fluid"
            alt="cello"
          />
        </div>
      </div>
    </div>
  );
}
