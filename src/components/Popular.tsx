import React, { useState } from 'react';
import { View, Text, TouchableHighlight, Image } from 'react-native';
import { COLORS, SIZES } from '../../constants';
import { popular } from '../DataBase/popular';
import theme from '../styles/theme.module.css';

const Popular = () => {
    const [active, setActive] = useState<number | null>(null);
    return (
        <View style={theme.popularWrapper}>
            <Text style={theme.headerTextMain}>Popular</Text>
            <View style={theme.categoryContentWrap}>
                {popular.map((propduct, i) => (
                    <View 
                        style={[
                            theme.popularItemWrap,
                            { backgroundColor: active === i ? COLORS.secondary : COLORS.grey }
                        ]}
                        key={`popular ${i}`}
                    >
                        <TouchableHighlight style={theme.popularItemTouched } onPress={() => setActive(i)}>
                            <React.Fragment>
                                <Image
                                    source={{ uri: propduct.image }}
                                    style={theme.categoryItemImage}
                                />
                                <Text style={theme.categoryItemText}>
                                    {propduct.name}
                                </Text>
                                <Text style={theme.popularItemPrice}>
                                    {propduct.price}
                                </Text>
                            </React.Fragment>
                        </TouchableHighlight>
                    </View>
                ))}
            </View>
        </View>
    );
};

export default Popular;
