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
    
    useEffect(() => {
      fetchPokemonDetails();
    }, []);

    useEffect(() => {
      getFav().then(rez => {
        setFavoris(rez)
      })
    }, []);

    useEffect(() => {
      if (details.length > 0) {
        console.log(' ---- ',details.id)
        console.log(' -------------- ',details.length)
        getFav().then(rez => {
          setIsFavoris(rez.find(el => el == details.id))
        })
      }
    }, [details.length]);
    

    
    return details.name ? (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Image
          style={styles.image}
          source={{
            uri: `https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/${
              details.name
            }.png`,
          }}
        />
        <Text style={styles.text}>{JSON.stringify(details.id)}</Text>
        <Text style={styles.text}>{capitalize(details.name)}</Text>
        <Text style={styles.text}>Height: {details.height}</Text>
        <Text style={styles.text}>Weight: {details.weight}</Text>
        <Text style={styles.text}>
          Ability: {details.abilities[0].ability.name}
        </Text>
        <Text style={styles.text}>Type: {details.types[0].type.name}</Text>

        {/*Favoris*/}
        <Pressable onPress={() => saveFav(details.id)}>
          <Icon
            name={isFavoris ? "heart" : "heart-outline"}
            // size={60}
            // style={{marginTop: 15}}
            color={isFavoris ? "tomato" : "gray"}
          />
        </Pressable>
        {/* <Button title="Add to favorite" onPress={() => saveFav(details.id)} /> */}
        <Button title="Remove all favorite" onPress={() => removeFav()} />
        <Text style={styles.text}>{favoris}</Text>
      </View>
    ):(
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>An error has occured</Text>
        <Button title="Go back" onPress={() => navigation.goBack()} />
      </View>
    )
}

export default DetailsScreen

const styles = StyleSheet.create({})