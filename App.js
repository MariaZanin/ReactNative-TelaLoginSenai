import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

import { TelaLogin } from './src/components';

export default function App() {
  return (
    <View style={styles.container}>
    {/*<View style={styles.middle}/>*/}
      
      <TelaLogin />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'gainsboro',
    
  },
});
