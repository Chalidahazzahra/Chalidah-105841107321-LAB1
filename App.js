import * as React from 'react';
import { View, Text, Button, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LoginPages from './LoginPages';
import SignUpPages from './SignUpPages';
import ForgetPasswordPages from './ForgetPasswordPages';
import keranjangmerah from './keranjangmerah.png';
import keranjangputih from './keranjangputih.png';
import homemerah from './homemerah.png';
import homeputih from './homeputih.png';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
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
         name="Sign Up"
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
        name="Login"
        component={LoginPages}
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
        name="Forget Password"
        component={ForgetPasswordPages}
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
