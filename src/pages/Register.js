import React, { Component } from "react";
import { connect } from "react-redux";
import { registerAuth } from "../actions/actions";

import Footer from "../components/Footer/footer";
import "./style.css";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      password2: "",
    };
  }
  componentDidMount() {
    // If logged in and user navigates to Register page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/perfil");
    }
  }

  render() {
    return (
      <div style={{ backgroundColor: "white" }}>
        <div className="fondoorange">
          <div className="container ">
            <div />
            <div className="row" style={{ justifyContent: "center" }}>
              <div className="pruebah3">
                <h3>PRUEBA GRATIS</h3>
              </div>
            </div>
            <div className="row" style={{ justifyContent: "center" }}>
              <div className="pruebah1">
                <h1>SUSCRÍBETE</h1>
                <h1>GRATIS</h1>
              </div>
            </div>
            <div className="row" style={{ justifyContent: "center" }}>
              <div className="col-sm-12 text-center pruebap">
                <p>
                  Starkclass.com es la mejor opción para tu ingreso a la
                  universidad
                </p>
              </div>
              <div className="row " style={{ marginTop: 25, marginBottom: 30 }}>
                <h1
                  className="m-auto text-center renderizar"
                  style={{ color: "#707070" }}
                >
                  REGÍSTRATE{" "}
                  <img
                    style={{ marginLeft: 15, marginTop: -20 }}
                    width="60"
                    alt="¡PRUEBA GRATIS!"
                    src="/assets/icons/robot.png"
                  />
                </h1>
              </div>
            </div>
            <div className="row" style={{ justifyContent: "center" }}>
              <div className="col-sm-4 my-2 ">
                <button
                  onClick={() =>
                    (window.location = `${process.env.REACT_APP_API_URL}/api/users/auth/facebook`)
                  }
                  className="btn-facebook m-auto w-100 p-2 rounded-lg"
                >
                  <img
                    alt="fb_logo"
                    src="./assets/icons/fb_logo.png"
                    width="35"
                    style={{ marginRight: 30, marginTop: -5 }}
                  />{" "}
                  Facebook
                </button>
              </div>
              <div className="col-sm-4 my-2 ">
                <button
                  onClick={() =>
                    (window.location = `${process.env.REACT_APP_API_URL}/api/users/auth/google`)
                  }
                  className="btn-google m-auto w-100 p-2 bg-light rounded-lg"
                >
                  <img
                    alt="gmaillogo"
                    src="./assets/icons/icon_gmail.png"
                    width="35"
                    style={{ marginRight: 30, marginTop: -5 }}
                  />{" "}
                  Gmail
                </button>{" "}
              </div>
            </div>
            <div className="row">
              <div
                className="col-12 text-center loginp"
                style={{ marginTop: 60, marginBottom: 40 }}
              >
                <p style={{ color: "#707070" }}>
                  {" "}
                  Aplican la{" "}
                  <a
                    rel="noopener noreferrer"
                    href="https://firebasestorage.googleapis.com/v0/b/starkclass-fb3e8.appspot.com/o/term-conditions%2FPol%C3%ADticas%20de%20Privacidad%20Starkclass.com.pdf?alt=media&token=636cfec7-7cbe-4138-b11f-217d83f82151"
                    // href="https://firebasestorage.googleapis.com/v0/b/starkclass-fb3e8.appspot.com/o/term-conditions%2FPoliticas%20de%20Privacidad%20Starkclass.pdf?alt=media&token=5736236a-4975-47c5-a22b-5bd379051a38"
                    target="_blank"
                  >
                    Políticas de privacidad
                  </a>{" "}
                  y{" "}
                  <a
                    rel="noopener noreferrer"
                    href="https://firebasestorage.googleapis.com/v0/b/starkclass-fb3e8.appspot.com/o/term-conditions%2FT%C3%A9rminos%20de%20Servicio%20Starkclass.com.pdf?alt=media&token=8133e83d-b093-4182-b72f-6d598c3b2629"
                    // href="https://firebasestorage.googleapis.com/v0/b/starkclass-fb3e8.appspot.com/o/term-conditions%2FTerminos%20de%20Servicio%20Starkclass.pdf?alt=media&token=93cf2117-5b1b-4703-aced-77b148e14434"
                    target="_blank"
                  >
                    Términos de servicio
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        <Footer sectionR={false} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, {
  registerAuth,
})(Register);
