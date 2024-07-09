import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const SignUpPages = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.topText}>Sign up</Text>
      <View style={styles.topText1}>
        <TextInputCustom name="Username" color="black" />
        <TextInputCustom name="Email" color="black" />
        <TextInputCustom name="Password" color="black" secureTextEntry />
        <ButtonCustom color='violet' text="Sign Up" onPress={() => alert('Akun anda akan berhasil dibuat')} />
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.buttonText}>Go to Login Pages</Text>
        </TouchableOpacity>
        <View style={styles.topText3}>
        <Image source={{ uri:'google.png'}} style={styles.image}/> 
        <Image source={{ uri:'facebook.png'}} style={styles.image}/>
        </View>
      </View>
    </View>
  );
};

const TextInputCustom = ({ name, color, secureTextEntry }) => (
  <View style={styles.topText2}>
    <TextInput  
      placeholder={`Masukkan ${name}`}
      style={[styles.input, { color }]}
      secureTextEntry={secureTextEntry}
    />
  </View>
);

const ButtonCustom = ({ color, text, onPress }) => (
  <TouchableOpacity onPress={onPress}>
   <View style={{ backgroundColor: color, height: 45, alignItems: "center", justifyContent: "center", 
          textAlign: 'center', borderRadius: 10, width: 300, marginBottom: 100
          }}>
            <Text style= {{ color: 'white', fontSize: 20 }}>{text}</Text>
        </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'thistle',
    padding: 50,
  },
  topText: {
    fontSize: 50,
    textAlign: 'center',
    marginRight: 130,
    marginBottom: 80,
    fontWeight: 'bold',
    fontFamily: 'MetroBold',
  },
  topText1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 50
  },
  topText2: {
    marginBottom: 10,
  },
  input: {
    height: 45,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 10,
    paddingLeft: 10,
    width: 300,
  },
  buttonText: {
    fontSize: 15,
    textAlign: 'center',
    color: 'gray',
    marginBottom: 65,
    fontFamily: 'MetroMedium',
  },
  topText3: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  image: {
    width: 50,
    height: 50,
    marginHorizontal: 10,
    borderRadius: 40,
    top : 80
    },
});

export default SignUpPages;
