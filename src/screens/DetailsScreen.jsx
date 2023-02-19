import { Pressable, View, Text, Image, StyleSheet, TextInput, Button, Icon } from 'react-native';
import React, { useEffect, useState } from 'react';
import {capitalize} from '../../utils/texting.js';
import {saveFav, getFav, removeFav} from '../../utils/storage.js';


function DetailsScreen({ route, navigation }) {

    const { pokemon } = route.params;
    navigation.setOptions({ title: capitalize(pokemon) });

    const [details, setDetails] = useState([]);
    const [isFavoris, setIsFavoris] = useState([]);
    const [favoris, setFavoris] = useState([]);

    const fetchPokemonDetails = () => {
      // console.log(route.params)
      // const {state} = navigation;
      fetch(`https://pokeapi.co/api/v2/pokemon/${route.params.pokemon}`)
        .then(res => res.json())
        .then(details => setDetails(details));
    };

    const getFavoris = () => {
      getFav().then(rez => {
        setFavoris(rez)
      })
    }

    const displayFavoris = () => {
      if (details.length > 0) {
        getFav().then(rez => {
          setIsFavoris(rez.find(el => el == details.id))
        })
      }
    }

    useEffect(() => {
      fetchPokemonDetails();
    }, []);

    useEffect(() => {
      getFavoris();
    }, []);

    useEffect(() => {
      displayFavoris();
    }, [details.length]);
    
    
    return details.name ? (
      // <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <View style={{ flex: 1, alignItems: 'center', paddingTop: 30}}>

        <Image
            style={styles.image}
            source={{
                uri: `https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/${details.name}.png`,
            }}
        />
        <Text style={styles.number}>N°{JSON.stringify(details.id)}</Text>
        <Text style={styles.name}>{capitalize(details.name)}</Text>
        <View style={{display: 'flex', flexDirection: 'row',}}>
          <Text style={styles.text}>Height: {details.height}</Text>
          <Text style={styles.text}>Weight: {details.weight}</Text>
        </View>

        <Text style={styles.text}>Type: {details.types[0].type.name}</Text>

          <View style={styles.separator} />
        <Button title="Activer/Desactiver favoris" onPress={() => saveFav(details)} color="#0e1536"/>
          

      </View>
    ):(
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>An error has occured</Text>
        <Button title="Go back" onPress={() => navigation.goBack()} color="#0e1536"/>
      </View>
    )
}

export default DetailsScreen

const styles = StyleSheet.create({
  image: {
    width: 300,
    height: 300,
    backgroundColor: 'white',
    borderRadius: 200
  },
  number: {
    position: 'absolute', 
    top: 280, 
    fontWeight: 'bold', 
    color: 'lightgrey', 
    fontSize: 20,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 25,
    marginTop: 15,
    marginBottom: 15,
  },
  text: {
    paddingHorizontal: 15,
    paddingVertical: 5,
    marginBottom: 10,
    marginHorizontal: 5,
    borderRadius: 30,
    fontWeight: 'bold',
    color: 'white',
    backgroundColor: '#e90015',
  },
  separator: {
    marginVertical: 5,
  },
})