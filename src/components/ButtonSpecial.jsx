import React from 'react';
import { View, Pressable, Text, StyleSheet } from 'react-native';

export default function ButtonSpecial({ label, theme, onPress }) {

    if (theme === "selector") {
        console.log('LABEL : ', label, ' / THEME : ', theme, ' / ONPRESS : ', onPress)
        return (
            <View>
                <Pressable style={button.selector}
                    onPress={onPress}>
                        <Text style={button.selectorText}>{label}</Text>
                </Pressable>
            </View>
        );
    }

    return (
        <View>
            <Pressable onPress={onPress}>
                <Text>{label}</Text>
            </Pressable>
        </View>
    );

}

const button = StyleSheet.create({
    selector: {
        borderColor: '#0e1536',
        borderWidth: 3,
        paddingLeft: 15,
        paddingRight: 10,
        paddingTop: 5,
        paddingBottom: 2.5,
        borderRadius: 50,
        marginVertical: 20,
    },
    selectorText: {
        fontSize: 18,
        fontWeight: 'bold',
    }
})

