import * as React from 'react';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-paper';
import Header from "./Components/Header";
import { TextInput } from 'react-native-paper'
export default function Registration() {
  const [firstname, setFirstname] = React.useState("");
  const [lastname, setLastname] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setpassword] = React.useState("");
  const [conpassword, setConpassword] = React.useState("");
  return (
<View>
  <Header/>

    <View style={styles.container}>
    <TextInput
      label="FirstName"
      value={firstname}
      onChangeText={firstname => setFirstname(firstname)}
      style={styles.input}
    />

<TextInput
      label="FirstName"
      value={lastname}
      onChangeText={lastname => setLastname(lastname)}
      style={styles.input}
    />

<TextInput
      label="Email"
      value={email}
      onChangeText={email => setEmail(email)}
      style={styles.input}
    />

<TextInput
      label="Password"
      value={password}
      onChangeText={password => setpassword(password)}
      secureTextEntry
      style={styles.input}
    />

<TextInput
      label="Confirm Password"
      value={conpassword}
      onChangeText={conpassword => setConpassword(conpassword)}
      secureTextEntry
      style={styles.input}
    />

<Button mode="contained" style={styles.reg}>
        Register
    
      </Button>
  </View>
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    justifyContent: 'center',
    marginTop: 20,
    padding: 30,
  },
  input: {
    marginBottom: 30,
  },reg:{
    marginBottom: 100,
  }
});
