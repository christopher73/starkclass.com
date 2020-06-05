import React, { Component } from "react";
import User from "../components/User/perfilUser";
import UserDashboard from "../components/UserDashboard";
import "./style.css";

export default class Perfil extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return <UserDashboard comprar={true} />;
  }
}
