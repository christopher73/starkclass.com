import React, { Component } from "react";
import Footer from "../../Footer/footer";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import firebase from "../../../utils/firebase";
import { getCiclo } from "../../../services/vimeo";
import * as cicloAction from "../../../actions/ciclo.actions";
class perfilUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showNoPremiumModal: false,
      showMaterials: false,
      materials: null,
    };
  }
  _getMaterial = async () => {
    //const  ruta  = await this.state.playList.info[this.state.playSelected].name
    const db = await firebase.app().storage();
    let items = [];
    //const name = this.state.pickerValues[this.state.pickSelected].displayName
    //const res = await  db.ref(`/Psicología y Desarrollo /1 Psicología como ciencia`).listAll()
    const res = await db.ref(`/LinkZoom`).listAll();
    if (res.items && res.items.length > 0) {
      res.items.map(async (el, ind) => {
        let obj = {
          name: "https://zoom.us/j/" + el.name.substring(0, 10),
          url: el.fullPath,
          download: await el.getDownloadURL(),
          type: el.getMetadata(),
        };
        items.push(obj);
      });
    }
    console.log("debuggin: ", res);
    console.log("materials: ", items);
    return this.setState({ materials: items });
  };
  rendermaterial = () => {
    if (this.state.materials) {
      return this.state.materials.map((el, ind) => {
        console.log(el);
        return (
          <div>
            {" "}
            <a href={el.name}>{el.name}</a>
          </div>
        );
      });
    }
  };
  showMaterials = () => {
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
              <div
                className="cerrar"
                onClick={() => this.setState({ showMaterials: false })}
              >
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
                Hola, entra al LINK PRIVADO:
              </label>
              <div style={{ textAlign: "center", paddingTop: 18 }}>
                {this.rendermaterial()}
              </div>
              <p className="text-colum-bold">
                <strong>NOTA:</strong>
              </p>

              <p>
                *Clase de PRUEBA GRATIS, sábado 18 de Abril 8:30 PM. <br />
                *Fecha de inicio: Martes 21 de Abril. <br />
                *Clases Online: Martes, miércoles, jueves y viernes de 8:30 a
                10:00 PM. <br /> *Descarga Zoom. <br />
                *Si deseas clases particulares online, escríbenos al WhatsApp
                997 914 757
              </p>
              <br />
              <h1
                style={{ textAlign: "center", fontSize: 18, marginBottom: 18 }}
              >
                ¡ESTAMOS MEJORANDO PARA BRINDARTE LA MEJOR EXPERIENCIA ONLINE!
              </h1>
            </div>
          </div>
        </div>
      </div>
    );
  };
  _noPremiumModal = () => {
    return (
      <div
        className="fondoGrisRep"
        style={{
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          height: "100%",
          width: "100%",
        }}
      >
        <div
          className="row"
          style={{
            justifyContent: "center",
            alignContent: "center",
            height: "100%",
            position: "fixed",
          }}
        >
          <div className="caja">
            <div
              className="cabeceracaja"
              style={{ justifyContent: "flex-end" }}
            >
              <div
                className="cerrar"
                onClick={() => this.setState({ showNoPremiumModal: false })}
              >
                <img alt="img" src="./assets/icons/cerrar.png" width="20" />
              </div>
            </div>
            <div className="bodycaja">
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
                  Hola, entra al LINK PRIVADO:
                </label>
                <div style={{ textAlign: "center", paddingTop: 18 }}>
                  {this.rendermaterial()}
                </div>
                <p className="text-colum-bold">
                  <strong>NOTA:</strong>
                </p>

                <p>
                  *Clase de PRUEBA GRATIS, sábado 18 de Abril 8:30 PM. <br />
                  *Fecha de inicio: Martes 21 de Abril. <br />
                  *Clases Online: Martes, miércoles, jueves y viernes de 8:30 a
                  10:00 PM. <br /> *Descarga Zoom. <br />
                  *Si deseas clases particulares online, escríbenos al WhatsApp
                  997 914 757
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

                {/* <label
                  style={{
                    textAlign: "center",
                    width: "100%",
                    marginBottom: 18,
                    fontSize: 16,
                  }}
                >
                  Lo sentimos, función no habilitada para usuarios gratuitos.
                  <br />
                  Fecha de inicio sábado 18 de abril.
                </label>
                <h1
                  style={{
                    textAlign: "center",
                    fontSize: 20,
                    marginBottom: 18,
                  }}
                >
                  ¡Anímate a esta nueva experiencia y matricúlate ahora!
                </h1> */}
                <Link
                  style={{ alignSelf: "center", width: "70%" }}
                  to={"/pago"}
                >
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
  };

  async componentDidMount() {
    await getCiclo().then((res) => {
      console.log("response ciclo: ", res);
      this.props.setCicloData(res);
    });
    await this._getMaterial();
    console.log("auth", this.props.auth);
    // KEY()
  }

  render() {
    const { user } = this.props.auth;
    return (
      <div style={{ backgroundColor: "white" }}>
        <div>
          {this.state.showMaterials ? this.showMaterials() : null}
          {this.state.showNoPremiumModal ? this._noPremiumModal() : null}
          <img
            id="login"
            className="h-100 w-100 p-0"
            src="/assets/img/perfil.png"
            alt="login"
          />
        </div>
        <div className="container">
          <div className="row" style={{ justifyContent: "center" }}>
            <div className="col-md-5 col-12 perfilh1" align="center">
              <h1 style={{ textTransform: "capitalize" }}>
                {" "}
                ¡Bienvenido {user.name.split(" ")[0]}!
                <img
                  className="padding-mobile"
                  src="assets/icons/ovni.png"
                  width="40"
                  style={{ marginTop: -10, marginLeft: 20 }}
                  alt=""
                />
              </h1>
              <div />
            </div>
          </div>
          <div className="row" style={{ justifyContent: "center" }}>
            <div className="col-md-5 col-12 perfilleft">
              <div style={{ width: "100%" }} className="centarfoto">
                <img src={user.photo} width="150" alt="" />
              </div>
              <h5>
                <strong style={{ textTransform: "uppercase" }}>
                  User ID:{" "}
                </strong>
                <br />
                {user.userId ? (
                  <span
                    style={{
                      color: "orange",
                      fontSize: "1.6rem",
                      textTransform: "uppercase",
                    }}
                  >
                    {user.userId} {user.isPremium ? "- PREMIUM" : "- CLASSIC"}
                  </span>
                ) : (
                  <span style={{ color: "orange", fontSize: "1.6rem" }}>-</span>
                )}
              </h5>
              <h5>
                <strong style={{ textTransform: "uppercase" }}>E-mail: </strong>
                <br />
                {user.email}
              </h5>
              <h5 style={{ textTransform: "capitalize" }}>
                <strong style={{ textTransform: "uppercase" }}>Nombre: </strong>
                <br />
                {user.name}
              </h5>
              <h5>
                <strong style={{ textTransform: "uppercase" }}>Ciclo:</strong>
                <br /> Pre Ulima 2020
              </h5>
            </div>
            <div className="col-md-5 col-12 perfilR" align="right">
              <Link to={"/rep"}>
                <button
                  id="boton-comprar"
                  className="btn btn-succes btn-lg shadow-lg "
                >
                  Ver Clases
                </button>
              </Link>
              <button
                id="boton-comprar"
                className="btn btn-succes btn-lg shadow-lg "
                onClick={async () => {
                  if (this.props.auth.user.isPremium) {
                    // this.setState({ showNoPremiumModal: true });
                    this.setState({ showMaterials: true });
                  } else {
                    // this.setState({ showMaterials: true });
                    this.setState({ showNoPremiumModal: true });
                  }
                }}
              >
                Clases Online
              </button>
              {this.props.comprar &&
              this.props.auth.user.isPremium === false ? (
                <Link to="/pago">
                  <button
                    id="boton-comprar"
                    className="btn btn-succes btn-lg shadow-lg "
                  >
                    Comprar
                  </button>
                </Link>
              ) : null}
            </div>
          </div>

          <div
            className="row"
            style={{ justifyContent: "center", marginTop: 120 }}
          >
            {this.props.auth.user.isPremium ? (
              <button className="pagolink btn btn-link">Boleta de Pago</button>
            ) : null}
          </div>
        </div>
        <div className="col-md-12 m-auto  text-center p-2" align="center">
          <br />
          <img
            src="/assets/icons/footer.png"
            className="img-fluid"
            alt="cello"
          />
        </div>
        <Footer sectionR={false} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});

const mapDispatchToProps = (dispatch, props) => ({
  setCicloData: (data) => dispatch(cicloAction.setCiclo(data)),
});
export default connect(mapStateToProps, mapDispatchToProps)(perfilUser);
