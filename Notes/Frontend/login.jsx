import React from 'react'
import axios from 'axios';
import { TextInput, View ,StyleSheet,Text,TouchableOpacity} from 'react-native'

const Login = ({navigation}) => {
    const [password, setPassword] = React.useState('');
    const [email, setEmail] = React.useState('');


    const handleLoginAccount = async () => {
        if(email==='' || password===''){
            alert("Please fill all the fields");
            return;
        }
        await axios.post('http://192.168.43.146:3000/api/auth/login',{email,password}).then(response => {
            alert(response.data)
            console.log(response.data);
            navigation.navigate('Home', {email: email});
        }).catch(error => { 
            alert('Invalid Credentials')
            console.log(error)
        })
    }
  return (
    <View style={styles.container}>
    <TextInput
        style={styles.input}
        placeholder="Gmail"
        value={email}
        onChangeText={text => setEmail(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={text => setPassword(text)}
      />
      <TouchableOpacity style={styles.button} onPress={handleLoginAccount}>
        <Text style={styles.buttonText} >Login</Text>
      </TouchableOpacity>

      </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#ffffff',
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
    },
    input: {
      width: '80%',
      height: 40,
      borderWidth: 1,
      borderColor: '#cccccc',
      borderRadius: 5,
      marginBottom: 20,
      paddingHorizontal: 10,
    },
    button: {
      backgroundColor: '#007bff',
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 5,
    },
    buttonText: {
      color: '#ffffff',
      fontSize: 18,
      fontWeight: 'bold',
    },
  });
  

export default Login