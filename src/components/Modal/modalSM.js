import React, { Component } from "react";
import "./style.css";

export default class modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      cupon: "",
      allSet: null,
      checked: false,
      amount: 0,
      appliqued: false,
      payAcccepted: false,
    };
  }

  componentWillMount() {
    const { amount } = this.props;
    this.setState({ amount });
  }
  checkCupon() {
    if (this.state.allSet === false) {
      alert(`CODIGO "${this.state.cupon}" no valido`);
    }
  }
  cerrar() {
    this.props.modalCerrar("");
  }
  aplicar() {
    window.location.replace(
      "https://www.mercadopago.com.pe/checkout/v1/redirect?pref_id=520976081-c49124b4-d60a-40b9-8afc-baa2e6997f32"
    );
  }

  noAplicar() {
    window.location.replace(
      "https://www.mercadopago.com.pe/checkout/v1/redirect?pref_id=520976081-aa7b5bf9-7bd9-4596-943d-ab61df889588"
    );
  }

  render() {
    if (this.props.tipo === "yape") {
      return (
        <div className="fondoGris">
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
                <h1>¡Gracias por confiar en nosotros!</h1>
                <div className="cerrar" onClick={this.cerrar.bind(this)}>
                  <img
                    src="./assets/icons/cerrar.png"
                    width="20"
                    alt="cerrar icon"
                  />
                </div>
              </div>
              <div className="bodycaja" align="center">
                <br />
                <p>
                  “Yapea” al número <strong>997 914 757</strong> o escanea el
                  código QR con Yape.
                </p>
                <div className="row" style={{ justifyContent: "center" }}>
                  <div className="col-4" align="center">
                    <img
                      src="./assets/icons/yape.png"
                      className="yape"
                      alt="yape"
                    />
                  </div>
                  <div className="col-4" align="center">
                    <img
                      src="./assets/img/qr.svg"
                      className="yape"
                      alt="yape"
                    />
                    <p>STARKCLASS</p>
                    <br />
                  </div>
                </div>
                <p>
                  Luego ENVÍA un mensaje al <br />
                  <strong>WhatsApp (997 914 757)</strong> <br /> o al correo
                  <br /> <strong>(informes@starkclass.com) </strong> <br />
                  con la captura de pantalla o fotografía del comprobante de
                  pago, además de brindarnos tus nombres completos, correo
                  electrónico del cual te suscribiste y User ID de Starkclass o
                  envíanos una captura de pantalla de tu perfil de Starkclass.
                </p>
                <br />
                <p>
                  <strong>En menos de una hora, tendrás acceso.</strong>
                </p>

                <br />
                <p style={{ color: "#707070" }}>
                  Aplican la{" "}
                  <a
                    href="https://firebasestorage.googleapis.com/v0/b/starkclass-fb3e8.appspot.com/o/term-conditions%2FPoliticas%20de%20Privacidad%20Starkclass.pdf?alt=media&token=5736236a-4975-47c5-a22b-5bd379051a38"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Política{" "}
                  </a>
                  y los{" "}
                  <a
                    href="https://firebasestorage.googleapis.com/v0/b/starkclass-fb3e8.appspot.com/o/term-conditions%2FTerminos%20de%20Servicio%20Starkclass.pdf?alt=media&token=93cf2117-5b1b-4703-aced-77b148e14434"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Términos
                  </a>{" "}
                  de servicio{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      );
    } else if (this.props.tipo === "bcp") {
      return (
        <div className="fondoGris">
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
                <h1>¡Gracias por confiar en nosotros!</h1>
                <div className="cerrar" onClick={this.cerrar.bind(this)}>
                  <img src="./assets/icons/cerrar.png" width="20" alt="" />
                </div>
              </div>
              <div className="bodycaja" align="center">
                <img src="./assets/icons/bcp.png" alt="bcp logo" />
                <br />
                <br />
                <h3>Deposita al número de cuenta:</h3>
                <h3>193-2625326-0-43 (MYCODE S.A.C)</h3>
                <br />

                <p>
                  Luego ENVÍA un mensaje al <br />
                  <strong>WhatsApp (997 914 757)</strong> <br />o al correo{" "}
                </p>
                <p>
                  <strong>(informes@starkclass.com)</strong> <br />
                  con la captura de pantalla o fotografía del comprobante de
                  pago, además de brindarnos tus nombres completos, correo
                  electrónico del cual te suscribiste y User ID de Starkclass o
                  envíanos una captura de pantalla de tu perfil de Starkclass.
                </p>
                <br />
                <p>
                  <strong>En menos de una hora, tendrás acceso.</strong>
                </p>

                <br />
                <p style={{ color: "#707070" }}>
                  Aplican la{" "}
                  <a
                    href="https://firebasestorage.googleapis.com/v0/b/starkclass-fb3e8.appspot.com/o/term-conditions%2FPoliticas%20de%20Privacidad%20Starkclass.pdf?alt=media&token=5736236a-4975-47c5-a22b-5bd379051a38"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Política{" "}
                  </a>
                  y los{" "}
                  <a
                    href="https://firebasestorage.googleapis.com/v0/b/starkclass-fb3e8.appspot.com/o/term-conditions%2FTerminos%20de%20Servicio%20Starkclass.pdf?alt=media&token=93cf2117-5b1b-4703-aced-77b148e14434"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Términos
                  </a>{" "}
                  de servicio{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      );
    } else if (this.props.tipo === "culqi") {
      return (
        <div className="fondoGris">
          <div
            className="row"
            style={{
              justifyContent: "center",
              alignContent: "center",
              height: "100%",
            }}
          >
            <div
              className="caja"
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#E4E4E4",
                padding: 16,
                width: 500,
              }}
            >
              <div
                className="cerrar"
                onClick={this.cerrar.bind(this)}
                style={{ alignSelf: "flex-end" }}
              >
                <img alt="img" src="./assets/icons/cerrar.png" width="20" />
              </div>
              <img
                alt="mercado pago logo"
                src="./assets/img/mp.svg"
                width="130"
                height="130"
                style={{ marginBottom: 15 }}
              />

              <div
                style={{
                  display: "flex",
                  flexFlow: "column",
                  alignItems: "center",
                }}
              >
                <h4
                  style={{
                    fontWeight: "100",
                    color: "#707070",
                    marginBottom: 15,
                    textAlign: "center",
                  }}
                >
                  ¿Tienes cupón de descuento?
                </h4>
                <input
                  placeholder="Inserte código promocional"
                  onChange={(e) => {
                    this.setState({ cupon: e.target.value });
                  }}
                  style={{
                    width: "80%",
                    height: 40,
                    borderWidth: 1,
                    borderColor: "#707070",
                    textAlign: "center",
                    backgroundColor: `${
                      this.state.cupon === ""
                        ? "white"
                        : this.state.cupon === "3MESES"
                          ? "#00CD00"
                          : "#F80513"
                      }`,
                  }}
                />
                {this.state.cupon === "" ? null : this.state.cupon ===
                  "3MESES" ? (
                    <p style={{ color: "#00CD00" }}>Código válido</p>
                  ) : (
                    <p style={{ color: "#F80513" }}>Código no válido</p>
                  )}
                <br />
                <label style={{ display: "flex" }}>
                  <input
                    type="checkbox"
                    name="aceptarterminos"
                    style={{ width: 20, marginRight: 8, height: 20 }}
                    onChange={(e) => {
                      console.log("click checkbox: ", e.target.checked);
                      this.setState({ checked: e.target.checked });
                    }}
                  />
                  <p style={{ color: "#707070" }}>
                    Acepto la{" "}
                    <a
                      href="https://firebasestorage.googleapis.com/v0/b/starkclass-fb3e8.appspot.com/o/term-conditions%2FPoliticas%20de%20Privacidad%20Starkclass.pdf?alt=media&token=5736236a-4975-47c5-a22b-5bd379051a38"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Política{" "}
                    </a>
                    y los{" "}
                    <a
                      href="https://firebasestorage.googleapis.com/v0/b/starkclass-fb3e8.appspot.com/o/term-conditions%2FTerminos%20de%20Servicio%20Starkclass.pdf?alt=media&token=93cf2117-5b1b-4703-aced-77b148e14434"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Términos
                    </a>{" "}
                    de servicio{" "}
                  </p>
                </label>
                <button
                  className={
                    this.state.checked && this.state.cupon === "3MESES"
                      ? "show"
                      : "disabled"
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={this.aplicar}
                  // href="https://www.mercadopago.com.pe/checkout/v1/redirect?pref_id=520976081-c9da5f8e-9779-414a-8495-0911090f8e35"
                  style={{
                    backgroundColor: "#009EE3",
                    color: "white",
                    textAlign: "center",
                    width: 120,
                    height: 40,
                    border: "none",
                    boxShadow: "0 5px 10px #00000097",
                    paddingTop: 10,
                    marginBottom: 15,
                  }}
                >
                  Sí, aplicar
                </button>
                <button
                  className={this.state.checked === false ? "disabled" : ""}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={this.noAplicar}
                  // href="https://www.mercadopago.com.pe/checkout/v1/redirect?pref_id=520976081-2e91369c-9f9c-49e1-ac44-1b2adc52a6b1"
                  style={{
                    backgroundColor: "#009EE3",
                    color: "white",
                    textAlign: "center",
                    alignContent: "center",
                    width: 120,
                    height: 40,
                    border: "none",
                    boxShadow: "0 5px 10px #00000097",
                    paddingTop: 10,
                    marginBottom: 15,
                  }}
                >
                  No, pagar
                </button>
                <br />
                <p
                  className="culqi-mobile"
                  style={{ fontSize: ".7rem" }}
                  align="center"
                >
                  Luego ENVÍA un mensaje al <br />
                  <strong>WhatsApp (997 914 757)</strong> <br /> o al correo
                  <br /> <strong>(informes@starkclass.com) </strong> <br />
                  con la captura de pantalla o fotografía del comprobante de
                  pago, además de brindarnos tus nombres completos, correo
                  electrónico del cual te suscribiste y User ID de Starkclass o
                  envíanos una captura de pantalla de tu perfil de Starkclass.
                </p>
                <br />
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}
