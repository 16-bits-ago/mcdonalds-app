import React from 'react'
import { View, ScrollView } from 'react-native'
import { COLORS } from './constants'
import Categories from './src/components/Categories'
import Header from './src/components/Header'
import Popular from './src/components/Popular'
export default function App() {
  return (
    <View
      style={{
        paddingHorizontal: 24,
        paddingTop: 60,
        backgroundColor: COLORS.black
      }}
    >
      <Header />
      <ScrollView>
      <Categories />
      <Popular />
      </ScrollView>
      
    </View>
  )
}

/* const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
}); */
