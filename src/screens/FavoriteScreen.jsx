import { StyleSheet, Text, TextInput, View, Button, FlatList, TouchableOpacity, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import {capitalize} from '../../utils/texting.js';
import {saveFav, getFav, removeFav} from '../../utils/storage.js';

function FavoriteScreen({ navigation, route }) {

    const [theText, setText] = React.useState('');
    const [rez, setRez] = useState([]);
    const [favoris, setFavoris] = useState([]);

    const fetchFavoris = () => {
        getFav().then(rez => {           
            setRez(rez);
        })
    }
    const appendFavoris = () => {
            let favoris = []
            rez.forEach(pokemonId => {
                fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
                .then(res => res.json())
                // .then(details => {return [...favoris,details]}).then(res=>{console.log(res[0].name);setFavoris(res)})
                .then(details => favoris.push(details)).then(setFavoris(favoris))
            })
           
    }

    useEffect(() => {
        fetchFavoris();
    }, []);
    useEffect(() => {
        if (rez.length > 0) appendFavoris();
    }, [rez.length]);

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
                    uri: `https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/${pokemon.name
                        }.png`,
                }}
            />
            <Text>{capitalize(pokemon.name)}</Text>
            <Text>{pokemon.order}</Text>
        </TouchableOpacity>);
    };

    return (

        <View>
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
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center',
      marginTop: 30,
    },
    card: {
      display: 'flex',
      alignItems: 'center',
      borderBottomWidth: 1,
      borderBottomColor: 'black',
      marginHorizontal: 20,
      marginVertical: 10,
    },
});