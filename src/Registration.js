import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-paper';
import Header from "./Components/Header";

export default function Registration() {
  return (
    <View>
      <Header/>
    <View style={styles.container}>
    <Button icon="camera" mode="contained" onPress={() => console.log('Pressed')}>
    Press me
  </Button>

  <Button icon="camera" mode="contained" onPress={() => console.log('Pressed')}>
    Press me
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
});
