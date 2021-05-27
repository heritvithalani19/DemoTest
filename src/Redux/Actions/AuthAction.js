import {
    LOGIN_REQUEST,
    LOGOUT_REQUEST,
    REGISTER_DEVICE_TOKEN_REQUEST
} from '../Types/AuthTypes'


// Login request
export const loginRequest = (params) => {
    return {
        type: LOGIN_REQUEST,
        params
    }
}

// Register toekn request
export const registerdeviceTokenRequest = (isConfigured) => {
    return {
        type: REGISTER_DEVICE_TOKEN_REQUEST,
        payload: isConfigured
    }
}

// logout request
export const logoutRequest = (params) => {
    return {
        type: LOGOUT_REQUEST,
        params
    }
}


