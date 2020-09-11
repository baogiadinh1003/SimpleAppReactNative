import React from 'react';
import {
    Text,
    StyleSheet,
    View,
    Image,
    ToastAndroid,
} from 'react-native';
import Navbar from './HomeElement/navbar'
import BackButton from './HomeElement/backbutton'
import { TouchableOpacity } from 'react-native-gesture-handler';


export default class Home extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      data:''
    }
  }
  styles = StyleSheet.create({
    body: {
      backgroundColor: "#FFFFFF",
      flex: 1,
    },

    header: {
      flexDirection: "row",
      height: 62,
      marginBottom: 5
    },

    headerItem: {
      marginLeft: 20,
      marginRight: 20,
    },

    title: {
      flex: 10,
      fontSize: 40,
      fontFamily: "SVN-Journey-Bold",
      letterSpacing: 2,
      padding: 2,
    },

    avatar: {
      width: 35,
      height: 35,
      flex: 2,
      alignItems: "flex-end",
      paddingTop: 12
    },

    avatarImg: {
      width: 35,
      height: 35,
      borderRadius: 999,
    },
  })


  render(){       
    console.disableYellowBox = true;
    console.log("userID ", this.state.data)
    return (
      <View style={this.styles.body}>
      <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
        <BackButton></BackButton>
      </TouchableOpacity>
        <View style={[this.styles.header, this.styles.headerItem]}>
          <View>
            <Text style={this.styles.title}>Little garden </Text>
          </View>
          <View style={this.styles.avatar}>
            <TouchableOpacity onPress={()=>this.props.navigation.navigate('User')}>
              <Image style={this.styles.avatarImg} source={require('../assets/images/ava2.png')} />
            </TouchableOpacity>
          </View>
          
        </View>
        <Navbar></Navbar>
      </View>
    );
  }
  
}