import React, { useEffect } from "react";
import Main from "../components/Main";
import queryString from "query-string";
import { connect } from "react-redux";
import { registerAuth } from "../actions/actions";
// import FBComments from '../components/FBComments';

function MainPage(props) {
  useEffect(() => {
    var query = queryString.parse(props.location.search);
    if (query.token) {
      props.registerAuth(query.token, props.history);
      // window.localStorage.setItem("jwt", query.token);
      // this.props.history.push("/");
    }
  });

  return <Main />;
}

const mapStateToProps = state => ({
  auth: state.auth,
  error: state.error
});

export default connect(mapStateToProps, {
  registerAuth
})(MainPage);
