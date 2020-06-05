import React from "react";
import { connect } from "react-redux";
import "./style.css";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { logoutUser } from "../../actions/actions";

class NavBar extends React.Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };
  render() {
    const { user, isAuthenticated } = this.props.auth;
    console.log(isAuthenticated, user);
    let notSigned = (
      <>
        <li className="nav-item  ">
          <Link to="/login" className="nav-link">
            Iniciar sesión
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/register"
            className="btn text-center shadow"
            id="btn-register"
          >
            REGISTRATE
          </Link>
        </li>
      </>
    );

    //onClick={this.onLogoutClick}
    let signed = (
      <>
        <li className="nav-item  ">
          <Link to="/dashboard" className="nav-link">
            Mi Perfil
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/"
            onClick={this.onLogoutClick}
            className="btn text-center "
            id="btn-register"
          >
            Cerrar sesión
          </Link>
        </li>
      </>
    );

    return (
      <nav className="navbar navbar-expand-lg navbar-light py-0 justify-content-end">
        <div className="container">
          <Link to="/" className="navbar-brand my-0 py-0" id="btn-login">
            <img id="logo" src="/assets/img/pene1.png" alt="StarkClass" />
          </Link>
          <button
            className="navbar-toggler m-2 navbar-toggler-right"
            type="button"
            data-toggle="collapse"
            data-target="#navbarsExample07"
            aria-controls="navbarsExample07"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className="collapse navbar-collapse flex-grow-0 mb-2 "
            id="navbarsExample07"
          >
            <ul id="nav-ul" className="navbar-nav text-center">
              <li className="nav-item ">
                <HashLink to="/#ciclos" className="nav-link">
                  Los ciclos
                </HashLink>
              </li>
              <li className="nav-item ">
                <HashLink to="/#why-code" className="nav-link">
                  Acerca de
                </HashLink>
              </li>
              <li className="nav-item ">
                <Link to="/contactUs" className="nav-link ">
                  Contáctanos
                </Link>
              </li>
              {isAuthenticated ? signed : notSigned}
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(mapStateToProps, { logoutUser })(NavBar);
