import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//Jtoken setup
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
//Redux setup
import store from "./store/store";
import { Provider } from "react-redux";
import { setCurrentUser, logoutUser } from "./actions/actions";

import MenuBar from "./components/Menu";
import Login from "./pages/Login";
import Register from "./pages/Register";
import UserDashboard from "./pages/UserDashboard";
import PrivateRoute from "./pages/PrivateRoute";

//REFACTORIZADO
import LandingPage from "./pages/LandingPage";

import Pagos from "./pages/Pay";
import PagosSM from "./pages/PaySM";
// import Ciclos from "./pages/Ciclos";
import VimeoPlayer from "./pages/vimeoPlayer";
import VimeoPlayerSM from "./pages/vimeoPlayerSM";
import Ulima from "./pages/Ulima";
import SanMarcos from "./pages/Smarcos";
import AdSense from "react-adsense";

//

// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
  // Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Redirect to login
    window.location.href = "./login";
  }
}
export default function App() {
  return (
    <Provider store={store}>
      <Router>
        <div align='center' style={{ backgroundColor: "#fff" }}>
          <AdSense.Google
            client='ca-pub-5518804397665911'
            slot='8960762629'
            style={{ display: "block" }}
            format='auto'
            responsive='true'
            layoutKey='-gw-1+2a-9x+5c'
          />
        </div>
        <MenuBar />
        <Route exact path='/' component={LandingPage} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/register' component={Register} />
        <Route exact path='/ciclo-pre-Lima' component={Ulima} />
        <Route exact path='/ciclo-san-marcos' component={SanMarcos} />
        <Switch>
          <PrivateRoute exact path='/pago' component={Pagos} />
          <PrivateRoute exact path='/rep' component={VimeoPlayer} />
          <PrivateRoute exact path='/pagoSM' component={PagosSM} />
          <PrivateRoute exact path='/repSM' component={VimeoPlayerSM} />
          <PrivateRoute exact path='/dashboard' component={UserDashboard} />
          <PrivateRoute exact path='/perfil' component={UserDashboard} />
        </Switch>
      </Router>
    </Provider>
  );
}
