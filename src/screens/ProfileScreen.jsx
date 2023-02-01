import { StyleSheet, Text, TextInput, View, Button } from 'react-native';
import React from 'react';

function ProfileScreen({ navigation, route }) {

    const [theText, setText] = React.useState('');

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Profile Screen</Text>
            <Button title="Favorite" onPress={() => navigation.navigate('Favorite')} />
            <TextInput
                multiline
                placeholder="What's on your mind?"
                style={{ height: 200, padding: 10, backgroundColor: 'white' }}
                value={theText}
                onChangeText={setText}
            />
            <Button
                title="Update the title"
                onPress={() => navigation.setOptions({ title: theText })}
            />
        </View>
    );
}

export default ProfileScreen

const styles = StyleSheet.create({})