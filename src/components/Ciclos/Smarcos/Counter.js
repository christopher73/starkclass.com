import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import TimeCounter from "../TimeCounter";

function Counter({ auth }) {
  return (
    <div style={{ justifyContent: "center" }}>
      <div align="center">
        <br /> <br />
        <h3 style={{ fontSize: "3rem" }} className="m-4 mx-auto text-center">
          OFERTA VÁLIDA HASTA...          <br />
          <br />
          <TimeCounter hr={72} message="El cupón ya expiró" />
        </h3>{" "}
        <br />
        <br />
        {auth.user.isPremium ? (
          <Link
            className="btn-orange btn shadow-lg my-4 mx-auto"
            aria-pressed="true"
            to={{
              pathname: "/dashboard",
            }}
          >
            Ver clases
          </Link>
        ) : (
            <Link
              className="btn-orange btn shadow-lg my-4 mx-auto"
              aria-pressed="true"
              to={{
                pathname: "/dashboard",
              }}
            >
              Comprar
            </Link>
          )}
        <br />
      </div>
    </div>
  );
}
const mapStateToProps = (state) => ({
  auth: state.auth,
});

const mapDispatchToProps = (dispatch, props) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
