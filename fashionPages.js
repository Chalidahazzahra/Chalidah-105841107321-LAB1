import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

function fashionPages() {
  return (
    <View style={styles.container}>
      <View style={styles.topText3}>
        <Image source={{ uri: "taehyungku.png" }} style={styles.image} />
      </View>
      <Text style={styles.header}>Fashion Sale</Text>
      <TouchableOpacity style={{borderBlockColor:'gray', borderWidth:1, width:'10%', height:30, borderRadius:20, backgroundColor:'red', alignItems:'center', alignSelf:'center', bottom:20}}><Text style={{color:'white',top: 5}}>Check</Text></TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    alignSelf: 'center',
    position:'absolute',
    top: 540,
    color: 'white',
    textShadowColor:'black',
    textShadowOffset:{width: 2, height: 2},
    textShadowRadius:10
  },
  topText3: {
    alignItems: "center",
    position:'relative',
    top: 50
    },
  image: {
    width: '100%',
    height: 600,
    resizeMode:'contain',
  },
});
export default fashionPages;
