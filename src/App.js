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
import ContactUS from "./pages/ContactUS";
import Login from "./pages/Login";
import Register from "./pages/Register";
import UserDashboard from "./pages/UserDashboard";
import PrivateRoute from "./pages/PrivateRoute";

//REFACTORIZADO
import MainPage from "./pages/MainPage";
import Politica from "./pages/Politica";
import Terminos from "./pages/Terminos";
import Preguntas from "./pages/Preguntas";
import Pagos from "./pages/Pay";
// import Ciclos from "./pages/Ciclos";
import VimeoPlayer from "./pages/vimeoPlayer";
import Ulima from "./pages/Ulima";
import SanMarcos from "./pages/Smarcos";
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
        <MenuBar />
        <Route exact path="/login" component={Login} />
        <Route exact path="/contactUs" component={ContactUS} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/politica" component={Politica} />
        <Route exact path="/terminos" component={Terminos} />
        <Route exact path="/preguntas" component={Preguntas} />
        <Route exact path="/ciclo-pre-Lima" component={Ulima} />
        <Route exact path="/ciclo-san-marcos" component={SanMarcos} />
        <Route exact path="/" component={MainPage} />
        <Switch>
          <PrivateRoute exact path="/pago" component={Pagos} />
          <PrivateRoute exact path="/rep" component={VimeoPlayer} />
          <PrivateRoute exact path="/dashboard" component={UserDashboard} />
          <PrivateRoute exact path="/perfil" component={UserDashboard} />
        </Switch>
      </Router>
    </Provider>
  );
}
