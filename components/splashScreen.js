import React from 'react';
import {
  View,
  Button,
  ImageBackground,
} from 'react-native';


 
export default class SplashScreen extends React.Component{
    render(){
      setTimeout(() => {
        this.props.navigation.navigate('Login')
      }, 3000);

      return (
        <View style={{flex: 1,flexDirection: "column"}}>
          <ImageBackground style={{flex: 1,resizeMode: "cover",justifyContent: "center"}} source={require('../assets/splash.png')}></ImageBackground>
        </View>
        );
    }
}
