// --------------- LIBRARIES ---------------
import * as React from 'react';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

// --------------- ASSETS ---------------
import { myPrayerRequestStyle as styles } from './styles';
import { } from '../../CommonConfig';
import { MyStatusBar, Header } from '../../Components/Common';
import { Navigation } from '../../Helpers';

// --------------- FUNCTION DECLARATION ---------------
const ScreenName = () => {
    // --------------- STATE ---------------
    // --------------- LIFECYCLE ---------------
    // --------------- METHODS ---------------
    const onPressBack = () => {
        Navigation.goBack();
    };

    // --------------- UI METHODS ---------------
    // --------------- RENDER ---------------
    return (
        <SafeAreaView style={styles.container} edges={['bottom']}>
            <MyStatusBar />
            <Header showLogo hideSearchButton onPressBack={onPressBack} />
        </SafeAreaView>
    );
};

export default ScreenName;
