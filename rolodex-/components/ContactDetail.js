// src/components/ContactDetail.js

import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const ContactDetail = ({ route, navigation }) => {
  const { contact } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.contactName}>{contact.name}</Text>
      <Text style={styles.contactInfo}>Random info about {contact.name}'s contact...</Text>
      <Button
        title="Go Back"
        onPress={() => navigation.goBack()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  contactName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  contactInfo: {
    marginBottom: 16,
  },
});

export default ContactDetail;
