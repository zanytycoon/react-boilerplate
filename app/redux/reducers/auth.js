import { types } from 'redux/actions/auth';

const initialState = {
  loggedIn: false,
  error: null,
};

export default function loginReducer(state = initialState, action = {}) {
  switch (action.type) {
    case types.LOGIN.REQUEST:
    case types.LOGOUT.REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.LOGIN.SUCCESS:
      return {
        ...state,
        loggedIn: true,
      };
    case types.LOGIN.FAILURE:
      return {
        ...state,
        error: action.error,
      };
    case types.LOGOUT.SUCCESS:
      return {
        ...state,
        loggedIn: false,
      };
    case types.LOGOUT.FAILURE:
      return {
        ...state,
        error: action.error,
      };
    default:
      return state;
  }
}
