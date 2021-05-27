// --------------- LIBRARIES ---------------
import React, { useState, useEffect, useRef, useContext } from 'react';
import {
    TouchableOpacity,
    Text,
    StyleSheet,
    View,
    Image,
    TextInput,
    Animated,
    Platform,
    Keyboard,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

// --------------- ASSETS ---------------
import {
    Colors,
    Fonts,
    Matrics,
    Icons,
    Images,
    MainStyles,
    Constants,
} from '../../CommonConfig';
import { Navigation } from '../../Helpers';

const Header = ({
    style,
    title,
    backIcon,
    rightIcon,
    visibleBackIcon,
    visibleLeftIcon,
    onPressBack,
    onPressRight,
    titleDescription,
    titleDescStyle


}) => {

    const insets = useSafeAreaInsets();

    return (
        <View style={[styles.header(insets.top), style]}>

        </View>
    )

}

export default Header

const styles = StyleSheet.create({
    header: (top) => ({
        paddingHorizontal: Matrics.s(16),
        height: (Platform.OS == 'ios' ? Matrics.vs(45) : Matrics.vs(55)) + top,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.PRIMARY,
        shadowRadius: Matrics.ms(4),
        shadowOpacity: 0.16,
        paddingTop: top
        // ...MainStyles.shadow([0, 1], 0.1, 4, 3),
    })
})