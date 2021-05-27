// --------------- LIBRARIES ---------------
import React, { Fragment, useState, useMemo } from 'react';
import {
    TextInput,
    Text,
    Platform,
    UIManager,
    StatusBar,
} from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import DropdownAlert from 'react-native-dropdownalert';
import NetInfo from "@react-native-community/netinfo";

// --------------- ASSETS ---------------
import Routes from './Routes';
import { Store, Persistor } from './Redux/Store';
import { Colors, Constants } from './CommonConfig';

/**
 * Font scalling configuration for Android :)
 */
if (Text.defaultProps == null) Text.defaultProps = {};
Text.defaultProps.allowFontScaling = false;
if (TextInput.defaultProps == null) TextInput.defaultProps = {};
TextInput.defaultProps.allowFontScaling = false;

/**
 * Animation configuration for Android
 */
if (Platform.OS === 'android') {
    if (UIManager.setLayoutAnimationEnabledExperimental) {
        UIManager.setLayoutAnimationEnabledExperimental(true);
    }
}

// --------------- MAIN ---------------
export default () => {
    // Localization configuration

    React.useEffect(() => {
        // Subscribe
        const unsubscribe = NetInfo.addEventListener(state => {
            global.isNetConnected = state.isConnected
        });

        return () => {
            unsubscribe()
        }
        // setEnvironment()
    }, []);

    const setEnvironment = () => {
        global.env = Constants.ENVIRONMENT.TEST
    }

    return (
        <Fragment>
            <Provider store={Store}>
                <PersistGate persistor={Persistor}>
                    <StatusBar barStyle={'light-content'} translucent={true} backgroundColor="transparent" />
                    <Routes />
                    <DropdownAlert
                        ref={ref => global._dropDownAlertRef = ref}
                        closeInterval={3000}
                        translucent={true}
                        activeStatusBarStyle='light-content'
                        inactiveStatusBarStyle='light-content'
                        inactiveStatusBarBackgroundColor={Colors.TRANSPARENT}
                    />
                </PersistGate>
            </Provider>
        </Fragment>
    );
};
