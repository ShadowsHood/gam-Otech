import { StyleSheet, Text, TextInput, View, Button, FlatList, TouchableOpacity, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import {capitalize} from '../../utils/texting.js';
import {saveFav, getFav, removeFav} from '../../utils/storage.js';

function FavoriteScreen({ navigation, route }) {

    // const [theText, setText] = React.useState('');
    // const [rez, setRez] = useState([]);
    const [favoris, setFavoris] = useState([]);

    useEffect(() => {
        fetching();
    }, []);
    
    const fetching = async () => {
        getFav().then(rez => {
            setFavoris(rez)
        })
    }

    const renderPokemon = (pokemon, index)=>{
        //console.log(pokemon)
        return(<TouchableOpacity
            activeOpacity={0.5}
            key={index}
            style={styles.card}
            onPress={() =>
                navigation.navigate('Details', {
                    pokemon: pokemon.name,
                })
            }>
            <Image
                style={{ width: 150, height: 150 }}
                source={{
                    uri: `https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/${pokemon.name}.png`,
                }}
            />
            <Text>{capitalize(pokemon.name)}</Text>
        </TouchableOpacity>);
        
    };

    return (

        <View style={styles.container}>
            
            <Button title="Remove all favorite" onPress={() => removeFav()} color="#0e1536"/>
            <View style={styles.separator} />
            <FlatList 
                data={favoris}
                renderItem={({item, index})=>renderPokemon(item, index)}
                numColumns={2}
            />
        </View>
    );
}

export default FavoriteScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // flexWrap: 'wrap',
        // justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        width: '100%',
    },
    card: {
        display: 'flex',
        alignItems: 'center',
        marginHorizontal: 20,
        marginVertical: 10,
        backgroundColor: 'white',
        borderRadius: 15,
        paddingBottom: 15,
    },
    separator: {
        marginVertical: 5,
    },
});