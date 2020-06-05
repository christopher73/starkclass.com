import ActionType from '../constants/ActionTypes';


const initialState = {
  ciclo: null,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ActionType.SET_CURRENT_CICLO:
      return {
        ...state,
       ciclo: action.payload
      };
    default:
      return state;
  }
}
