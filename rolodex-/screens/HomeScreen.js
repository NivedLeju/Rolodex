// src/screens/HomeScreen.js

import React, { useState } from 'react';
import { StatusBar, FlatList, TextInput, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ContactDetail from '../components/ContactDetail';

const Stack = createNativeStackNavigator();

const HomeScreen = ({ navigation }) => {
  const [searchText, setSearchText] = useState('');
  const [contacts, setContacts] = useState([
    { id: '1', name: 'John Doe' },
    { id: '2', name: 'Jane Smith' },
    { id: '3', name: 'Bob Johnson' },
  ]);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(searchText.toLowerCase())
  );

  const renderContactItem = ({ item }) => (
    <TouchableOpacity
      style={styles.contactItem}
      onPress={() => navigation.navigate('ContactDetail', { contact: item })}
    >
      <Text>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        placeholder="Search contacts..."
        value={searchText}
        onChangeText={text => setSearchText(text)}
      />
      <FlatList
        data={filteredContacts}
        keyExtractor={item => item.id}
        renderItem={renderContactItem}
      />
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  searchInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
  contactItem: {
    padding: 16,
    borderColor: '#ddd',
    borderWidth: 1,
    marginBottom: 8,
  },
});

export default HomeScreen;
