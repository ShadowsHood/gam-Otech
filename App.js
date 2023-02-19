import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Image, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from './src/screens/HomeScreen';
import DetailsScreen from './src/screens/DetailsScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import ApiScreen from './src/screens/ApiScreen';
import FavoriteScreen from './src/screens/FavoriteScreen';

import Ionicons from 'react-native-vector-icons/Ionicons';
import { useFonts } from 'expo-font';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const color = '#e90015';

function LogoTitle() {
  return (
    <Image
      style={{ width: 50, height: 50 }}
      source={require('./assets/favicon.png')}
    />
  );
}

const ListeStack = createNativeStackNavigator();
function ListeStackScreen() {
  return (
    <ListeStack.Navigator>
      <ListeStack.Screen name="Api" component={ApiScreen} options={{
          headerShown: false
        }}/>
      <ListeStack.Screen name="Details" component={DetailsScreen} />
    </ListeStack.Navigator>
  );
}

const ProfileStack = createNativeStackNavigator();
function ProfileStackScreen() {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen name="ProfileInfo" component={ProfileScreen} options={{
          headerShown: false
        }}/>
      <ProfileStack.Screen name="Favoris" component={FavoriteScreen} />
    </ProfileStack.Navigator>
  );
}

function App() {

  const font = useFonts({
    Montserrat: require('./assets/fonts/DotGothic16-Regular.ttf'),
  });

  return (
    <NavigationContainer>

      {/* navigateur en tabs */}

      <Tab.Navigator
        screenOptions={
          ({ route }) => ({
            headerStyle: {
              backgroundColor: color,
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === 'Home') {
                iconName = focused ? 'ios-map' : 'ios-map-outline';
              } 
              else if (route.name === 'Liste') {
                iconName = focused ? 'ios-grid' : 'ios-grid-outline';
              }
              else if (route.name === 'Profil') {
                iconName = focused ? 'ios-save' : 'ios-save-outline';
              }

              // You can return any component that you like here!
              return <Ionicons name={iconName} size={size} color={color} />;
            },
            style: {
              backgroundColor: color,//color you want to change
              // fontFamily: 'DotGothic16',
              borderTopWidth: 0
            },
            tabBarActiveTintColor: 'white',
            tabBarInactiveTintColor: 'black',
            tabBarActiveBackgroundColor: color,
            tabBarInactiveBackgroundColor: color,
            tabBarStyle:{borderTopWidth:0}
          })
        }
      >

        <Tab.Screen name="Home" component={HomeScreen} options={{
          title: 'Home',
          headerStyle: {
            backgroundColor: color,
          },
          // headerTitle: () => <LogoTitle />
          headerTitle: () => ''
        }}></Tab.Screen>

        <Tab.Screen name="Liste" component={ListeStackScreen} />

        <Tab.Screen
          name="Profil"
          component={ProfileStackScreen}
        />

      </Tab.Navigator>

    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
