import React from 'react';
import { View, ScrollView } from 'react-native';
import Categories from './src/components/Categories';
import Header from './src/components/Header';
import Popular from './src/components/Popular';
import theme from './src/styles/theme.module.css';

export default function App() {
    return (
        <View style={theme.appWrapper}
        >
            <Header />
            <ScrollView>
                <Categories />
                <Popular />
            </ScrollView>
      
        </View>
    );
}
