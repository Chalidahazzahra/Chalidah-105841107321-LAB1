import * as React from 'react';
import { View, Text, Button, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LoginPages from './LoginPages';
import SignUpPages from './SignUpPages';
import ForgetPasswordPages from './ForgetPasswordPages';
import ProfilePages from './ProfilePages';
import fashionPages from './fashionPages';
import keranjangmerah from './keranjangmerah.png';
import keranjangputih from './keranjangputih.png';
import homemerah from './homemerah.png';
import homeputih from './homeputih.png';
import bag from './bag.png';
import bagAktif from './bagAktif.png';
import favorites from './favorites.png';
import favoritesAktif from './favoritesAktif.png';
import profile from './profile.png';
import profileAktif from './profileAktif.png';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={fashionPages}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Image
              source={focused ? homemerah : homeputih}
              style={{ width: 40, height: 40 }}
            />
          ),
        }}
      />
        <Tab.Screen
         name="Shop"
         component={SignUpPages}
         options={{
           headerShown: false,
           tabBarIcon: ({ focused }) => (
             <Image
               source={focused ? keranjangmerah : keranjangputih}
               style={{ width: 40, height: 40 }}
             />
           ),
         }}
       />
      <Tab.Screen
        name="Bag"
        component={LoginPages}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Image
              source={focused ? bagAktif : bag}
              style={{ width: 40, height: 40 }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Favorite"
        component={fashionPages}
        options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => (
                <Image
                source={focused ? bagAktif : bag}
                style={{ width: 40, height: 40 }}
                />
            ),
        }}
      />
        <Tab.Screen
          name="Profile"
          component={ProfilePages}
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <Image
                source={focused ? profileAktif : profile}
                style={{ width: 40, height: 40 }}
              />
            ),
          }}
        />
    </Tab.Navigator>
  );
}

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Sign Up"
        onPress={() => navigation.navigate('Login')}
      />
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={MyTabs} />
        <Stack.Screen name="Login" component={LoginPages} />
        <Stack.Screen name="SignUp" component={SignUpPages} />
        <Stack.Screen name="ForgetPassword" component={ForgetPasswordPages} />
        <Stack.Screen name="profilePages" component={ProfilePages} />
        <Stack.Screen name="fashionPages" component={fashionPages} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
