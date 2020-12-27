import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';

  
  const OnboardingScreen = ({navigation}) =>{
    return(
      <Onboarding
        pages={[
        {
      backgroundColor: '#fff',
      image: <Image source={require('C:/Users/LENOVO/Desktop/TyraniiApp/assets/ob 1.png')} />,
      title: 'Control',
      subtitle: 'Tyranii gives you control over your comfort',
      subtitle: 'zone and gives efficient use of time '
        },
        {
      backgroundColor: '#fff',
      image: <Image source={require('C:/Users/LENOVO/Desktop/TyraniiApp/assets/ob 2.png')} />,
      title: 'Manage',
      subtitle: 'Temperature, power supply and water, all',
      subtitle: 'manageable with a few taps here and there ',
        },
        {
      backgroundColor: '#fff',
      image: <Image source={require('C:/Users/LENOVO/Desktop/TyraniiApp/assets/ob 3.png')} />,
      title: 'Monitor',
      subtitle: 'Your electricity and internet usage levels',
      subtitle: 'are efficiently reflected with Tyranii'
        },
      ]}/>


    )
};

const styles = StyleSheet.create({
  text:{
    colour: ''
  }

})

 export default OnboardingScreen;
