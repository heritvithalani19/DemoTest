//LIBRARIES
import { put, call, takeEvery } from 'redux-saga/effects';

//ASSETS
import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
} from '../Types/AuthTypes'
import { Auth } from '../../Services'

// Login Request response
export const watchLoginAsync = function* watchLoginAsync({ params }) {

    try {
        const response = yield call(Auth.Login, params)
        yield put({ type: LOGIN_SUCCESS, payload: response })
    }
    catch (e) {

        yield put({ type: LOGIN_FAIL, payload: e })
    }
}


const watchAuth = function* watchAuth() {
    yield takeEvery(LOGIN_REQUEST, watchLoginAsync)
}

export default watchAuth