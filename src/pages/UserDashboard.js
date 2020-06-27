import React from "react";
import Dashboard from "../components/Dashboards";
import "./style.css";
import ScrollUp from "../components/ScrollUp/ScrollUp";
import AdSense from "react-adsense";

export default function UserDashboard() {
  return (
    <>
      <ScrollUp />
      <Dashboard comprar={true} />
      <AdSense.Google
        client='ca-pub-5518804397665911'
        slot='4769757241'
        style={{ display: "inline-block", width: "200px", height: "450px" }}
        layout='in-article'
        format='fluid'
      />
    </>
  );
}
