import React from 'react';
import {
    Text,
    StyleSheet,
    View,
    Image
} from 'react-native';
import BackButton from './HomeElement/backbutton'
import {
    TouchableOpacity
} from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-community/async-storage'

export default class User extends React.Component{
    constructor(props){
        super(props)
        this.state={
            ava1: '../assets/images/ava.png',
            ava2: '../assets/images/ava2.png',
            mail: AsyncStorage.getItem('email')
        }
    }

    styles = StyleSheet.create({
      container:{
        backgroundColor: "#FFFFFF",
        flex: 1,
      },

      header: {
        flexDirection: "column",
        height: 62,
        alignItems: 'center',
      },

      title: {
        flex: 1,
        alignSelf: 'center',
        textAlign: 'center',
        fontSize: 40,
        fontFamily: "SVN-Journey-Bold",
        letterSpacing: 2,
        padding: 2
      },

      viewAvatar:{
        flex: 4,
        alignItems: 'center',
        marginBottom: 20
      },

      viewAvatarImg:{
        width: 150,
        height: 150,
        borderRadius: 999,
        paddingTop: 10,
        paddingBottom: 10,
        marginBottom: 10,
      },
      
      viewAvatarChange:{
          padding: 8,
          borderRadius: 10,
          backgroundColor: '#B7FFC9',
          fontSize: 18
      },

      viewAvatarChangeText:{
          fontSize: 16
      },

      information:{
          flex: 8,
          paddingLeft: 20,
          paddingRight: 12,
          flexDirection:"column",
          justifyContent: "flex-start"
      },

      informationContent:{
        flexDirection: "row",
        minHeight: 50,
      },

      informationLabel:{
        flex: 2,
        paddingBottom: 7,
        fontSize: 20,
        fontFamily: 'BalihoScript',
        lineHeight: 25,
      },

      informationText:{
        flex: 5,
        paddingBottom: 7,
        fontSize: 20,
        fontFamily:'BalihoScript',
        lineHeight: 25,
      },

      edit:{
          marginLeft: 50,
          marginRight: 50,
          paddingBottom: 20
      },

      editText:{
          textAlign:'center',
          borderWidth: 1,
          backgroundColor: '#F5F5F5',
          fontSize: 20,
          borderRadius: 10,
      }

    })

    getUser(){
      fetch("http://10.0.2.2:1212/getuser", {
        method: "GET",
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
        if(data){
          ToastAndroid.show("Login success", ToastAndroid.LONG)
        } else {
          ToastAndroid.show("Wrong email or password", ToastAndroid.LONG)
        }
        try {
          await AsyncStorage.setItem('email', data.email)
          await AsyncStorage.setItem('phone', data.phoneNumber)
        
        } catch (error) {
          console.log("Error here", error)
        }
      })
    }
    render(){
        return(
            <View style={this.styles.container}>
                <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                    <BackButton></BackButton>
                </TouchableOpacity>
                <View style={this.styles.header}>
                    <View>
                        <Text style={this.styles.title}>My account</Text>
                    </View>
                </View>
                <View style={this.styles.viewAvatar}>
                    <Image style={this.styles.viewAvatarImg} source={require('../assets/images/ava2.png')}></Image>
                    {/* <TouchableOpacity>
                        <View style={this.styles.viewAvatarChange}>
                            <Text style={this.styles.viewAvatarChangeText}>Đổi ảnh đại diện</Text>
                        </View>
                    </TouchableOpacity>  */}
                </View>
                <View style={this.styles.information}>
                    <View style={this.styles.informationContent}>
                      <Text style={this.styles.informationLabel}>Mô tả: </Text>
                      <Text style={[this.styles.informationText]}>Là sinh viên trường FPT Polytechnic Đà Nẵng, là người hướng nội, thích chơi đàn</Text>
                    </View>
                    <View style={this.styles.informationContent}>
                      <Text style={this.styles.informationLabel}>Họ và tên: </Text>
                      <Text style={this.styles.informationText}>Đinh Phạm Gia Bảo </Text>
                    </View>
                    <View style={this.styles.informationContent}>
                      <Text style={this.styles.informationLabel}>Số điện thoại: </Text>
                      <Text style={this.styles.informationText}>0362.375.988 </Text>
                    </View>
                    <View style={this.styles.informationContent}>
                      <Text style={this.styles.informationLabel}>Email: </Text>
                      <Text style={this.styles.informationText}>baodpgpd03125@gmail.com</Text>
                    </View>
                    <View style={this.styles.informationContent}>
                      <Text style={this.styles.informationLabel}>Facebook: </Text>
                      <Text style={ this.styles.informationText}>facebook.com/bao.dpg.1003</Text>
                    </View>
                    <View style={this.styles.informationContent}>
                      <Text style={this.styles.informationLabel}>Ngày sinh: </Text>
                      <Text style={ this.styles.informationText}>10/03/2000</Text>
                    </View>
                </View>
                <View style={this.styles.edit}>
                    <TouchableOpacity style={this.styles.edit}>
                        <Text style={this.styles.editText}>Sửa thông tin</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}