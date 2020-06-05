import { combineReducers } from "redux";
import auth from "./auth";
import error from "./error";
import ciclo from './ciclo';
export default combineReducers({ error, auth, ciclo });
