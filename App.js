import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity, } from 'react-native'
import React from 'react'

const TextInputCustom = ({name, color, Password}) => {
return (
    <View style= {{
        justifyContent: 'center',
        alignItems: 'center',
    }}>
        <TextInput  
            placeholder={`Masukkan ${name}`}
            style={{
                height: 45,
                borderColor: 'black',
                borderWidth: 1,
                borderRadius: 10,
                marginBottom: 10,
                paddingLeft: 10,
                width: 300,
                color: color,
                fontFamily: 'MetroMedium'
            }}
       />
    </View>
    )
}
const ButtonCustom = ({ color, text, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
     <View style={{ backgroundColor: color, width:160, 
            height: 45, alignItems:'center', 
            justifyContent: 'center',textAlign: 'center', 
            borderRadius: 10, width: 300, marginTop: 15, marginBottom:75
        }}>
        <Text style={{ color: 'white', fontSize: 20 }}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

const LoginPages = ({ navigation}) => { 
return (
    < View style={styles.container}>
        <Text style={styles.topText}>
            Login
        </Text>
    <View style= {{ flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }}>
        <TextInput placeholder="Email" style={styles.input} />
        <TextInput placeholder="Password" secureTextEntry style={styles.input} />
        <ButtonCustom color='violet' text="Login" onPress={() => alert('Login succesfull')} /> 
        <TouchableOpacity style={styles.button} onPress={() => alert('Login succesfull')}>
            <Text style={styles.ForgetPasswordText}>
                Forget Password</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('ForgetPasswordPages')}>
            <Text style={styles.topText2}>
            Don't have an account? Sign Up</Text>
        </TouchableOpacity>
        <View style={{ flex:1, justifyContent:'center',alignItems:'center', marginTop: 75, flexDirection: 'row'}}>
                <Image source={{ uri:'google.png'}} style={styles.image}/> 
                <Image source={{ uri:'facebook.png'}} style={styles.image}/>
                </View>
            </View>
        </View>
    );
  };

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'thistle',
        padding: 70,
    },
    topText: {
        fontSize: 50,
        textAlign: 'center',
        marginRight: 150,
        marginBottom: 100,
        fontWeight: "bold",
        fontFamily: 'MetroBold'
    },
    ForgetPasswordText: {
        fontSize: 15,
        textAlign: 'center',
        color: "gray",
        marginBottom: 65,
        fontFamily: 'MetroMedium'
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 50,
        marginHorizontal: 5
    },
    topText2: {
        color: 'black',
        marginTop: 20,
        fontFamily: 'MetroMedium',
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
        marginTop: 20
    },
})
export default LoginPages;