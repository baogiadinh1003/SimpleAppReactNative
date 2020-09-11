import React from 'react';
import {
    Text,
    StyleSheet,
    Image,
    View,
    TouchableOpacity,
    Alert,
    ToastAndroid
} from 'react-native';
import { BoxShadow } from 'react-native-shadow'

export default class Products extends React.Component {
    styles = StyleSheet.create({
    mainItem: {
      display: "flex",
      flex: 1,
      flexDirection: "row",
      borderRadius: 15,
      elevation: 11,
    },

    mainItemCol1:{
      display: "flex",
      backgroundColor: "#FFFAFA",
      flex: 1,
      flexDirection: "column",
      justifyContent:"space-around",
      alignItems:"center",
      paddingTop: 10,
      paddingLeft: 15,
    },

    mainItemCol2: {
        backgroundColor: "#FFFAFA",
        paddingTop: 10,
        display: "flex",
        flex: 1,
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems:"center",
        paddingRight:15
    },

    bodyItem:{
        position: "relative",
        padding: 35,
        paddingTop: 70,
        borderRadius: 5,
        backgroundColor: "#FFF",
    },

    img:{
      position:"absolute",
      backgroundColor:"#CCFFFF",
      borderRadius: 999,
    },

    bodyItemTitle:{
      textAlign: "center",
      fontWeight:"700"
    },

    bodyItemSubTitle:{
      color: "#777",
      textAlign:"center"
    },

    plants:{
      left: 55,
      top: 22,
      padding: 10,
      paddingLeft: 12,
      paddingRight: 12,
    },

    flowers:{
      left: 53,
      top: 22,
      padding: 10,
      paddingLeft: 16,
      paddingRight: 16,
    },

    pots:{
      left: 53,
      top: 22,
      padding: 14,
      paddingLeft: 14,
      paddingRight: 14,
    },

    seeds:{
      left: 53,
      top: 22,
      padding: 12,
      paddingLeft: 12,
      paddingRight: 12,
    },

    sprayers:{
      left: 53,
      top: 22,
      padding: 12,
      paddingLeft: 16,
      paddingRight: 16,
    },

    fertilizers:{
      left: 53,
      top: 22,
      padding: 11,
      paddingLeft: 14,
      paddingRight: 14,
    }
    })

    checkPress(){
      ToastAndroid.show("On press is ok", ToastAndroid.SHORT)
    }
    render(){
        const shadowOpt = {
          width: 160,
          height: 152,
          color: '#000',
          border: 0,
          radius: 3,
          opacity: 0.05,
          x: 8,
          y: 0,
          style: {marginVertical: 2},
        };

        return (
          <View style={this.styles.mainItem}>
            <View style={this.styles.mainItemCol1}>
              {/* Plants */}
              <BoxShadow setting={shadowOpt}> 
                <TouchableOpacity
                  onPress={() =>
                    this.checkPress()
                  }
                  style={[this.styles.bodyItem, this.styles.shadowStyles]}>
                  <View style={[this.styles.img, this.styles.plants]}>
                    <Image
                      source={require('../../assets/icons/plants.png')}></Image>
                  </View>
                  <Text style={this.styles.bodyItemTitle}>Plants</Text>
                  <Text style={this.styles.bodyItemSubTitle}>157 products</Text>
                </TouchableOpacity>
              </BoxShadow>
              <BoxShadow setting={shadowOpt}>
                <TouchableOpacity TouchableOpacity style = {
                  this.styles.bodyItem
                }
                onPress={() =>this.checkPress()}>
                  <View style={[this.styles.img, this.styles.flowers]}>
                    <Image
                      source={require('../../assets/icons/flowers.png')}></Image>
                  </View>
                  <Text style={this.styles.bodyItemTitle}>Flowers</Text>
                  <Text style={this.styles.bodyItemSubTitle}>157 products</Text>
                </TouchableOpacity>
              </BoxShadow>
              <BoxShadow setting={shadowOpt}>
                <TouchableOpacity TouchableOpacity style = {
                  this.styles.bodyItem
                }
                onPress = {
                  () => this.checkPress()
                } >
                  <View style={[this.styles.img, this.styles.pots]}>
                    <Image source={require('../../assets/icons/pots.png')}></Image>
                  </View>
                  <Text style={this.styles.bodyItemTitle}>Pots</Text>
                  <Text style={this.styles.bodyItemSubTitle}>157 products</Text>
                </TouchableOpacity>
              </BoxShadow>
            </View>
            <View style={this.styles.mainItemCol2}>
              <BoxShadow setting={shadowOpt}>
                <TouchableOpacity TouchableOpacity style = {
                  this.styles.bodyItem
                }
                onPress = {
                  () => this.checkPress()
                } >
                  <View style={[this.styles.img, this.styles.seeds]}>
                    <Image
                      source={require('../../assets/icons/seeds.png')}></Image>
                  </View>
                  <Text style={this.styles.bodyItemTitle}>Seeds</Text>
                  <Text style={this.styles.bodyItemSubTitle}>157 products</Text>
                </TouchableOpacity>
              </BoxShadow>
              <BoxShadow setting={shadowOpt}>
                <TouchableOpacity TouchableOpacity style = {
                  this.styles.bodyItem
                }
                onPress = {
                  () => this.checkPress()
                } >
                  <View style={[this.styles.img, this.styles.sprayers]}>
                    <Image
                      source={require('../../assets/icons/sprayers.png')}></Image>
                  </View>
                  <Text style={this.styles.bodyItemTitle}>Sprayers</Text>
                  <Text style={this.styles.bodyItemSubTitle}>157 products</Text>
                </TouchableOpacity>
              </BoxShadow>
              <BoxShadow setting={shadowOpt}>
                <TouchableOpacity TouchableOpacity style = {
                  this.styles.bodyItem
                }
                onPress = {
                  () => this.checkPress()
                } >
                  <View style={[this.styles.img, this.styles.fertilizers]}>
                    <Image
                      source={require('../../assets/icons/fertilizers.png')}></Image>
                  </View>
                  <Text style={this.styles.bodyItemTitle}>Fertilizers</Text>
                  <Text style={this.styles.bodyItemSubTitle}>157 products</Text>
                </TouchableOpacity>
              </BoxShadow>
            </View>
          </View>
        );
    }
}