// --------------- LIBRARIES ---------------
import React from 'react';
import {
    TouchableOpacity,
    Text,
    StyleSheet,
    ActivityIndicator,
    View,
    Image,
} from 'react-native';

// --------------- ASSETS ---------------
import { Colors, Fonts, Matrics, MainStyles } from '../../CommonConfig';

// --------------- COMPONENT ---------------
const Button = ({
    icon,
    label,
    onPress,
    style,
    iconStyle,
    textStyle,
    isLoading,
    disabled,
    isFilled,
    activeOpacity,
}) => {
    return (
        <TouchableOpacity
            delayPressIn={0}
            onPress={onPress}
            activeOpacity={activeOpacity ?? 0.5}
            disabled={disabled}
            style={[styles.wrapper(isFilled ?? true, disabled), style]}>
            {isLoading ? (
                <ActivityIndicator
                    style={styles.activityIndicator}
                    color={Colors.WHITE}
                    size={'small'}
                />
            ) : (
                    <View style={styles.rowCenter}>
                        {icon && (
                            <Image
                                style={[
                                    styles.icon(isFilled ?? true, disabled),
                                    iconStyle,
                                ]}
                                source={icon}
                                resizeMode={'contain'}
                            />
                        )}
                        <Text
                            numberOfLines={1}
                            style={[
                                styles.label(isFilled ?? true, disabled, icon),
                                textStyle,
                            ]}>
                            {label}
                        </Text>
                    </View>
                )}
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    wrapper: (isFilled, disabled) => ({
        height: Matrics.mvs(45),
        borderRadius: Matrics.mvs(6),
        justifyContent: 'center',
        // backgroundColor: isFilled
        //     ? disabled
        //         ? Colors.GRAY
        //         : Colors.PRIMARY
        //     : Colors.WHITE,
        backgroundColor: Colors.PRIMARY
        // borderWidth: isFilled ? 0 : 1,
        // borderColor: disabled ? Colors.GRAY : Colors.PRIMARY,
        // ...(!disabled && MainStyles.shadow),
    }),
    activityIndicator: {
        alignSelf: 'center',
    },
    rowCenter: {
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: Matrics.s(18),
    },
    icon: (isFilled, disabled) => ({
        height: Matrics.mvs(17),
        width: Matrics.mvs(17),
        marginRight: Matrics.s(18),
        tintColor: isFilled
            ? Colors.WHITE
            : disabled
                ? Colors.GRAY
                : Colors.PRIMARY,
    }),
    label: (isFilled, disabled, icon) => ({
        fontSize: Matrics.mvs(14),
        fontFamily: Fonts.SemiBold,
        flex: 1,
        color: isFilled
            ? Colors.WHITE
            : disabled
                ? Colors.GRAY
                : Colors.PRIMARY,
        textAlign: icon ? 'left' : 'center',
    }),
});

export default Button;
