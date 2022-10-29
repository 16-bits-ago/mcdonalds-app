import { NativeBaseProvider } from 'native-base';
import React from 'react';
import { View } from 'react-native';
import { Dashboard } from './src/components/Dashboard';
import Login from './src/components/Login';
import theme from './src/styles/theme.module.css';

export default function App() {
    const isAuth = false;

    
    return (
        <NativeBaseProvider>
            <View style={theme.appWrapper}>
                {isAuth ? <Dashboard/> : <Login/>}
            </View> 
        </NativeBaseProvider>
    );
}
