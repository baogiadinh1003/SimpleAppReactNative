import React from 'react';
import {
    Text,
    StyleSheet,
    Image,
    View,
    TouchableOpacity,
    Animated,
    Dimensions, 
    ScrollView
} from 'react-native'
import Products from './products'
import Blogs from './blogs'
import Shop from './shop'

const { width } = Dimensions.get('window');

export default class Navbar extends React.Component{
    state = {
        active: 0,
        xTabPro: 0,
        xTabIns: 0,
        xTabShop: 0,
        translateX: new Animated.Value(0),
        translateXTabProducts: new Animated.Value(0),
        translateXTabBlogs: new Animated.Value(width),
        translateXTabShop: new Animated.Value(953),
        translateY: -1000,
    };

    handleSlide = type => {
        let {
            active,
            translateX,
            translateXTabProducts,
            translateXTabBlogs,
            translateXTabShop
        } = this.state;
        Animated.spring(translateX, {
            toValue: type,
            duration: 2000,
            useNativeDriver: false,
        }).start();
        if (active === 0) {
          Animated.parallel([
            Animated.spring(translateXTabProducts, {
              toValue: 0,
              duration: 2000,
              useNativeDriver: false,
            }).start(),
            Animated.spring(translateXTabBlogs, {
              toValue: width,
              duration: 2000,
              useNativeDriver: false,
            }).start(),
            Animated.spring(translateXTabShop, {
              toValue: width + width,
              duration: 2000,
              useNativeDriver: false,
            }).start()
          ]);
        } else if (active === 1){
          Animated.parallel([
            Animated.spring(translateXTabProducts, {
              toValue: -width ,
              duration: 2000,
              useNativeDriver: false,
            }).start(),
            Animated.spring(translateXTabShop, {
              toValue: width,
              duration: 2000,
              useNativeDriver: false,
            }).start(),
            Animated.spring(translateXTabBlogs, {
              toValue: 0,
              duration: 2000,
              useNativeDriver: false,
            }).start(),
            
          ]);
        } else if (active === 2){
          Animated.parallel([
            Animated.spring(translateXTabProducts, {
              toValue: -width - width,
              duration: 2000,
              useNativeDriver: false,
            }).start(),
            Animated.spring(translateXTabBlogs, {
              toValue: -width,
              duration: 2000,
              useNativeDriver: false,
            }).start(),
            Animated.spring(translateXTabShop, {
              toValue: 0,
              duration: 2000,
              useNativeDriver: false,
            }).start()
          ]);
        }
    }

    styles = StyleSheet.create({
        container:{
          flexDirection:"column",
          height: 516
        },
        headerItem: {
            marginLeft: 20,
            marginRight: 20
        },

        navbar: {
            flexDirection: "row",
            justifyContent: "space-between",
            borderBottomWidth: 0.2,
            height: 35
        },

        navItem: {
            flexDirection: "row",
            height: 35,
            width: 115,
        },

        navItemTitle: {
            flex: 4,
            fontSize: 15,
            alignItems: "center",
        },

        navItem__text: {
            fontWeight: "bold",
        },
    })

    render(){
        let {
            active,
            xTabPro,
            xTabIns,
            xTabShop,
            translateX,
            translateXTabProducts,
            translateXTabBlogs,
            translateXTabShop,
            translateY,
            translateZ
        } = this.state;
        return(
          <View style={this.styles.container}>
            <View style={[this.styles.navbar, this.styles.headerItem]}>
          <View style={this.styles.navItem}>
            <TouchableOpacity
              style={this.styles.navItemTitle}
              onLayout={event => this.setState({ xTabPro: event.nativeEvent.layout.x})}
              onPress={() => this.setState({ active: 0 }, () => this.handleSlide(xTabPro))}
              style={{
                borderBottomWidth: active === 0 ? 3 : 0, 
                fontWeight: "bold", 
                flex: 4,
                fontSize: 15,
                alignItems: "center",}}
            >
              <Animated.View>
                <Text style={this.styles.navItem__text} >Sản phẩm</Text>
              </Animated.View>
            </TouchableOpacity>
          </View>
          <View style={this.styles.navItem}>
            <TouchableOpacity
              style={this.styles.navItemTitle}
              onLayout={event => this.setState({ xTabIns: event.nativeEvent.layout.x })}
              onPress={() => this.setState({ active: 1 }, () => this.handleSlide(xTabIns))}
              style={{
                borderBottomWidth: active === 1 ? 3 : 0,
                fontWeight: "bold",
                flex: 4,
                fontSize: 15,
                alignItems: "center",
              }}
            >
              <Animated.View>
                <Text style={this.styles.navItem__text}>Blogs</Text>
              </Animated.View>
            </TouchableOpacity>
          </View>
          <View style={this.styles.navItem}>
            <TouchableOpacity
              style={this.styles.navItemTitle}
              onLayout={event => this.setState({ xTabShop: event.nativeEvent.layout.x })}
              onPress={() => this.setState({ active: 2 }, () => this.handleSlide(xTabShop))}
              style={{
                borderBottomWidth: active === 2 ? 3 : 0,
                fontWeight: "bold",
                flex: 4,
                fontSize: 15,
                alignItems: "center",
              }}
            >
              <Animated.View>
                <Text style={this.styles.navItem__text}>Thông tin</Text>
              </Animated.View>
            </TouchableOpacity>
          </View>    
        </View>
        <ScrollView scrollEnabled={false} keyboardShouldPersistTaps={"always"}>
          <Animated.View
            style={{transform: [{translateX: translateXTabProducts}]}} onLayout={event => this.setState({translateY: 0})}>
             <Products></Products>
          </Animated.View>
          <Animated.View style={{transform: [{ translateX: translateXTabBlogs }, {translateY: -475}]}}>
            <Blogs></Blogs>
          </Animated.View>
          <Animated.View style={{transform: [{ translateX: translateXTabShop }, {translateY: -953}]}}>
            <Shop></Shop>
          </Animated.View>
        </ScrollView>
        </View>
        )
    }
}