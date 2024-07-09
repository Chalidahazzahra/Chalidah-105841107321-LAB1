import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const LoginPages = ({ navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.topText}>Login</Text>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <TextInput placeholder="Email" style={styles.input} />
        <TextInput placeholder="Password" secureTextEntry style={styles.input} />
        <ButtonCustom color='violet' text="Login" onPress={() => alert('Login successful')} /> 
        <TouchableOpacity onPress={() => navigation.navigate('ForgetPassword')}>
          <Text style={styles.ForgetPasswordText}>Forget Password</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
          <Text style={styles.topText2}>Don't have an account? Sign Up</Text>
        </TouchableOpacity>
        <View style={styles.image1}>
        <Image source={{ uri:'google.png'}} style={styles.image}/> 
        <Image source={{ uri:'facebook.png'}} style={styles.image}/>
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
    fontSize: 50,
    textAlign: 'center',
    marginRight: 150,
    fontWeight: 'bold',
    fontFamily: 'MetroBold'
  },
  ForgetPasswordText: {
    fontSize: 15,
    textAlign: 'center',
    color: "gray",
    marginBottom: 65,
    fontFamily: 'MetroMedium'
  },
  input: {
    height: 45,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 10,
    width: 300,
    paddingLeft: 10,
    fontFamily: 'MetroMedium'
  },
  button: {
    height: 45,
    alignItems: "center",
    justifyContent: "center",
    textAlign: 'center',
    borderRadius: 10,
    width: 300,
    marginBottom: 100
  },
  buttonText: {
    color: 'white',
    fontSize: 20
  },
  topText2: {
    fontSize: 15,
    textAlign: 'center',
    color: "black",
    marginBottom: 65,
    fontFamily: 'MetroMedium'
  },
  image1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 100,
    marginTop: 20
  },
  image: {
    width: 50,
    height: 50,
    marginHorizontal: 5,
    borderRadius: 25
    }
});

export default LoginPages;