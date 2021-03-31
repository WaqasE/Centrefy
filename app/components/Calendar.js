import React from 'react';
import { StyleSheet, View, FlatList, Text } from 'react-native';
import light from '../config/Theme';

const data = [
    {
        id: 1,
        day: 'Mon',
        active: true
    },
    {
        id: 2,
        day: 'Tue',
        active: false
    },
    {
        id: 3,
        day: 'Wed',
        active: false
    },
    {
        id: 4,
        day: 'Thu',
        active: false
    },
    {
        id: 5,
        day: 'Fri',
        active: false
    },
    {
        id: 6,
        day: 'Sat',
        active: false
    },
    {
        id: 7,
        day: 'Sun',
        active: false
    }
]

export default function Calendar() {
    return (
        <View style={styles.container}>
            <FlatList
                style={{ paddingHorizontal: 10 }}
                data={data}
                keyExtractor={item => item.id.toString()}
                horizontal
                ItemSeparatorComponent={() => (<View style={{ width: 10, height: '100%' }} />)}
                renderItem={
                    ({ item }) => {
                        return (
                            <View style={[styles.card, { backgroundColor: item.active ? light.accent : 'white' }]}>
                                <Text style={{fontSize:20, fontWeight:'bold'}}>{item.id}</Text>
                                <Text style={{fontSize:18, fontWeight:'bold'}}>{item.day}</Text>
                            </View>
                        );
                    }
                }
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 120,
        width: '100%',
        marginVertical: 10
    },
    card: {
        width: 100,
        height: '100%',
        backgroundColor: 'white',
        borderRadius: 5,
        alignItems:'center',
        justifyContent:'center'
    }
});