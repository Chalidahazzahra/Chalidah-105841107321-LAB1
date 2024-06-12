import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const Buttoncostum = ({ color, text}) => {
    return (
        <View style={{ backgroundColor: color, width:160, height: 45, alignItems:'center', justifyContent: 'center',marginRight: 10, borderRadius: 15
        }}>
            <Text style={{ color:'white', fontSize: 20, fontWeight: 'bold'}}>
                {text}
            </Text>
        </View>
    );
};
 const App = () =>{
    return (
        <View style={styles.container}>
            <Text style={styles.topText}>
                Take me out Indonesia
            </Text>
            <View style={{ flex:1, justifyContent:'center',alignItems:'center', marginTop: 75}}>
                <Image source={{ uri:'image 1.png'}} style={styles.image}/>
                <Buttoncostum color='red' text="login" />
                <Buttoncostum color='blue' text="Sign Up" />    
            </View>
        </View>
    );
 };

 const styles =StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    topText:{
        fontSize: 30,
        fontWeight: 'bold',
        marginVertical: 10,
    },
    image:{
        width: 300,
        height: 300,
        marginBottom: 150,
    },
 });

 export default App;

