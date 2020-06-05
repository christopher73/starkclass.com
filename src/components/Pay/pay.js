import React, { Component } from "react";
import Footer from "../Footer/footer";
import Modal from "../Modal/modal";

export default class pay extends Component {
  amount = 34900;
  constructor() {
    super();
    this.state = {
      value: "",
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    this.amount = this.props;
  }

  async set(event) {
    if (this.state.value === event.target.value) {
      this.setState({ value: "" });
    } else {
      this.setState({ value: event.target.value });
    }
    console.log(this.state.value);
    console.log(event.target.value);
  }

  render() {
    return (
      <div
        style={{
          backgroundColor: "white",
          position: "relative",
          overflow: "hidden",
          minHeight: "100%",
        }}
      >
        <Modal
          tipo={this.state.value}
          modalCerrar={(valor) => {
            this.setState({ value: valor });
          }}
          amount={this.amount}
        />

        <div className="fondoazul">
          <div className="container">
            <h1>¡Tenemos varios métodos de pago, No te preocupes!</h1>
          </div>
        </div>

        <div
          className="container"
          // onChange={this.set.bind(this)}
          style={{ marginTop: 50, marginBottom: 30 }}
        >
          <div className="row" style={{ justifyContent: "center" }}>
            <div
              style={{
                width: 270,
                justifyContent: "center",
                alignContent: "center",
                alignSelf: "center",
                alignItems: "center",
              }}
            >
              <button
                className="btn btn-lg btn-outline-primary my-3 w-100"
                onClick={() => {
                  this.setState({ value: "yape" });
                }}
              >
                Yape
              </button>
              <button
                className="btn btn-lg btn-outline-primary my-3 w-100"
                onClick={() => {
                  this.setState({ value: "bcp" });
                }}
              >
                Depósito Bancario
              </button>
              <button
                className="btn btn-lg btn-outline-primary my-3 w-100"
                onClick={() => {
                  this.setState({ value: "culqi" });
                }}
              >
                Pago Online
              </button>
            </div>
          </div>
        </div>

        <div className="container">
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

        <Footer sectionR={false} />
      </div>
    );
  }
}
