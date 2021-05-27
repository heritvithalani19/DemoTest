// --------------- LIBRARIES ---------------
// --------------- LIBRARIES ---------------
import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import SplashScreen from 'react-native-splash-screen';
import { CommonActions } from '@react-navigation/native';


// --------------- FUNCTION DECLARATION ---------------
const Splash = ({ navigation }) => {
    // --------------- STATE ---------------
    const { Auth } = useSelector((state) => state); // Get reducer state
    const dispatch = useDispatch(); // dispatch method to dispatch our actions to reducer and saga


    // --------------- LIFECYCLE ---------------
    // --------------- LIFECYCLE ---------------
    useEffect(() => {
        if (Object.keys(Auth).length != 0) {
            if ((Auth?.LoginData?.status ?? '0') == 'ok') {
                //tab
                diveIntoApp('Home');
            } else {
                // login
                diveIntoApp('Home');
            }
        } else {
            //login
            diveIntoApp('Home');
        }
    }, []);

    // --------------- METHODS ---------------
    const diveIntoApp = async (val) => {
        navigation.dispatch(
            CommonActions.reset({
                index: 0,
                routes: [{ name: val }],
            }),
        );
    };
    // --------------- UI METHODS ---------------

    // --------------- RENDER ---------------
    return (
        <View />
    );
};

export default Splash;
