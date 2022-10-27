import React, { useState } from 'react';
import { Image, Text, TouchableHighlight, View } from 'react-native';
import { COLORS } from '../../constants';
import { categories } from '../DataBase/categories';
import theme from '../styles/theme.module.css';

const Categories = () => {
    const [active, setActive] = useState<number | null>(null);

    return (
        <View style={theme.categoryWrapper}>
            <Text style={theme.headerTextMain}>Hey,</Text>
            <Text style={theme.headerTextSecondary}>what&apos;s up</Text>
            <View style={theme.categoryContentWrap}>
                {categories.map((cat, i) => (
                    <View key={`category ${i}`} style={theme.categoryItemWrap}>
                        <TouchableHighlight
                            underlayColor={COLORS.secondary}
                            onPress={() => setActive(i)}
                            style={theme.categoryItemTouched}
                        >
                            <React.Fragment>
                                <Image
                                    source={{ uri: cat.image }}
                                    style={theme.categoryItemImage}
                                />
                                <Text style={theme.categoryItemText}>
                                    {cat.name}
                                </Text>
                            </React.Fragment>
                        </TouchableHighlight>
                    </View>
                ))}
            </View>
        </View>
    );
};

export default Categories;
