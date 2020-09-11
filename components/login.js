import React, { useEffect, useState } from 'react';
import {
  View,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  BackHandler,
  ToastAndroid,
  KeyboardAvoidingView
} from 'react-native';
import BackButton from './HomeElement/backbutton'
import AsyncStorage from '@react-native-community/async-storage'

export default class Login extends React.Component{
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: '',
      statusPass: true,
      rememberUser:'admin@admin',
      rememberPass:'admin',
      isSelected:false,
      setSelection: false,
      userId: '',
    }
  }

  getToken(){
    // async()=>{
    //   const token = await AsyncStorage.getItem('token')
    //   if(token){
    //     console.log('gettoken')
    //     // setLogged(true)
    //   } else {
    //     console.log('donthavetoken')
    //   }
    // }
  }

  login(){
    fetch("http://10.0.2.2:1212/signin", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          "email": this.state.email,
          "password": this.state.password,
        })
      })
      .then(res => res.json())
      .then(async (data) => {
        console.log(data)
        console.log(data._id)
        if(data){
          ToastAndroid.show("Login success", ToastAndroid.LONG)
          this.props.navigation.navigate('Home', {data: data._id})
        } else {
          ToastAndroid.show("Wrong email or password", ToastAndroid.LONG)
        }
        try {
          await AsyncStorage.setItem('email', data._id)
          await AsyncStorage.setItem('email', data.email)
          await AsyncStorage.setItem('phone', data.phoneNumber)
        } catch (error) {
          console.log("Error here", error)
        }
      })
  }

  showPass(){
    this.setState(prevState => ({
      statusPass: !prevState.statusPass
    }))
  }

  signup2(){
    fetch("http://10.0.2.2:1212/signin",{
      method:"POST",
      headers:{
        'Content-Type': 'application/json'
      },
      body:JSON.stringify({
        "email":this.state.email,
        "password": this.state.password
      })
    })
    .then(res =>res.json())
    .then(async(data)=>{
      console.log(data)
      try {
        await AsyncStorage.setItem('token',data.token)
      } catch (error) {
        console.log("Error here", error)
      }
    })
  }
      render(){
      return (
        <View style={this.styles.body}>
          <TouchableOpacity onPress={() => BackHandler.exitApp()} >
            <BackButton></BackButton>
          </TouchableOpacity>
          <View style={this.styles.header}>
            <Text style={this.styles.title}>Login</Text>      
          </View>
          <View style={this.styles.img}>
            <Image style={this.styles.logo} source={require('../assets/icon.png')}/>
          </View>
          <View style={this.styles.form}>
            <View style={this.styles.inputView}>
              <TextInput  style={this.styles.inputText} placeholder="Enter email here" onChangeText={(text)=> this.setState({email: text})}></TextInput>
            </View>
            <View style={this.styles.inputView}>
              <TextInput inputAccessoryViewID='password' style={this.styles.inputText} secureTextEntry={this.state.statusPass} placeholder="Enter password here" onChangeText={(text)=> this.setState({password: text})}></TextInput>
              <TouchableOpacity onPress={()=>this.showPass()}>
                <Image style={this.styles.inputImg} source={require('../assets/icons/showPassword.png')}></Image>
              </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={() => this.getToken()} >
              <Text style={this.styles.fgPassword}>Forgot password?</Text>
            </TouchableOpacity>
            <TouchableOpacity style={this.styles.btnLogin} onPress={()=> this.login()}>
              <Text style={this.styles.titleBtnLogin}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Signup')}>
              <Text style={this.styles.register}>No account yet? Register one</Text>
            </TouchableOpacity>
          </View>
        </View>
        );
    }

    styles = StyleSheet.create({
      body:{
        backgroundColor: "#FFFFFF",
        flex: 1,
      },

      header:{
        flexDirection: "row",
        height: 40,
        marginTop: 10,
        alignItems: "center",
        marginBottom: 20
      },

      title: {
        fontSize: 30,
        flex: 1,
        fontWeight: "bold",
        textAlign:"center",
      },

      img:{
        alignItems: "center"
      },

      logo:{
        width: 200,
        height: 200,
        borderRadius: 999,
      },
      
      form:{
        paddingLeft: 20,
        paddingRight: 20,
      },

      inputView:{
        borderWidth: 0.2,
        borderRadius: 20,
        marginBottom: 10,
        height: 44,
        paddingLeft: 4,
        paddingRight: 14,
        flexDirection:"row",
      },

      inputText:{
        flex: 10
      },

      inputImg:{
        flex: 1,
        opacity: 0.5,
        width: 30,
        maxHeight: 20,
        alignContent:"flex-end",
        marginTop: 13,
      },

      fgPassword:{
        textAlign: "right",
        marginBottom: 10,
      },

      btnLogin:{
        backgroundColor: "#48DC54",
        height: 40,
        borderRadius: 20,
        marginBottom: 10
      },

      titleBtnLogin:{
        color: "#FFF",
        textAlign:"center",
        fontSize: 23
      },

      register:{
        textAlign: "center"
      },

      checkboxContainer:{
        flexDirection: "row",
        marginBottom: 20,
      },

      checkbox: {
        alignSelf: "center",
      },
    })
}
