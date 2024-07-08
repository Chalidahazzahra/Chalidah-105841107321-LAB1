import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const TextInputCustom = ({name, color, secureTextEntry}) => {
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
            secureTextEntry={secureTextEntry}
       />
    </View>
    )
}
const ButtonCustom = ({ color, text, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
        <View style={{ backgroundColor: color, height: 45, alignItems: "center", justifyContent: "center", 
          textAlign: 'center', borderRadius: 10, width: 300, marginBottom: 100
          }}>
            <Text style= {{ color: 'white', fontSize: 20 }}>{text}</Text>
        </View>
    </TouchableOpacity>
  );
};

const SignUpPages = ({ navigation }) => {
    return (
    <View style={styles.container}>
        <Text style={styles.topText}>
            Sign up
        </Text>
    <View style= {{ flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }}>
        <TextInputCustom name="Username" color="black" />
        <TextInputCustom name="Email" color="black" />
        <TextInputCustom name="Password" color="black" secureTextEntry />
        <ButtonCustom color='violet' text="Sign Up" onPress={() => alert ('Akun anda akan berhasil dibuat')} />
        <TouchableOpacity onPress={() => navigation.navigate('LoginPages')}>
            <Text style={styles.buttonText}>
            or sign up with social account</Text>
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
        marginRight: 130,
        marginBottom: 80,
        fontWeight: 'bold',
        fontFamily: 'MetroBold'
    },
    topText1: {
        fontSize: 20,
        textAlign: 'center',
        fontFamily: 'MetroMedium'
    },
    buttonText: {
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
        marginBottom: 10,
        marginHorizontal: 10,
        fontFamily: 'MetroMedium'
    }
});

export default SignUpPages;