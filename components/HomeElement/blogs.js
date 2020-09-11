import React from 'react';
import {
     Text,
    StyleSheet,
    Image,
    View,
    TouchableOpacity,
    FlatList,
    ScrollView,
    Alert
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default class Blogs extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            dataSource: []
        }
    }

    renderItem = ({item}) =>{
        
        return(           
              <TouchableOpacity>
                <View style = {this.styles.content} >
                  <View style={this.styles.contentItem1}>
                    <Image
                      style={this.styles.contentItemImg}
                      source={{ uri: item.image }}/>
                  </View>
                  <View style = {this.styles.contentItem2} >
                    <Text style= {this.styles.contentItemTitle}>{item.title}</Text>
                    <Text style= {this.styles.contentItemDescription}>{item.description}</Text>
                  </View>
                </View> 
              </TouchableOpacity>   
         ) 
    }

    componentDidMount(){
        const url = 'https://gist.githubusercontent.com/baogiadinh1003/1e061c02b3e995ddef1b84d973e96e15/raw/9c51d6175d80ebcaad3d75a5c07ef03505324a02/blog.json'
                    
        fetch(url)
        .then((response) => response.json())
        .then((responseJson) => {
            this.setState({
                dataSource: responseJson.blogs_array
            })
        })
        .catch((error)=> {
            console.log(error)
        })
    }
    styles = StyleSheet.create({
        container:{
            height: 475
        },
        
        content:{
            flexDirection:"row",
            paddingBottom: 5,
            paddingLeft: 10,
            paddingRight: 10,
            
        },

        contentItem1:{
            flex: 4,
        },

        contentItem2:{
            paddingLeft: 5,
            flex: 8,  
            borderTopWidth: 1,
            borderRightWidth: 1,
            borderBottomWidth: 1,
            borderStyle: "solid",
            borderColor: "#f5f5f5",
            borderRadius: 10
        },

        contentItemImg:{
            width: '100%',
            height: 100,
            borderTopLeftRadius: 15,
            borderBottomLeftRadius: 15
        },

        contentItemTitle:{
            fontWeight: "700",
            fontSize: 15,
            paddingBottom: 5
        },

        contentItemDescription:{
            fontSize: 12
        }
    })

    render(){
        const getHeader = () => {
            return <Text>{'My Title'}</Text>;
        };

        const getFooter = () => {
            if (this.state.loading) {
                return null;
            }
            return <Text>{'Loading...'}</Text>;
        };

        return (
        <SafeAreaView style={{flex:1}}>
          <View style={this.styles.container}>
              <FlatList
              data = {this.state.dataSource}
              renderItem={this.renderItem}
              keyExtractor={item => item.id}
              />
          </View>
        </SafeAreaView>
        );
    }
}