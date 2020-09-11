import React, {useEffect, useState} from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './components/Home'
import Login from './components/login'
import Splash from './components/splashScreen'
import Signup from './components/signup'
import Blogs from './components/HomeElement/blogs'
import User from './components/User'
import AsyncStorage from '@react-native-community/async-storage';

const Stack = createStackNavigator();

export default class App extends React.Component{
  
  
  render(){
    // const [isLoggedin, setLogged] = useState(null);
    // useEffect(async()=>{
    //   const token = await AsyncStorage.getItem('token')
    //   if(token){
    //     setLogged(true)
    //   } else {
    //     setLogged(false)
    //   }
    // })
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Splash">
          <Stack.Screen
            name="Home"
            component={Home}
            options={{headerShown: false}}></Stack.Screen>
          <Stack.Screen
            name="Login"
            component={Login}
            options={{headerShown: false}}></Stack.Screen>
          <Stack.Screen
            name="Splash"
            component={Splash}
            options={{headerShown: false}}></Stack.Screen>
          <Stack.Screen
            name="Signup"
            component={Signup}
            options={{headerShown: false}}></Stack.Screen>
          <Stack.Screen
            name="Blogs"
            component={Blogs}
            options={{headerShown: false}}></Stack.Screen>
          <Stack.Screen
            name="User"
            component={User}
            options={{headerShown: false}}></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

//admin@admin 
//admin



