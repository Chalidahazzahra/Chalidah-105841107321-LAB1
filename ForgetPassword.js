import { StyleSheet, Text, View, TextInput, Image } from 'react-native'
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
            }}
       />
    </View>
    )
}
const Buttoncostum = ({ color, text}) => {
    return (
        <View style={{ backgroundColor: color, 
            width:160, 
            height: 45, 
            borderRadius: 10, 
            width: 300,
            marginTop: 10,
            alignItems:'center',
            justifyContent: 'center',
            textAlign: 'center',
        }}>
            <Text style={{ color:'white', fontSize: 15}}>
                {text}
            </Text>
        </View>
    );
};
const App = () => {
 
return (
    < View style={styles.container}>
        <Text style={styles.topText}>
            Forget Password
        </Text>
        <View View style={styles.container}>
        <Text style={styles.topText1}>
           Please, enter your email address. You will receive a link to create a new password via email.
        </Text>
    <View style= {{ flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 270,
    }}>
        <TextInputCustom name="Email" color="black" />
        <Buttoncostum color='violet' text="SEND" />
            </View>
        </View>
    </View>
    )
}

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
    },
    topText1: {
        fontSize: 15,
        textAlign: 'center',
        marginTop: 50
    },
})
export default App