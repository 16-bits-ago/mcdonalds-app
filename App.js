import React from 'react';
import { View } from 'react-native';
import Header from './src/components/Header'

export default function App() {
  return (
    <View style={{paddingHorizontal:24, paddingTop: 60}}>
      <Header/>
    </View>
  );
}

/* const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
}); */
