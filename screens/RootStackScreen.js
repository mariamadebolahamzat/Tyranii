import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import SplashScreen from './SplashScreen';
import Onboarding from './Onboarding';
import Signup from './Signup';
import Signin from './Signin';

const RootStack = createStackNavigator();

const RootStackScreen = ({navigation}) => (
     <RootStack.Navigator headerMode='none'>
         <RootStack.Screen name="SplashScreen" component={SplashScreen} />
         <RootStack.Screen name="OnboardingScreen" component={OnboardingScreen} />
         <RootStack.Screen name="Signup" component={Signup} />
         <RootStack.Screen name="Signin" component={Signin} />

     </RootStack.Navigator>
);

export default RootStackScreen;