import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUpPages from './SignUpPages';
import LoginPages from './LoginPages';
import ForgetPasswordPages from './ForgetPasswordPages';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignUp">
        <Stack.Screen name="SignUp" component={SignUpPages} />
        <Stack.Screen name="Login" component={LoginPages} />
        <Stack.Screen name="ForgetPassword" component={ForgetPasswordPages} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;