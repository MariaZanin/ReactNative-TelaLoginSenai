import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

import { TelaLogin } from './src/components';

export default function App() {
  return (
    <View style={styles.container}>


      <TelaLogin />
      <StatusBar style={styles.container} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'gainsboro',
  },
  logo: {
    width: 300,
    height: 80,
    marginLeft: 50,
  }
});
