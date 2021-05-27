// --------------- LIBRARIES ---------------
import React from 'react';
import { View, Modal, ActivityIndicator } from 'react-native';

// --------------- ASSETS ---------------
import { Colors, Matrics, Raw } from '../../CommonConfig';

// --------------- COMPONENT DECLARATION ---------------
const Loader = ({ visible }) => {


    return (
        <Modal visible={visible} transparent statusBarTranslucent={true}>
            <View
                style={{
                    flex: 1,
                    justifyContent: 'center',
                    // position: 'absolute',
                    backgroundColor: Colors.OVERLAY_DARK_70,
                    height: visible ? '100%' : 0,
                    width: visible ? '100%' : 0,
                    alignItems: 'center',
                }}>
                <View style={{ paddingVertical: Matrics.mvs(20), paddingHorizontal: Matrics.mvs(20), backgroundColor: Colors.WHITE, borderRadius: Matrics.mvs(10) }}>
                    <ActivityIndicator size='large' color={Colors.PRIMARY} />
                </View>
            </View>
        </Modal>
    );
};

export default Loader;
