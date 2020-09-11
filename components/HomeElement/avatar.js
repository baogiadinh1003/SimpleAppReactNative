import React from 'react';
import {
    StyleSheet,
    Image,
    View,
    TouchableOpacity,
} from 'react-native';

export default class Avatar extends React.Component{
    styles = StyleSheet.create({
        avatar: {
          width: 35,
          height: 35,
          flex: 2,
        alignItems: "flex-end"
        },

        avatarImg: {
          width: 35,
          height: 35,
          borderRadius: 999,
        },
    })

    render(){
        return(
            <View style={this.styles.avatar}>
            <TouchableOpacity onPress={()=>this.props.navigation.navigate('User')}>
              <Image style={this.styles.avatarImg} source={require('../../assets/images/ava2.png')} />
            </TouchableOpacity>
          </View>
        )
    }
}