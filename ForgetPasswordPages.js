import { StyleSheet, Text, View, TextInput, TouchableOpacity, Button } from 'react-native'
import React from 'react'

const ForgetPasswordPages = ({ navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.topText}>Forget Password</Text>
      <Text style={styles.topText1}>
        Please, enter your email address. You will receive a link to create a new password via email.
      </Text>
      <View style={styles.topText5}>
        <TextInput placeholder="Email" style={styles.input} />
        <ButtonCustom color='violet' text="Reset Password" onPress={() => alert('Reset link sent')} />
        <View style={styles.topText4}>
          <Button title="Go to Login Pages" onPress={() => navigation.navigate('Login')} />
          <Button title="Go to SignUp Pages" onPress={() => navigation.navigate('SignUp')} />
        </View>
      </View>
    </View>
  );
};

const ButtonCustom = ({ color, text, onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <View style={[styles.button, { backgroundColor: color }]}>
      <Text style={styles.buttonText}>{text}</Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'thistle',
    padding: 20,
  },
  topText: {
    fontSize: 30,
    textAlign: 'center',
    marginBottom: 10,
    fontWeight: 'bold',
    fontFamily: 'MetroBold'
  },
  topText1: {
    fontSize: 15,
    textAlign: 'center',
    marginTop: 50,
    fontFamily: 'MetroMedium'
  },
  input: {
    height: 45,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 10,
    paddingLeft: 10,
    width: 300,
    fontFamily: 'MetroMedium'
  },
  button: {
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    width: 300,
    marginBottom: 10
  },
  buttonText: {
    color: 'white',
    fontSize: 15,
    fontFamily: 'MetroMedium'
  },
  topText4: {
    marginBottom: 10,
    
    
    },
  topText5: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 350
  }
});

export default ForgetPasswordPages;