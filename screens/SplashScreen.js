import React from 'react';
import {View, Text, StyleSheet, Dimensions, StatusBar} from 'react-native';

import * as Animatable from 'react-native-animatable';
import { useTheme } from '@react-navigation/native';

const SplashScreen = ({navigation})=> {
    const {colors} = useTheme();
   return(
    <View style={styles.container}>
   

    <View style={styles.header}>
            <Animatable.Text style={styles.text}
                Text = "Tyranii"
                Text = "...do more"
                animation="bounceIn"
                duraton="1500"
                resizeMode="stretch"
            />
        </View>
    </View>
   )
};

const {height} = Dimensions.get("screen");
const height_logo = height * 0.28;

const styles = StyleSheet.create({
    container:{
        flex: 1, 
        backgroundColor: '#18a0fb'

    },
    header:{
        backgroundColor: '#18a0fb'
    },
    text:{
        color: "white"
    }
})

export default SplashScreen;
