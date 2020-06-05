import ActionTypes from "../constants/ActionTypes";
import jwt_decode from "jwt-decode";
import setAuthToken from "../utils/setAuthToken";

export const registerAuth = (token, history) => (dispatch) => {
  console.log("im here ");
  console.log(token);

  localStorage.setItem("jwtToken", token);
  // Set token to Auth header
  setAuthToken(token);
  // Decode token to get user data
  const decoded = jwt_decode(token);
  // Set current user
  dispatch(setCurrentUser(decoded));
  // history.push("/dashboard");
  history.push("/dashboard");
};
// Set logged in user
export const setCurrentUser = (decoded) => {
  return {
    type: ActionTypes.SET_CURRENT_USER,
    payload: decoded,
  };
};
// Log user out
export const logoutUser = () => (dispatch) => {
  // Remove token from local storage
  localStorage.removeItem("jwtToken");
  // Remove auth header for future requests
  setAuthToken(false);
  // Set current user to empty object {} which will set isAuthenticated to false
  dispatch(setCurrentUser({}));
};
