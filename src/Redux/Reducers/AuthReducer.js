import {
    LOGIN_SUCCESS,
    LOGIN_FAIL,

    REGISTER_DEVICE_TOKEN_REQUEST,

    LOGOUT_REQUEST
} from '../Types/AuthTypes'

const INITIAL_STATE = {
    tokenConfigure: false
};

export default (state = INITIAL_STATE, action) => {
    console.log(action, 'Action -------')
    switch (action.type) {

        case LOGIN_SUCCESS:
            return { ...state, LoginSuccess: true, LoginData: action.payload }

        case LOGIN_FAIL:
            return { ...state, LoginSuccess: false, LoginData: action.payload }

        case REGISTER_DEVICE_TOKEN_REQUEST:
            return { ...state, tokenConfigure: action.payload }

        case LOGOUT_REQUEST:
            return { ...state, Logout: true, LogoutData: '' }

        default:
            return state
    }

}