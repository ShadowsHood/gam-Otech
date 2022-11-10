import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Image, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './src/screens/HomeScreen';
import CreatePostScreen from './src/components/CreatePostComponent';
import DetailsScreen from './src/screens/DetailsScreen';
import ProfileScreen from './src/screens/ProfileScreen';

const Stack = createNativeStackNavigator();

function LogoTitle() {
  return (
    <Image
      style={{ width: 50, height: 50 }}
      source={require('./assets/favicon.png')}
    />
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#00d5d8',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >

        <Stack.Screen name="Home" component={HomeScreen} options={{ 
          title: 'The HOME',
          headerStyle: {
            backgroundColor: '#ff96b6',
          },
          }}>
          {/* A REVOIR PLUS TARD */}
          {/* {(props) => <HomeScreen {...props} extraData={someData} />} */}
        </Stack.Screen>
        <Stack.Screen name="CreatePost" component={CreatePostScreen} />

        <Stack.Screen 
        name="Details" 
        component={DetailsScreen} 
        options={
            { headerTitle: () => <LogoTitle/> }
        }/>

        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
        />

        

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

// export default function App() {
//   return (
//     <NavigationContainer>
//       <View style={styles.container}>
//         <Text>Open up App.js to start working on your app!</Text>
//         <StatusBar style="auto" />
//       </View>
//     </NavigationContainer>
//   );
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
