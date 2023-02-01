import { View, Text, ScrollView, Image, TouchableOpacity, StyleSheet, TextInput, Button, FlatList } from 'react-native';
import React, { useEffect, useState } from 'react';
import {capitalize} from '../../utils/texting.js';
import { withSafeAreaInsets } from 'react-native-safe-area-context';

function ApiScreen({ navigation, route }) {

    const [theText, setText] = React.useState('');

    
    const [pokemons, setPokemons] = useState([]);
    const [next, setNext] = useState(null);
    const [searchfeild, setSearchfeild] = useState('');
    // const [request, setRequest] = useState([]);
    
    useEffect(() => {
        fetchPokemons();
    }, []);
    
    const fetchPokemons = () => {
        // fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
        fetch('https://pokeapi.co/api/v2/pokemon?limit=20')
        .then(response => response.json())
        .then(pokemons => {setPokemons(pokemons.results); setNext(pokemons.next)});
    };
    const fetchMore = ()=> {
        if (next != null ) {
            fetch(next)
            .then(response => response.json())
            .then(pokemons => {pokemons.results.map(el=>setPokemons(previous => [...previous, el]));setNext(pokemons.next)});
        }
    };
    
    const renderPokemon = (pokemon, index)=>{
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

    // const getRequest = (text) => {
    //     fetch('https://pokeapi.co/api/v2/pokemon?limit=20')
    //     .then(response => response.json())
    //     .then(pokemons => {setPokemons(pokemons.results); setNext(pokemons.next)});
    // };

    return (

    <View>
        <View style={styles.searchCont}>
            <TextInput
            style={styles.searchfeild}
            placeholder="Search Pokemons"
            onChangeText={value => setSearchfeild(value)}
            value={searchfeild}
            />
        </View>
        <FlatList 
            data={pokemons
                .filter(pokemon =>
                    pokemon.name.toLowerCase().includes(searchfeild.toLowerCase())
                )
            }
            renderItem={({item, index})=>renderPokemon(item, index)} 
            numColumns={2}
            onEndReached={()=>fetchMore()}
            onEndReachedThreshold={0.5}
        />
    </View>
    );
}

export default ApiScreen;

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
    searchCont: {
      paddingBottom: 10,
      width: '100%',
      zIndex: 1,
      paddingTop: 10,
      display: 'flex',
      alignItems: 'center',
      backgroundColor: 'white',
      boxShadow: '0px 5px 5px red',
    },
    searchfeild: {
      height: 40,
      borderWidth: 1,
      borderColor: '#000',
      textAlign: 'center',
      width: 250,
      borderRadius: 50,
    },
});