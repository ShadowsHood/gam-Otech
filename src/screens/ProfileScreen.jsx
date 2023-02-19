import * as ImagePicker from 'expo-image-picker';
import { StyleSheet, View, Button } from 'react-native';
import React, { useEffect, useState } from 'react';
import ButtonSpecial from '../components/ButtonSpecial.jsx';
import ImageViewer from '../components/ImageViewer.jsx';

function ProfileScreen({ navigation, route }) {

    const [selectedImage, setSelectedImage] = useState(null);

    const PlaceholderImage = require('../../assets/placeholder.png');

    const pickImageAsync = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
          allowsEditing: true,
          quality: 1,
        });
    
        if (!result.canceled) {
            setSelectedImage(result.assets[0].uri);
        } else {
            alert('You did not select any image.');
        }
    };

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

            <ImageViewer
            placeholderImageSource={PlaceholderImage}
            selectedImage={selectedImage}
            />

            <ButtonSpecial theme="selector" label="Choose a photo" onPress={pickImageAsync} />

            <Button title="Favoris" onPress={() => navigation.navigate('Favoris')} color="#0e1536"/>
        </View>
    );
}

export default ProfileScreen

const styles = StyleSheet.create({

})