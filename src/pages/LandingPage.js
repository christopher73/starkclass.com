import React, { useEffect } from "react";

import queryString from "query-string";
import { connect } from "react-redux";
import { registerAuth } from "../actions/actions";

import "../components/LandingPage/styleHome.css";
import Ciclos from "../components/LandingPage/Ciclos";
import XqNosotros from "../components/LandingPage/xqNosotros";
import Intro from "../components/LandingPage/Intro";
import Footer from "../components/Footer/footer";
import ComoFunciona from "../components/LandingPage/ComoFunciona";
import SocialMediaLinks from "../components/LandingPage/SocialMediaLinks";

function LandingPage(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
    var query = queryString.parse(props.location.search);
    if (query.token) {
      props.registerAuth(query.token, props.history);
    }
  });
  return (
    <div
      style={{
        backgroundColor: "white",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Intro />
      <XqNosotros />
      <Ciclos />
      <ComoFunciona />
      <SocialMediaLinks />
      <Footer sectionR={true} />
    </div>
  );
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  error: state.error,
});

export default connect(mapStateToProps, {
  registerAuth,
})(LandingPage);
