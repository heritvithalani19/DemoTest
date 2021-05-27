import { all } from 'redux-saga/effects';

import watchAuth from './AuthSaga'

//Main Root Saga
const rootSaga = function* rootSaga() {
    yield all([
        watchAuth()
    ]);
};
export default rootSaga;
