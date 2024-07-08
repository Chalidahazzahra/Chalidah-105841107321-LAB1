import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
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
        <View style={{ backgroundColor: color, height: 45, alignItems: "center", 
          justifyContent: "center", textAlign: 'center', borderRadius: 10, width: 300, 
          marginBottom: 100 }}>
            <Text style= {{ color: 'white', fontSize: 15, fontFamily:'MetroMedium' }}>{text}</Text>
        </View>
    </TouchableOpacity>
);
};
const ForgetPasswordPages = ({ navigation }) => {
return (
    < View style={styles.container}>
        <Text style={styles.topText}>
          Forget Password
        </Text>
        <Text style={styles.topText1}>
        Please, enter your email address. You will receive a link to create a new password via email.
        </Text>
    <View style= {{ flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 270,
    }}>
        <TextInput placeholder="Email" style={styles.input} />
        <ButtonCustom color='violet' text="Reset Password" onPress={() => alert(' Reset link sind')}/>
        <TouchableOpacity style={styles.button} onPress={() => alert(' Reset link sind')}>
        </TouchableOpacity>
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
        fontSize: 30,
        textAlign: 'center',
        marginBottom: 10,
        fontWeight: 'bold',
        marginRight: 50,
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
        color: 'black',
        fontFamily: 'MetroMedium'
    },
})
export default ForgetPasswordPages