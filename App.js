// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'
// const App = () => {
//   return (
//     <View style={{flex : 1, 
//     }}>
//       <View style={{ flex : 1, flexDirection:"row", backgroundColor: 'yellow'}}>
//         <View style={{ flex : 1, flexDirection: 1, backgroundColor: 'yellow'}}>
//         </View>
//         <View style={{ flex : 1, flexDirection: 1, backgroundColor: 'green'}}>
//         </View>
//       </View>
//       <View style={{ flex : 1, backgroundColor: 'red'}}>
//     </View>
//     <View style={{ flex : 1, backgroundColor: 'blue'}}>
//     </View>
//   </View>
//   )
// }
// export default App

// import { StyleSheet, Text, View } from 'react-native' 
// import React from 'react'

// const App = () => {
//   return(
//     <View style={{ flex : 1}}>
//     <View style={{ flex: 1, alignItems: 'flex-start', // Baris
//     justifyContent: 'flex-start', //Kolom
//     }}>
//     < View style={{
//       backgroundColor: 'black', width: 150, height: 150,
//       }}>
//          </View>
//     </View>
//         <View style={{ flex : 1}}>
//         <View style={{ flex : 1, alignItems: 'flex-end', // Baris
//     justifyContent: 'flex-end', //Kolom
//     }}>
//     < View style={{
//       backgroundColor: 'pink', width: 150, height: 150,}}>
//         </View>
//     </View>
//     </View>
//      </View>
//     )
//   }
// export default App

import {StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const App = () => {
    return (
        <View style={{ flex: 1}}>
            {/* <Text style={styles.topText}>
                Take me out Indonesia
            </Text>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 75}}>
                <Image source={{ uri: 'koko1.png'}}
                style={styles.Image}
                />
            </View> */}
            <View style={{ flex:1, alignItems: 'center', justifyContent: 'flex-end', marginBottom: 50}}>
                <View style={{ flexDirection: 'row', marginBottom: 10}}>
                    <View style={{
                        backgroundColor: 'plum',
                        width: 160,
                        height: 45,
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginRight: 10,
                        borderRadius: 15,
                    }}>
                        <Text style={{ 
                            color: 'black', 
                            fontSize: 15,
                            fontWeight: 'bold',
                            textAlign: 'center'
                        }}>
                            LOG IN
                        </Text>
                </View>
                <View style={{
                    backgroundColor: 'lightblue',
                    width: 160,
                    height: 45,
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginLeft: 10,
                    borderRadius: 15,
                }}>
                    <Text style={{ 
                        color: 'black', 
                        fontSize: 15,
                        fontWeight: 'bold',
                        textAlign: 'center'
                    }}>
                        SIGN UP
                    </Text>
            </View>
        </View>
                     {/* <Text style={styles.forgetPasswordText}>
                        coming soon
                    </Text> */}
    </View>
    
// </View>
      
//     );

// };

// const styles = StyleSheet.create({
//     topText: {
//         fontSize: 40,
//         fontWeight: 'bold',
//         textAlign: 'center',
//         marginTop: 50,
//         color: 'black'
//     },
//     Image: {
//         width: 350,
//         height: 400,
//     },
//     forgetPasswordText: {
//         color: 'grey',
//         fontSize: 20,
//         textAlign: 'center',
//         marginTop: 20,
                )

        }

export default App


