import ActionTypes from "../constants/ActionTypes";

export const setCiclo = (data) => dispatch => {

    let info = JSON.stringify(data)
    localStorage.setItem("ciclo", info);
    return dispatch({type: ActionTypes.SET_CURRENT_CICLO, payload: {data}})
    // history.push("/dashboard");
  };
  export const setCicloSM = (data) => dispatch => {

    let info = JSON.stringify(data)
    localStorage.setItem("ciclo2", info);
    return dispatch({type: ActionTypes.SET_CURRENT_CICLO, payload: {data}})
    // history.push("/dashboard");
  };
  // Set 