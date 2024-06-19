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
        <View style={{ backgroundColor: color, width:160, height: 45, alignItems:'center', justifyContent: 'center',textAlign: 'center', borderRadius: 10, width: 300
        }}>
            <Text style={{ color:'white', fontSize: 20}}>
                {text}
            </Text>
        </View>
    );
};
const App = () => {
 
return (
    < View style={styles.container}>
        <Text style={styles.topText}>
            Sign up
        </Text>
    <View style= {{ flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }}>
        <TextInputCustom name="Username" color="black" />
        <TextInputCustom name="Email" color="black" />
        <TextInputCustom name="Password" color="black" />
        <Buttoncostum color='violet' text="Sign Up" /> 
        <View View style={styles.container}>
        <Text style={styles.topText1}>
            or sign up with social account
        </Text>
        <View style={{ flex:1, justifyContent:'center',alignItems:'center', marginTop: 75, flexDirection: 'row'}}>
                <Image source={{ uri:'google.png'}} style={styles.image}/> 
                <Image source={{ uri:'facebook.png'}} style={styles.image}/>
            </View>
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
        fontSize: 50,
        textAlign: 'center',
        marginRight: 130,
        marginBottom: 120,
        fontWeight: 'bold'
    },
    topText1: {
        fontSize: 20,
        textAlign: 'center',
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 50,
        marginBottom: 10,
        marginHorizontal: 10
    }
})
export default App