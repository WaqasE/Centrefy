import React, { useState } from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';

import Home from '../screens/Home'
import Medical from '../screens/Medical'
import Stats from '../screens/Stats'
import Profile from '../screens/Profile'

import Indicator from '../components/Indicator'

const { width, height } = Dimensions.get('screen');

const data = [
    {
        id: 1,
        title: 'Home',
        icon: 'home',
        screen:Home
    },
    {
        id: 2,
        title: 'Medical',
        icon: 'medical-bag',
        screen:Medical
    },
    {
        id: 3,
        title: 'Stats',
        icon: 'chart-bar',
        screen:Stats
    },
    {
        id: 4,
        title: 'Profile',
        icon: 'account',
        screen:Profile
    }
]


export default function AppNav() {
    const [activeScreen, setActiveScreen] = useState('Home');


    return (
        <>
            {activeScreen==='Home'?<Home/>:activeScreen==='Medical'?<Medical/>:activeScreen==='Stats'?<Stats/>:<Profile/>}
            <Indicator activeScreen={activeScreen} setActiveScreen={setActiveScreen}  data={data}/>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        width,
        height: '100%',
        minHeight: height,
        alignItems: 'center'
    }
});