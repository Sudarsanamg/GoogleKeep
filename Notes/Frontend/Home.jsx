import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { TextInput, ScrollView, View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

const Home = ({ navigation }) => {
  const [text, setText] = useState('');
  const [items, setItems] = useState([]); // State to store the notes [text, text, text]
  const route = useRoute(); // Hook to access route

  // Accessing the email prop safely
  const { email } = route.params || {};

  useEffect(() => {
    // Load the notes from the server
    const fetchData = async () => {
      try {
        const response = await axios.post('http://192.168.43.146:3000/data', {email});
        console.log(response);
        setItems(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  const handleLogout = () => {
    navigation.navigate('Init');
  };

  const handleSave = async () => {
    alert('Note saved');
    setItems([...items, text]);
    setText('');
    await axios.post('http://192.168.43.146:3000/update', { email, text })
  };

  const handleDelete = async (index) => {
    try {
        await axios.post('http:/192.168.43.146:3000/delete', { email, index }).then(res => {
            console.log('====================================');
            console.log(res);
            // Update the items array after deletion
            const updatedItems = items.filter((item, i) => i !== index);
            setItems(updatedItems);
            console.log('====================================');
        }).catch(err => {
            console.log('====================================');
            console.log(err);
            console.log('====================================');
        })
    } catch (error) {
        console.log('====================================');
        console.log(error);
        console.log('====================================');
    }
}



  return (
    <View style={styles.view}>
      <Text>Home</Text>

      <Text>Email: {email}</Text>

      <TouchableOpacity style={styles.button} onPress={handleLogout}>
        <Text style={styles.buttonText}>Logout</Text>
      </TouchableOpacity>

      <TextInput
        style={styles.textArea}
        multiline={true}
        onChangeText={setText}
        value={text}
        placeholder="Type something here..."
        placeholderTextColor="#888"
      />

      <TouchableOpacity style={styles.button} onPress={handleSave}>
        <Text style={styles.buttonText}>Save</Text>
      </TouchableOpacity>

      <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollViewContent}>
        {items.map((item, index) => (
          <View  key={index}style={styles.notes}>
          <Text key={index}>{index} {item}  <TouchableOpacity><Ionicons name="trash-bin"  onPress={()=>handleDelete(index)} size={24} color="black" /></TouchableOpacity> </Text> 
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  notes:{
    padding: 20,
    borderWidth: 1, // Adding borderWidth to create a border
    borderColor: 'grey', // Setting the border color'
  },
  
  
  view:{
    flex: 1
  },
  scrollView: {
    flex: 1,
  },
  scrollViewContent: {
    padding: 20,
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  textArea: {
    marginTop: 30,
    borderWidth: 1,
    borderColor: '#999',
    padding: 10,
    minHeight: 100,
  },
});

export default Home;
