import { StyleSheet, Text, TextInput, View, Button } from 'react-native';
import React from 'react';

function ApiScreen({ navigation, route }) {

    const [theText, setText] = React.useState('');

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>The api</Text>
            
        </View>
    );
}

export default ApiScreen

const styles = StyleSheet.create({})