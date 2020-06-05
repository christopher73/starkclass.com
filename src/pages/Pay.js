import React, { Component } from "react";
import Pagos from "../components/Pay/pay";
import "./style.css";

export default class Pay extends Component {
  amount;

  componentWillMount() {
    if (this.props.location && this.props.location.state) {
      if (this.props.location.state.amount) {
        this.amount = this.props.location.state.amount;
      } else {
        this.props.history.push("/pago");
      }
    } else {
      this.props.history.push("/pago");
    }
  }

  render() {
    return <Pagos amount={this.amount}></Pagos>;
  }
}
