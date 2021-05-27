// --------------- LIBRARIES ---------------
import React from 'react';
import {
    TouchableOpacity,
    Text,
    StyleSheet,
    View,
    TextInput,
    Image,
} from 'react-native';

// --------------- ASSETS ---------------
import { Colors, Fonts, Matrics, Icons } from '../../CommonConfig';
// import ButtonText from './ButtonText';

// --------------- COMPONENT ---------------
const Input = ({
    inputRef,
    value,
    onChangeText,
    editable,
    placeholder,
    keyboardType,
    blurOnSubmit,
    onSubmitEditing,
    returnKeyType,
    secureTextEntry,
    icon,
    showPasswordToggle,
    onPasswordToggle,
    errorMsg,
    style,
    inputWrapperStyle,
    iconStyle,
    inputStyle,
    autoFocus,
    maxLength,
    showTextButton,
    textButtonLabel,
    onPressTextButton,
    multiline,
    placeholderColor,
    onFocus,
}) => {
    return (
        <View style={style}>
            <View
                style={[
                    styles.inputWrapper(errorMsg ?? null),
                    inputWrapperStyle,
                ]}>
                {icon && (
                    <Image
                        style={[styles.icon(value ?? null), iconStyle]}
                        resizeMode='contain'
                        source={icon}
                    />
                )}
                <TextInput
                    style={[styles.input(icon), inputStyle]}
                    ref={inputRef}
                    value={value}
                    onChangeText={onChangeText}
                    editable={editable ?? true}
                    placeholder={placeholder}
                    placeholderTextColor={
                        placeholderColor ?? Colors.INPUT_FIELD
                    }
                    keyboardType={keyboardType ?? 'default'}
                    blurOnSubmit={blurOnSubmit}
                    onSubmitEditing={onSubmitEditing}
                    returnKeyType={returnKeyType}
                    secureTextEntry={secureTextEntry}
                    autoFocus={autoFocus ?? false}
                    maxLength={maxLength}
                    multiline={multiline}
                    onFocus={onFocus}
                />
                {showPasswordToggle && (
                    <TouchableOpacity
                        delayPressIn={0}
                        onPress={onPasswordToggle}
                        activeOpacity={0.5}
                        hitSlop={{ top: 10, right: 10, bottom: 10, left: 10 }}
                        style={styles.toggleButton}>
                        <Image
                            style={styles.toggleIcon}
                            resizeMode='contain'
                            source={
                                secureTextEntry
                                    ? Icons.IC_EYE
                                    : Icons.IC_EYE_HIDE
                            }
                        />
                    </TouchableOpacity>
                )}
                {/* {showTextButton && (
                    <ButtonText
                        text={textButtonLabel}
                        textStyle={styles.textButtonLabel}
                        onPress={onPressTextButton}
                    />
                )} */}
            </View>
            {(errorMsg ?? '') != '' && (
                <Text style={styles.error}>{errorMsg}</Text>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {},
    icon: (value) => ({
        height: Matrics.mvs(17),
        width: Matrics.mvs(17),
        // tintColor: value ? Colors.MATEBLACK : Colors.MATEBLACK,
        marginHorizontal: Matrics.s(18),
        alignSelf: 'center',
    }),
    inputWrapper: (error) => ({
        height: Matrics.mvs(45),
        flexDirection: 'row',
        borderColor: error ? Colors.ERROR : Colors.INPUT_FIELD_BORDER,
        borderRadius: Matrics.mvs(6),
        borderWidth: error ? 1.2 : 1,
        backgroundColor: Colors.WHITE,
    }),
    input: (isIcon) => ({
        flex: 1,
        paddingLeft: isIcon ? 0 : Matrics.s(18),
        paddingTop: 0,
        paddingRight: Matrics.s(18),
        paddingBottom: 0,
        color: Colors.BLACK,
        fontSize: Matrics.mvs(14),
        fontFamily: Fonts.Regular,
    }),
    toggleButton: {
        alignSelf: 'center',
        marginRight: Matrics.s(18),
    },
    toggleIcon: {
        height: Matrics.mvs(18),
        width: Matrics.mvs(18),
        tintColor: Colors.INPUT_FIELD,
    },
    error: {
        fontFamily: Fonts.Regular,
        color: Colors.ERROR,
        fontSize: Matrics.mvs(11),
        paddingTop: Matrics.vs(2),
    },
    textButtonLabel: {
        color: Colors.PRIMARY,
        fontSize: Matrics.mvs(13),
        fontFamily: Fonts.Medium,
        paddingRight: Matrics.s(18),
    },
});

export default Input;
