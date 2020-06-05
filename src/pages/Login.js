import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Footer from "../components/Footer/footer";
import "./style.css";

function Login(props) {
  return (
    <div style={{ backgroundColor: "white" }}>
      <div
        className="gradient-bg center"
        style={{ justifyContent: "center" }}
        align="center"
      >
        <img
          id="login"
          src="/assets/img/laptop.svg"
          alt="login"
          height="350"
          style={{ padding: 20, width: "100%" }}
        />
      </div>
      <div
        className="container d-flex w-100 h-75 p-0"
        style={{ backgroundColor: "white" }}
      >
        <div className="row justify-content-center align-self-center m-auto p-0 w-100">
          <div className="container w-100 h-100 ">
            <div className="row " style={{ marginTop: 35, marginBottom: 30 }}>
              <h2
                className="m-auto text-center renderizar"
                style={{ color: "#707070" }}
              >
                INICIAR SESIÓN{" "}
                <img
                  style={{ marginLeft: 15 }}
                  width="40"
                  alt="¡NO PIERDAS TIEMPO!"
                  src="/assets/icons/cohete2.png"
                />
              </h2>
            </div>

            {/* ================================SOCIAL MEDIA================================== */}

            <div className="row my-3" style={{ justifyContent: "center" }}>
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

            <div
              className="col-12 text-center loginp"
              style={{ marginTop: 30 }}
            >
              <p style={{ color: "#707070" }}>
                ¿Aún no tienes cuenta?{" "}
                <Link to="/register">Regístrate Aquí</Link>
              </p>
            </div>
            <div
              className="col-12 text-center loginp"
              style={{ marginTop: 20, marginBottom: 30 }}
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

const mapStateToProps = (state) => ({
  auth: state.auth,
  error: state.error,
});

export default connect(mapStateToProps, null)(Login);
