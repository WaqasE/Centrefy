import React, { useState } from 'react';
import { StyleSheet, View, Dimensions, StatusBar, Image, ImageBackground, ScrollView, TouchableOpacity, Text } from 'react-native';
import Input from '../components/Input';
import SubmitButton from '../components/SubmitButton';
import light from '../config/Theme';
import Light from '../config/Theme';

const { width, height } = Dimensions.get('screen');


export default function SignIn({navigation}) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const signinHandler = () =>{
        if(email && password){
            navigation.navigate('AppNav');
        }
    }

    return (
        <ScrollView style={{ width: width, minHeight: height, backgroundColor: Light.primary, }}>
            <View style={styles.container}>
                <StatusBar hidden />
                <ImageBackground source={require('../assets/authBg.png')} style={styles.bgImage}>
                    <Image source={require('../assets/Logo.png')} style={styles.logo} />
                </ImageBackground>
                <Input
                    title='E-mail'
                    keyboardType="email-address"
                    selectionColor={light.accent}
                    editable={true}
                    onChangeText={(email) => { setEmail(email) }}
                    value={email}

                />
                <Input
                    title='Password'
                    secureTextEntry={true}
                    placeholderTextColor="rgba(0,0,0,0.5)"
                    selectionColor='#EA3338'
                    onChangeText={(password) => { setPassword(password) }}
                    value={password}
                />
                <SubmitButton
                    title='Sign in'
                    onClick={signinHandler}
                />

                <TouchableOpacity style={styles.forgetPass}>
                    <Text style={{color:'grey', fontSize:16}}>Forget Password?</Text>
                </TouchableOpacity>
            </View>
        </ScrollView> 
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        width: '100%',
        height: '100%'
    },
    bgImage: {
        width,
        height: height / 2,
        alignItems: 'center',
        justifyContent: 'center'
    },
    logo: {
        width: width / 2,
        height: 80,
    },
    forgetPass:{
        marginVertical:10
    }
});