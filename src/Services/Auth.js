import { Constants } from '../CommonConfig';
import { Tools } from '../Helpers';

const BASE_URL = Tools.isTestEnvironment()
    ? Constants.BASE_URL.TEST
    : Constants.BASE_URL.PROD;

// Residential ---------------
export default {

    // login
    Login: (params) => {

        return fetch(BASE_URL + 'login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(params)
        })
            .then((response) => {
                return response.json()
            })
    }
};
