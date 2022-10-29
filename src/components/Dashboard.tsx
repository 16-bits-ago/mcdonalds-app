import React from 'react';
import { ScrollView } from 'react-native';
import Categories from './Categories';
import Header from './Header';
import Popular from './Popular';

export const Dashboard = () => {
    return (
        <React.Fragment>
            <Header />
            <ScrollView>
                <Categories />
                <Popular />
            </ScrollView>
        </React.Fragment>
    );
};