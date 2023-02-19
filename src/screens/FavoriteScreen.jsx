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
    console.log("favoris ----- : ", favoris)

    // const tableFetch = async () => {
    //     getFav().then(async (rez) => {           
    //         let urls = rez.reduce((Calls, pokemonId) => {
    //         Calls.push(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
    //         return Calls;
    //         }, []);
        
    //         const texts = await Promise.all(
    //         urls.map(async (url) => {
    //             const resp = await fetch(url);
    //             return resp.json();
    //         })
    //         );
        
    //         let dataCollected = texts.reduce((dataCollected, response) => {
    //         dataCollected = dataCollected.concat(response.data);
    //         return dataCollected;
    //         }, []);

    //         setFavoris(dataCollected);
    //     });
    // };

    const renderPokemon = (pokemon, index)=>{
        //console.log(pokemon)
        // return(<TouchableOpacity
        //     activeOpacity={0.5}
        //     key={index}
        //     style={styles.card}
        //     onPress={() =>
        //         navigation.navigate('Details', {
        //             pokemon: pokemon.name,
        //         })
        //     }>
        //     <Image
        //         style={{ width: 150, height: 150 }}
        //         source={{
        //             uri: `https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/${pokemon.name}.png`,
        //         }}
        //     />
        //     <Text>{capitalize(pokemon.name)}</Text>
        //     <Text>{pokemon.order}</Text>
        // </TouchableOpacity>);
        return (
            <Text>{pokemon}</Text>
        )
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