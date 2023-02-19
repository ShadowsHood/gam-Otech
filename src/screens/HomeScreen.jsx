// RNCS RACOURCI
import { ImageBackground, StyleSheet, Text, TextInput, View, Button, Image } from 'react-native';
import React from 'react';

const Separator = () => <View style={styles.separator} />;

function HomeScreen({ navigation, route }) {
    React.useEffect(() => {
        if (route.params?.post) {
          // Post updated, do something with `route.params.post`
          // For example, send the post to the server
        }
    }, [route.params?.post]);

    return (
        <View style={styles.body}>
        <ImageBackground source={require('../../assets/background.png')} resizeMode="cover" style={styles.image}>
            <Image
            style={{ width: 355, height: 64, marginBottom: 150,}}
            source={require('../../assets/logo.png')}
            />
            <Button
                color="#0e1536"
                title="Pokedex"
                onPress={() => navigation.navigate('Liste')}
            />
            <Separator />
            <Button
                color="#0e1536"
                title="Profil"
                onPress={() => navigation.navigate('Profil')}
            />

        </ImageBackground>        
        </View>
    );
}

export default HomeScreen

const styles = StyleSheet.create({
    body: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    },
    separator: {
        marginVertical: 15,
    },
})