import 'react-native-gesture-handler';
import * as React from 'react';
import { StyleSheet, Image, Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import {
    SafeAreaProvider,
    useSafeAreaInsets,
} from 'react-native-safe-area-context';
import NetInfo from '@react-native-community/netinfo';
import { useSelector, useDispatch } from 'react-redux';

// --------------- ASSETS ---------------
import { navigationRef } from './Helpers/Navigation';
// import { getNetwork } from './Redux/Actions';
import { Colors, Matrics, Icons, MainStyles, Fonts } from './CommonConfig';

// --------------- SCREENS ---------------
import Splash from './Screens/Splash';
import Home from './Screens/Home/Home';


const Stack = createStackNavigator();


// --------------- ROUTES ---------------
const Routes = () => {
    // --------------- REDUCER STATE ---------------
    const { } = useSelector((state) => state); // Get reducer state
    const dispatch = useDispatch(); // dispatch method to dispatch our actions to reducer and saga

    // --------------- LIFECYCLE ---------------
    // React.useEffect(() => {
    //     const unsubscribe = NetInfo.addEventListener((state) => {
    //         // console.log(state);
    //         dispatch(getNetwork.Request(state.isConnected));
    //     });

    //     return unsubscribe();
    // }, []);


    // --------------- RENDER ---------------
    return (
        <SafeAreaProvider>
            <NavigationContainer ref={navigationRef}>
                <Stack.Navigator initialRouteName='Splash'>
                    <Stack.Screen
                        name='Splash'
                        options={{ headerShown: false }}
                        component={Splash}
                    />
                    <Stack.Screen
                        name='Home'
                        component={Home}
                        options={{
                            title: 'Tambah Akun Finansialmu',
                            headerStyle: {
                                backgroundColor: Colors.PRIMARY,
                            },
                            headerTintColor: '#fff',
                            headerTitleStyle: {
                                textAlign: 'center',
                                fontSize: Matrics.mvs(16),
                                color: '#3A3A3A',
                                fontFamily: Fonts.BOLD
                            },

                        }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaProvider>
    );
};

const styles = StyleSheet.create({
    wrapper: (bottom) => ({
        height: Platform.OS == 'ios' ? Matrics.vs(55) + bottom : Matrics.vs(65),
        backgroundColor: Colors.WHITE,
        ...MainStyles.shadowUp,
    }),
    mainTabView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: Matrics.vs(10),
    },
    tabLabel: {
        marginTop: Matrics.vs(5),
        textAlign: 'center',
        fontSize: Matrics.mvs(12),
        fontFamily: Fonts.Regular,
    },
});

export default Routes;