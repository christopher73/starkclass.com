import React from "react";
import Dashboard from "../components/Dashboards";
import "./style.css";
import ScrollUp from "../components/ScrollUp/ScrollUp";

export default function UserDashboard() {
  return (
    <>
      <ScrollUp />
      <Dashboard comprar={true} />
    </>
  );
}
