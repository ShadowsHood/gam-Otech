import { StyleSheet, Text, View, Button } from 'react-native';
import React from 'react';


function DetailsScreen({ route, navigation }) {

    const { itemId, param1 } = route.params;

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Text>{itemId}</Text>
        <Text>{param1}</Text>

        <Button
            title="Go to Details... again"
            onPress={() =>
            navigation.push('Details', {
                itemId: Math.floor(Math.random() * 100),
            })
            }
        />
        <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
        <Button title="Go back" onPress={() => navigation.goBack()} />
      </View>
    );
}

export default DetailsScreen

const styles = StyleSheet.create({})