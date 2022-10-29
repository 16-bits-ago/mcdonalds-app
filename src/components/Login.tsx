import { Stack, Input, Icon } from 'native-base';
import React, { useState } from 'react';
import { Pressable, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import theme from '../styles/theme.module.css';
const Login = () => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const isAuth = false;
    const [show, setShow] = useState(false);
    return (
        <View style={{ flex: 1, justifyContent: 'center' }}>
            <Stack space={4} w="100%" alignItems="center" >
                <Input 
                    style={theme.loginInputColor}
                    w={{ base: '75%', md: '25%' }} 
                    InputLeftElement={
                        <Icon as={<MaterialIcons name="person" />} 
                            size={5} ml="2" color="muted.400" 
                        />
                    } 
                    placeholder="Name" 
                />
                <Input 
                    style={theme.loginInputColor}
                    w={{ base: '75%', md: '25%' }} 
                    type={show ? 'text' : 'password'} 
                    InputRightElement={
                        <Pressable onPress={() => setShow(!show)}>
                            <Icon 
                                as={<MaterialIcons name={show ? 'visibility' : 'visibility-off'} />} 
                                size={5} mr="2" color="muted.400" />
                        </Pressable>
                    }
                    placeholder="Password" 
                />
            </Stack>
        </View>
    );
};

export default Login;
