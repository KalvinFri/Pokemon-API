import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View>
        <Text>Check out the <a href='http://localhost:8080/gallery'>gallery!</a> </Text>
        <Text><a href='http://localhost:8080/inspect'>Inspect </a>some pokemon</Text>
        <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});