import React from 'react'
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import NewAccount from './NewAccount';


const Init = ({navigation}) => {
  console.log(navigation)
  return (
    <View style={styles.container}>
      <Text style={styles.title} >Notes App</Text>
      <TouchableOpacity style={styles.button} >
        <Text style={styles.buttonText} onPress={()=> navigation.navigate('Login')} >Login</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} >
        <Text style={styles.buttonText} onPress={()=> navigation.navigate('NewAccount')}>New User? Create new Account!</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
    },
    button: {
      backgroundColor: '#007bff',
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 5,
      marginBottom: 10,
    },
  });

export default Init