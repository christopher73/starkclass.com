import React, { Component } from "react";
import Pagos from "../components/Pay/paySM";
import "./style.css";

export default class Pay extends Component {
  amount;

  componentWillMount() {
    if (this.props.location && this.props.location.state) {
      if (this.props.location.state.amount) {
        this.amount = this.props.location.state.amount;
      } else {
        this.props.history.push("/pagoSM");
      }
    } else {
      this.props.history.push("/pagoSM");
    }
  }

  render() {
    return <Pagos amount={this.amount}></Pagos>;
  }
}
