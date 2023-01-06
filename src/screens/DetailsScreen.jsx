import { View, Text, Image, StyleSheet, TextInput, Button } from 'react-native';
import React, { useEffect, useState } from 'react';
import {capitalize} from '../../utils/texting.js';


function DetailsScreen({ route, navigation }) {

    const { pokemon } = route.params;
    navigation.setOptions({ title: capitalize(pokemon) });

    const [details, setDetails] = useState([]);

    useEffect(() => {
      fetchPokemonDetails();
    }, []);

    const fetchPokemonDetails = () => {
      // console.log(route.params)
      // const {state} = navigation;
      fetch(`https://pokeapi.co/api/v2/pokemon/${route.params.pokemon}`)
        .then(res => res.json())
        .then(details => setDetails(details));
    };

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
        <Text style={styles.text}>{capitalize(details.name)}</Text>
        <Text style={styles.text}>Height: {details.height}</Text>
        <Text style={styles.text}>Weight: {details.weight}</Text>
        <Text style={styles.text}>
          Ability: {details.abilities[0].ability.name}
        </Text>
        <Text style={styles.text}>Type: {details.types[0].type.name}</Text>
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