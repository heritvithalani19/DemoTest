import { Platform } from 'react-native';

export default {
    IS_TESTDATA: '1',
    DEVICE_TYPE: Platform.OS == 'android' ? '2' : '1',
    LINK_T_AND_C: '',
    LINK_PRIVACY_POLICY: '',
    BASE_URL: {
        TEST: 'https://staging.maxims-travel.com/api/v0.3/user/',
        PROD: '',
    },
    ENVIRONMENT: {
        TEST: 'testing',
        PROD: 'production',
    },
    USER_ROLE: {
        USER: 0,
        CHURCH: 1,
    },
    IMAGE_PICKER_TYPE: {
        AVATAR: 0,
        COVER: 1,
    },
    NET_CONNECTION_ERROR: 'Please check your connection',
    // Personal
    // CONNECTING_STRING: 'Endpoint=sb://maxims.servicebus.windows.net/;SharedAccessKeyName=DefaultListenSharedAccessSignature;SharedAccessKey=U+hjA0eVHoJ3mTEJe/RrT+DG482/igeHYRiY3E/qN2k=',
    // HUB_NAME: 'Maxims',
    //Client configuration
    CONNECTING_STRING: 'Endpoint=sb://tmg-test-nh.servicebus.windows.net/;SharedAccessKeyName=DefaultListenSharedAccessSignature;SharedAccessKey=wZ1CbRA3ED9BEqWfC6XMd6UHaSx9pyP+VeO7MsTPtBY=',
    // CONNECTION_STRING: 'Endpoint=sb://tmg-test-nh.servicebus.windows.net/;SharedAccessKeyName=RootManageSharedAccessKey;SharedAccessKey=dWtxDMXGXoQSzbSPs9JdY9XCbu/wrDTYC9YAOa5MReU=',
    HUB_NAME: 'tmg-test-nh01',
    // Sender id from firebase console for cloub messaging
    SENDER_ID: '436959919663',
    FIREBASE_SERVER_KEY: 'AAAAZbzXPi8:APA91bFvb_ldIr4zE2UjGLqnvy6_lGuxMO9XAbRJDbafnNlGHh5fwHkf9BpuRU_ofUX8MCPwtVnytBDzr0igRmtvbXz-LKxLyggdUCVzhx5NZvnXWNVLzfPo8beQGNJIUlUZnFbNGyMC'
};
