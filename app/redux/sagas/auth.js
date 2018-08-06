import { put, takeEvery } from 'redux-saga/effects';
import { push } from 'react-router-redux';

import { loginSuccess, loginFailure, logoutSuccess, logoutFailure } from 'redux/actions/auth';

import { types } from 'redux/actions/auth';

function* loginSaga(action) {
  yield put(loginSuccess({}));
  yield put(push('/'));
}

function* logoutSaga() {
  yield put(logoutSuccess({}));
}

export default [
  takeEvery(types.LOGIN.REQUEST, loginSaga),
  takeEvery(types.LOGOUT.REQUEST, logoutSaga),
];
