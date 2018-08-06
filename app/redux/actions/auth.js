export const types = {
  LOGIN: {
    REQUEST: 'AUTH.LOGIN.REQUEST',
    SUCCESS: 'AUTH.LOGIN.SUCCESS',
    FAILURE: 'AUTH.LOGIN.FAILURE',
  },
  LOGOUT: {
    REQUEST: 'AUTH.LOGOUT.REQUEST',
    SUCCESS: 'AUTH.LOGOUT.SUCCESS',
    FAILURE: 'AUTH.LOGOUT.FAILURE',
  },
};

export const login = credential => ({
  type: types.LOGIN.REQUEST,
  credential,
});

export const loginSuccess = credential => ({
  type: types.LOGIN.SUCCESS,
  credential,
});

export const loginFailure = error => ({
  type: types.LOGIN.FAILURE,
  error,
});

export const logout = () => ({
  type: types.LOGOUT.REQUEST,
});

export const logoutSuccess = () => ({
  type: types.LOGOUT.SUCCESS,
});

export const logoutFailure = error => ({
  type: types.LOGOUT.FAILURE,
  error,
});
