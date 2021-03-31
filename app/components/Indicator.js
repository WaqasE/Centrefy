import React, { useState } from 'react';
import { StyleSheet, View, Dimensions, FlatList, Text, TouchableWithoutFeedback } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import light from '../config/Theme'


const { width, height } = Dimensions.get('screen');

export default function Indicator({ activeScreen, setActiveScreen, data }) {
    return (
        <View style={styles.container}>
            <FlatList
                style={{ width: '100%', height: '100%' }}
                data={data}
                keyExtractor={item => item.id.toString()}
                horizontal
                renderItem={
                    ({ item }) => {
                        return (
                            <TouchableWithoutFeedback onPress={()=>{setActiveScreen(item.title)}}>
                                <View style={activeScreen === item.title ? styles.activeItem : styles.item}>
                                    <MaterialCommunityIcons name={item.icon} size={24} color={activeScreen === item.title ? light.accent : 'white'} />
                                    {activeScreen === item.title ? <Text style={[styles.title, { color: light.accent }]}>{item.title}</Text> : null}
                                </View>
                            </TouchableWithoutFeedback>
                        );
                    }
                }
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: width / 1.1,
        height: 60,
        backgroundColor: light.dark,
        alignSelf: 'center',
        position: 'absolute',
        bottom: 10,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center'
    },
    item: {
        width: (width / 1.1) / 100 * 21.666666,
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    activeItem: {
        width: (width / 1.1) / 100 * 35,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        padding: 10,
        backgroundColor: 'rgba(255,255,255,0.3)',


    },
    title: {
        color: light.primary,
        marginLeft: 5
    }
});