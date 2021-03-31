import React from 'react';
import { StyleSheet, View, Text, Dimensions, StatusBar } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';


import light from '../config/Theme';
import Calendar from '../components/Calendar';
const { width, height } = Dimensions.get('screen');

export default function Home() {
    return (
        <View style={styles.container}>
            <StatusBar hidden />
            <View style={styles.header}>
                <View style={styles.head}>
                    <Text style={{color:'white', fontSize:20, fontWeight:'bold'}}>31 Mar 2021 </Text>
                    <MaterialCommunityIcons name="bell" size={30} color="black" />
                </View>
                <Text style={{color:'black', fontSize:30, fontWeight:'bold'}}>Hello, Fiona</Text>
            </View>
            <Calendar/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width,
        minHeight: height,
        height: '100%',
        backgroundColor: light.primary,
        alignItems: 'center',
    },
    header: {
        backgroundColor: light.accent,
        width,
        paddingTop: 40,
        paddingHorizontal: 20,
        paddingBottom:20
    },
    head: {
        width:'100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems:'center',
        marginBottom:15
    }
});