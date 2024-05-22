import React, { useState } from 'react';
import { StatusBar, StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

export default function App() {
  const [count, setCount] = useState(0);

    const incrementCount = () => {
    setCount(count + 1);
  };

  const resetCount = () => {
    setCount(0);
  };

  return (
    <View style={styles.container}>
      <backgroundColor
      style={{color:red;}}
      />
      <Image
        source={require('./assets/icon.png')}
        style={{ width: 150, height: 150, marginBottom: 20 }}
      />
      <Text style={styles.title}>Selamat Datang di Aplikasi Saya!</Text>
      <Text style={styles.subtitle}>Klik tombol di bawah untuk menambah hitungan:</Text>
      <TouchableOpacity style={styles.button} onPress={incrementCount}>
        <Text style={styles.buttonText}>Tambah Hitungan</Text>
      </TouchableOpacity>
      <Text style={styles.counter}>Hitungan: {count}</Text>
      <TouchableOpacity style={styles.resetButton} onPress={resetCount}>
        <Text style={styles.resetButtonText}>Reset</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
  counter: {
    fontSize: 20,
    marginTop: 20,
    textAlign: 'center',
  },
  resetButton: {
    backgroundColor: '#DC3545',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  resetButtonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
});
