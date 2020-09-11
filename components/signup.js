import React, {
    useRef
} from 'react';
import {
    View,
    Image,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    BackHandler,
    ToastAndroid,
} from 'react-native';
import BackButton from './HomeElement/backbutton'
import AsyncStorage from '@react-native-community/async-storage'

export default class Signup extends React.Component{
    constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      re_password:'',
      phone:'',
      statusPass: true,
    }
  }

  signup(){
    if (this.state.email === '' || this.state.email == null) {
        ToastAndroid.show("Please enter email", ToastAndroid.LONG)  
    } else if (this.state.password === '' || this.state.password == null) {
        ToastAndroid.show("Please enter password", ToastAndroid.LONG)
    } else if (this.state.re_password != this.state.password) {
        ToastAndroid.show("Re password must be correct to password", ToastAndroid.LONG)
    } else if (this.state.phone === '' || this.state.phone == null) {
        ToastAndroid.show("Please enter phone", ToastAndroid.LONG)
    } else {
      ToastAndroid.show("Sign in success", ToastAndroid.LONG)
      this.signup2()
      this.props.navigation.navigate('Login')
    }
  }

  signup2(){
    let you_url = 'http://10.0.2.2'; //Change your ip in here
    let port = ':1212';
    let sign_up = '/signup';
    let url = you_url + port + sign_up;
    fetch(url,{
      method:"POST",
      headers:{
        'Content-Type': 'application/json'
      },
      body:JSON.stringify({
        "email":this.state.email,
        "password": this.state.password,
        "phoneNumber": this.state.phone,
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
            <Text style={this.styles.title}>Sign up</Text>      
          </View>
          <View style={this.styles.img}>
            <Image style={this.styles.logo} source={require('../assets/icon.png')}/>
          </View>
          <View style={this.styles.form}>
            <View style={this.styles.inputView}>
              <TextInput style={this.styles.inputText} 
              placeholder="Enter email here" 
              onChangeText={(text)=> this.setState({email: text})}></TextInput>
            </View>
            <View style={this.styles.inputView}>
              <TextInput 
              style={this.styles.inputText} 
              secureTextEntry={this.state.statusPass} 
              placeholder="Enter password here" 
              onChangeText={(text)=> this.setState({password: text})}></TextInput>
            </View>
             <View style={this.styles.inputView}>
              <TextInput 
              style={this.styles.inputText} 
              secureTextEntry={this.state.statusPass} 
              placeholder="Enter re-password here" 
              onChangeText={(text)=> this.setState({re_password: text})}></TextInput>
            </View>
            <View style={this.styles.inputView}>
              <TextInput 
              style={this.styles.inputText} 
              placeholder="Enter your phone number here" 
              onChangeText={(text)=> this.setState({phone: text})}></TextInput>
            </View>
            <TouchableOpacity onPress={() => ToastAndroid.show("Coming soon",ToastAndroid.LONG)} >
              <Text style={this.styles.fgPassword}>Forgot password?</Text>
            </TouchableOpacity>
            <TouchableOpacity style={this.styles.btnLogin} onPress={()=> this.signup()}>
              <Text style={this.styles.titleBtnLogin}>Sign up</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Login')}>
              <Text style={this.styles.register}>Have account? Login here</Text>
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
        width: 150,
        height: 150,
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
      }
    })
}