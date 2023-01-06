// RNCS RACOURCI
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';
import React from 'react';

function HomeScreen({ navigation, route }) {
    React.useEffect(() => {
        if (route.params?.post) {
          // Post updated, do something with `route.params.post`
          // For example, send the post to the server
        }
    }, [route.params?.post]);

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        {/* <Button
            title="Go to Details"
            onPress={() => navigation.navigate('Details', {itemId: Math.floor(Math.random() * 100), param1: 'it\'s the first param'})}
        /> */}

        <Button
            title="Profile"
            onPress={() => navigation.navigate('Profile')}
        />

        <Button
            title="Create post"
            onPress={() => navigation.navigate('CreatePost')}
        />
        <Text style={{ margin: 10 }}>Post: {route.params?.post}</Text>
        
        </View>
    );
}

export default HomeScreen

const styles = StyleSheet.create({})