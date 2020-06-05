import React from "react";

import { Link } from "react-router-dom";
import { connect } from "react-redux";

class Ciclos extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  // componentDidMount() {
  //   // console.log("ciclos: ", this.props.auth.user);
  // }

  render() {
    return (
      <div className=" text-center">
        <div className="jumbotron pt-3 path_gris">
          <div id="ciclosuni" />

          <div className="row py-4">
            <div className="col-12 text-center">
              <h1 id="titulo_stark" className="nuestrociclo">
                Nuestros Ciclos
              </h1>
              <br />
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-sm-12 col-12">
                <div
                  className="card"
                  style={{
                    paddingTop: 20,
                    paddingBottom: 20,
                  }}
                >
                  <div className="card-img-top" style={{ marginTop: 15 }}>
                    {" "}
                    <Link
                      to={{
                        pathname: "/ciclo-pre-lima",
                        state: {
                          amount: 34900,
                        },
                      }}
                    >
                      <div>
                        <img
                          src="./assets/img/1.png"
                          className="img-fluid"
                          alt="clasesa"
                        />
                      </div>{" "}
                    </Link>
                  </div>
                  <div className="card-body">
                    <h4 className="text-colum-bold" style={{ fontSize: 30 }}>
                      Ciclo Pre Ulima
                    </h4>
                    <div
                      style={{
                        height: 50,
                        width: "100%",
                        marginBottom: 0,
                        paddingTop: 15,
                      }}
                    >
                      <p style={{ alignSelf: "center", fontSize: 20 }}>
                        <img
                          src="./assets/icons/check.png"
                          alt="check"
                          width="30"
                          style={{ marginRight: 10 }}
                        />
                        Completo
                      </p>
                    </div>
                    <div
                      className="my-2"
                      style={{
                        width: "100%",
                      }}
                    >
                      <p
                        style={{
                          alignSelf: "center",
                          marginBottom: "0",
                          fontSize: 20,
                        }}
                      >
                        <img
                          src="./assets/icons/star.png"
                          alt="check"
                          width="30"
                          className="my-auto"
                          style={{ marginRight: 10 }}
                        />
                        4.88
                      </p>
                    </div>
                    <div
                      style={{
                        height: 30,
                        width: "100%",
                        marginBottom: 0,
                        paddingTop: 0,
                      }}
                    >
                      <p style={{ alignSelf: "center", fontSize: 20 }}>
                        <img
                          src="./assets/icons/people.png"
                          alt="check"
                          width="30"
                          style={{ marginRight: 10 }}
                        />
                        234
                      </p>
                    </div>
                    {/* <div style={{ flexDirection: "row" }}>
                      <div
                        style={{ width: "100%", float: "left" }}
                        className="precio_ciclo"
                      >
                        <h3 className="text-center py-2">S/ 99.00 X MES </h3>
                      </div>
                    </div> */}

                    <div style={{ clear: "both" }}></div>
                    {/* {this.props.auth.user.isPremium ? (
                      <Link
                        className="w-50 btn btn-outline-primary btn_ciclo margin_ciclo_button"
                        to={{
                          pathname: "/rep",
                        }}
                      >
                        Ver Clases
                      </Link>
                    ) : (
                      <Link
                        className="w-50 btn btn-outline-primary btn_ciclo margin_ciclo_button"
                        to={{
                          pathname: "/pago",
                          state: {
                            amount: 34900,
                          },
                        }}
                      >
                        COMPRAR
                      </Link>
                    )} */}
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-sm-12 col-12">
                <div
                  className="card"
                  style={{
                    paddingTop: 20,
                    paddingBottom: 20,
                  }}
                >
                  <div className="card-img-top" style={{ marginTop: 15 }}>
                    {" "}
                    <Link
                      to={{
                        pathname: "/ciclo-san-marcos",
                        state: {
                          amount: 34900,
                        },
                      }}
                    >
                      <div>
                        <img
                          src="./assets/img/2.png"
                          className="img-fluid"
                          alt="clasesa"
                        />
                      </div>{" "}
                    </Link>
                  </div>
                  <div className="card-body">
                    <h4 className="text-colum-bold" style={{ fontSize: 30 }}>
                      Ciclo San Marcos
                    </h4>
                    <div
                      style={{
                        height: 50,
                        width: "100%",
                        marginBottom: 0,
                        paddingTop: 15,
                      }}
                    >
                      <p style={{ alignSelf: "center", fontSize: 20 }}>
                        <img
                          src="./assets/icons/check.png"
                          alt="check"
                          width="30"
                          style={{ marginRight: 10 }}
                        />
                        Completo
                      </p>
                    </div>
                    <div
                      className="my-2"
                      style={{
                        width: "100%",
                      }}
                    >
                      <p
                        style={{
                          alignSelf: "center",
                          marginBottom: "0",
                          fontSize: 20,
                        }}
                      >
                        <img
                          src="./assets/icons/star.png"
                          alt="check"
                          width="30"
                          className="my-auto"
                          style={{ marginRight: 10 }}
                        />
                        4.15
                      </p>
                    </div>
                    <div
                      style={{
                        height: 30,
                        width: "100%",
                        marginBottom: 0,
                        paddingTop: 0,
                      }}
                    >
                      <p style={{ alignSelf: "center", fontSize: 20 }}>
                        <img
                          src="./assets/icons/people.png"
                          alt="check"
                          width="30"
                          style={{ marginRight: 10 }}
                        />
                        576
                      </p>
                    </div>
                    {/* <div style={{ flexDirection: "row" }}>
                      <div
                        style={{ width: "100%", float: "left" }}
                        className="precio_ciclo"
                      >
                        <h3 className="text-center py-2">S/ 99.00 X MES </h3>
                      </div>
                    </div> */}

                    <div style={{ clear: "both" }}></div>
                    {/* {this.props.auth.user.isPremium ? (
                      <Link
                        className="w-50 btn btn-outline-primary btn_ciclo margin_ciclo_button"
                        to={{
                          pathname: "/rep",
                        }}
                      >
                        Ver Clases
                      </Link>
                    ) : (
                      <Link
                        className="w-50 btn btn-outline-primary btn_ciclo margin_ciclo_button"
                        to={{
                          pathname: "/pago",
                          state: {
                            amount: 34900,
                          },
                        }}
                      >
                        COMPRAR
                      </Link>
                    )} */}
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-sm-12 col-12">
                <div
                  className="card"
                  style={{
                    paddingTop: 20,
                    paddingBottom: 20,
                  }}
                >
                  <div className="card-img-top" style={{ marginTop: 15 }}>
                    <div>
                      <img
                        src="./assets/img/4.png"
                        className="img-fluid"
                        alt="clasesc"
                      />
                    </div>
                  </div>
                  <div className="card-body">
                    <h4 className="text-colum-bold" style={{ fontSize: 30 }}>
                      Ciclo Pre Católica
                    </h4>
                    <div
                      style={{
                        height: 50,
                        width: "100%",
                        marginBottom: 0,
                        paddingTop: 15,
                        // paddingLeft: 15
                      }}
                    >
                      <p style={{ alignSelf: "center", fontSize: 20 }}>
                        <img
                          src="./assets/icons/loading5.gif"
                          alt="cargando"
                          width="30"
                          style={{ marginRight: 10 }}
                        />
                        En proceso
                      </p>
                    </div>
                    <div
                      className="my-2"
                      style={{
                        width: "100%",
                      }}
                    >
                      <p
                        style={{
                          alignSelf: "center",
                          marginBottom: "0",
                          fontSize: 20,
                        }}
                      >
                        <img
                          src="./assets/icons/star.png"
                          alt="check"
                          width="30"
                          className="my-auto"
                          style={{ marginRight: 10 }}
                        />
                        0
                      </p>
                    </div>
                    <div
                      style={{
                        height: 50,
                        width: "100%",
                        marginBottom: 0,
                        paddingTop: 0,
                      }}
                    >
                      <p style={{ alignSelf: "center", fontSize: 20 }}>
                        <img
                          src="./assets/icons/people.png"
                          alt="check"
                          width="30"
                          style={{ marginRight: 10 }}
                        />
                        0
                      </p>
                    </div>
                    {/* <button className="w-50 mt-5 btn btn-outline-primary btn_ciclo">
                      PRÓXIMAMENTE
                    </button> */}
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-sm-12 col-12 ">
                <div
                  className="card"
                  style={{
                    paddingTop: 20,
                    paddingBottom: 20,
                  }}
                >
                  <div className="card-img-top" style={{ marginTop: 15 }}>
                    <div>
                      <img
                        src="./assets/img/3.png"
                        className="img-fluid"
                        alt="clasesd"
                      />
                    </div>
                  </div>
                  <div className="card-body">
                    <h4 className="text-colum-bold" style={{ fontSize: 30 }}>
                      Ciclo Pre Pacífico
                    </h4>
                    <div
                      style={{
                        height: 50,
                        width: "100%",
                        marginBottom: 0,
                        paddingTop: 15,
                        // paddingLeft: 15
                      }}
                    >
                      <p style={{ alignSelf: "center", fontSize: 20 }}>
                        <img
                          src="./assets/icons/loading5.gif"
                          alt="cargando"
                          width="30"
                          style={{ marginRight: 10 }}
                        />
                        En proceso
                      </p>
                    </div>
                    <div
                      className="my-2"
                      style={{
                        width: "100%",
                      }}
                    >
                      <p
                        style={{
                          alignSelf: "center",
                          marginBottom: "0",
                          fontSize: 20,
                        }}
                      >
                        <img
                          src="./assets/icons/star.png"
                          alt="check"
                          width="30"
                          className="my-auto"
                          style={{ marginRight: 10 }}
                        />
                        0
                      </p>
                    </div>
                    <div
                      style={{
                        height: 50,
                        width: "100%",
                        marginBottom: 0,
                        paddingTop: 0,
                      }}
                    >
                      <p style={{ alignSelf: "center", fontSize: 20 }}>
                        <img
                          src="./assets/icons/people.png"
                          alt="check"
                          width="30"
                          style={{ marginRight: 10 }}
                        />
                        0
                      </p>
                    </div>
                    {/* <button className="w-50 mt-5 btn btn-outline-primary btn_ciclo">
                      PRÓXIMAMENTE
                    </button> */}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <br />
          <br />
          <br />
        </div>
        <div className="row pt-5 mt-5">
          <div className="why-code-title col-sx-10 m-auto">
            <h1 id="titulo_stark" className="dosis">
              ¿CÓMO FUNCIONA?
            </h1>
          </div>
        </div>
        <div className="container">
          <div className="row text-center h3 " style={{ paddingBottom: 100 }}>
            <div className="col-md-3 col-sm-12 col-12  my-3">
              <p className="m-0">
                <img
                  src={"/assets/img/registrate.png"}
                  alt="registrate"
                  width="150"
                />
              </p>
              <p
                id="titulo_stark ffamily"
                style={{ paddingTop: 20, fontSize: 25 }}
              >
                Regístrate
              </p>
            </div>
            <div className="col-md-3 col-sm-12 col-12  my-3">
              <p className="m-0">
                <img
                  src={"/assets/img/comprar.png"}
                  alt="comprar"
                  width="150"
                />
              </p>
              <p
                id="titulo_stark ffamily"
                style={{ paddingTop: 20, fontSize: 25 }}
              >
                Compra
              </p>
            </div>

            <div className="col-md-3 col-sm-12 col-12  my-3">
              <p className="m-0">
                <img src={"/assets/img/ver.png"} alt="ver" width="150" />
              </p>
              <p
                id="titulo_stark ffamily"
                style={{ paddingTop: 20, fontSize: 25 }}
              >
                Ver clases
              </p>
            </div>

            <div className="col-md-3 col-sm-12 col-12  my-3">
              <p className="m-0">
                <img
                  src={"/assets/img/asesoria.png"}
                  alt="asesoria"
                  width="150"
                />
              </p>
              <p
                id="titulo_stark ffamily"
                style={{ paddingTop: 20, fontSize: 25 }}
              >
                Pide asesoría
              </p>
            </div>
          </div>
        </div>

        <div className="container ">
          <div className="row  contactanos">
            <div className="col-md-12 ">
              <img
                src="/assets/icons/cello.svg"
                className="img_sello"
                alt="cello"
              />
            </div>

            <h1 id="titulo_stark" className="contacth1">
              Contáctanos
            </h1>

            <div id="contactos" />
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
                href="https://www.instagram.com/starkclass/?hl=es-la"
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
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});

const mapDispatchToProps = (dispatch, props) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Ciclos);
