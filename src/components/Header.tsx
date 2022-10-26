import React from 'react';
import {
    View,
    Image,
    TouchableHighlight,
    ToastAndroid
} from 'react-native';

const Header = () => {
    const showToast = () => {
        ToastAndroid.show('Pressed', ToastAndroid.SHORT);
    };

    return (
        <View
            style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between'
            }}
        >
            <TouchableHighlight onPress={() => showToast()}>
                <Image
                    source={{
                        uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/McDonald%27s_Golden_Arches.svg/1200px-McDonald%27s_Golden_Arches.svg.png'
                    }}
                    style={{ width: 51, height: 45 }}
                />
            </TouchableHighlight>
            <TouchableHighlight onPress={() => showToast()}>
                <Image
                    source={{
                        uri: 'https://www.iconpacks.net/icons/2/free-shopping-cart-icon-3045-thumb.png'
                    }}
                    style={{ width: 45, height: 45 }}
                />
            </TouchableHighlight>
        </View>
    );
};

export default Header;
