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

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

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
      <ProfileStack.Screen name="Favorite" component={FavoriteScreen} />
    </ProfileStack.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>

      {/* navigateur en tabs */}

      <Tab.Navigator
        screenOptions={
          ({ route }) => ({
            headerStyle: {
              backgroundColor: '#00d5d8',
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
              else if (route.name === 'Profile') {
                iconName = focused ? 'ios-save' : 'ios-save-outline';
              }

              // You can return any component that you like here!
              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: 'tomato',
            tabBarInactiveTintColor: 'gray',
          })
        }
      >

        <Tab.Screen name="Home" component={HomeScreen} options={{
          title: 'Home',
          headerStyle: {
            backgroundColor: '#ff96b6',
          },
          headerTitle: () => <LogoTitle />
        }}></Tab.Screen>

        <Tab.Screen name="Liste" component={ListeStackScreen} />

        <Tab.Screen
          name="Profile"
          component={ProfileStackScreen}
        />

      </Tab.Navigator>






      {/* navigateur en stack */}
      
      {/* <Stack.Navigator
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

      </Stack.Navigator> */}

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
