// import AuthReducer, { INITIAL_STATE as INITIAL_AUTH } from './AuthReducer';
import { combineReducers } from 'redux';
import AsyncStorage from '@react-native-async-storage/async-storage'
import AuthReducer from './AuthReducer'
import { LOGOUT_REQUEST } from '../Types';

let appReducer = combineReducers({
    Auth: AuthReducer
    // Common: CommonReducer,
});

const rootReducer = (state, action) => {
    if (action.type === LOGOUT_REQUEST) {
        state = undefined;
        AsyncStorage.clear()
    }

    return appReducer(state, action);
};

export default rootReducer;
