import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <TextInput placeholder='Enter your goal' />
        <Button title='Create goal' />
      </View>
      <View>
        <Text>List of goals</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, //this indicates that the container should expand to occupy all avaliable space
    flexDirection: "row", //indicates whether the the elements will be laid out in a row or column
                          //tells us if the main axis is top to bottom or left to right
    alignItems: 'flex-start', //reflects how the elements are laid out in their axis
    justifyContent: 'space-between', //reflects how the elements are laid out in their axis
    // backgroundColor: '#fff',
    padding: 50
  },
  text2: {
    color: "green",
    fontSize: 25,
    margin: 20
  }
});
