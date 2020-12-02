import React, { Component } from "react";
import { Link } from "react-router-dom";
import FavoriteIcon from "@material-ui/icons/Favorite";
import "./styleFooter.css";

export default class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="footer" style={{ backgroundColor: "white" }}>
        <div className="container-fluid">
          <div className="row text-center">
            {this.props.sectionR ? (
              <div
                className="col-md-7 div_footer_left"
                style={{
                  backgroundColor: "white",
                  paddingLeft: 7,
                  paddingRight: 7,
                }}
              >
                <button className="sinHover btn btn-link">
                  <a>
                    Built with passion{" "}
                    <FavoriteIcon fontSize="small" htmlColor="red" /> by
                    Christopher Fajardo
                  </a>
                </button>
              </div>
            ) : null}
            {this.props.sectionR ? (
              <div
                className="col-md-5 div_footer_rigth my-auto"
                style={{ backgroundColor: "white" }}
              >
                <div className="row">
                  <div
                    className="col-4 my-auto"
                    style={{ paddingLeft: 7, paddingRight: 7 }}
                  >
                    <a
                      rel="noopener noreferrer"
                      href="https://firebasestorage.googleapis.com/v0/b/starkclass-fb3e8.appspot.com/o/term-conditions%2FPreguntas%20Frencuentes%20Starkclass.com.pdf?alt=media&token=70070479-b034-4d61-86c3-c732c55a4b38"
                      // href="https://firebasestorage.googleapis.com/v0/b/starkclass-fb3e8.appspot.com/o/term-conditions%2FPREGUNTAS%20FRECUENTES.pdf?alt=media&token=4d9daf58-0b12-4178-a55c-153932e98da6"
                      target="_blank"
                    >
                      Preguntas frecuentes
                    </a>
                  </div>
                  <div
                    className="col-4 my-auto"
                    style={{ paddingLeft: 7, paddingRight: 7 }}
                  >
                    <a
                      rel="noopener noreferrer"
                      href="https://firebasestorage.googleapis.com/v0/b/starkclass-fb3e8.appspot.com/o/term-conditions%2FT%C3%A9rminos%20de%20Servicio%20Starkclass.com.pdf?alt=media&token=8133e83d-b093-4182-b72f-6d598c3b2629"
                      // href="https://firebasestorage.googleapis.com/v0/b/starkclass-fb3e8.appspot.com/o/term-conditions%2FTerminos%20de%20Servicio%20Starkclass.pdf?alt=media&token=93cf2117-5b1b-4703-aced-77b148e14434"
                      target="_blank"
                    >
                      Términos
                    </a>
                  </div>
                  <div
                    className="col-4 my-auto"
                    style={{ paddingLeft: 7, paddingRight: 7 }}
                  >
                    <a
                      rel="noopener noreferrer"
                      href="https://firebasestorage.googleapis.com/v0/b/starkclass-fb3e8.appspot.com/o/term-conditions%2FPol%C3%ADticas%20de%20Privacidad%20Starkclass.com.pdf?alt=media&token=636cfec7-7cbe-4138-b11f-217d83f82151"
                      // href="https://firebasestorage.googleapis.com/v0/b/starkclass-fb3e8.appspot.com/o/term-conditions%2FPoliticas%20de%20Privacidad%20Starkclass.pdf?alt=media&token=5736236a-4975-47c5-a22b-5bd379051a38"
                      target="_blank"
                    >
                      Políticas de privacidad
                    </a>
                  </div>
                </div>
              </div>
            ) : null}
          </div>
          <div className="row text-center">
            <div
              className="col-md-12 "
              style={{
                backgroundColor: "white",
                paddingLeft: 7,
                paddingRight: 7,
              }}
            >
              <button className="sinHover btn btn-link">
                Copyright ©
                <Link to="/#home" className=" text-dark">
                  {" "}
                  Starkclass
                </Link>{" "}
                2019
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
