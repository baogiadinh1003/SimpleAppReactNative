import React from 'react';
import {
    StyleSheet,
    Image,
    View,
    TouchableOpacity,
} from 'react-native';

export default class backbutton extends React.Component{
    constructor(props) {
        super(props)
    }

    styles = StyleSheet.create({
      headerItem:{
      marginLeft: 20,
      marginRight: 20,
    },

    back: {
      marginTop: 20,
      width: 25,
      marginBottom: 10
    },
    })

    render(){
        return(
            <View style={this.styles.headerItem}>
          <TouchableOpacity style = {this.styles.back}>
            <Image source={require('../../assets/icons/back.png')} />
          </TouchableOpacity>
        </View>
        )
    }
}