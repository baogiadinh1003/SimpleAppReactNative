import React from 'react';
import {
    Text,
    StyleSheet,
    View,
    ScrollView,
    Image,
} from 'react-native';
export default class Shop extends React.Component {
    constructor(props){
      super(props)
      this.state = {
        content1: "Đầu tiên Little garden xin gửi lời cảm ơn chân thành tới quý khách vì đã ủng hộ và yêu thích các sản phẩm của chúng tôi trong nhiều năm vừa qua. Với niềm đam mê đối với các loại cây phong thủy, sen đá, xương rồng… và kinh nghiệm nhiều năm trồng, chăm sóc và bán cây chúng tôi đã đúc kết được rất nhiều kinh nghiệm quý giá để có thể hỗ trợ các bạn khởi nghiệp có niềm yêu thích với cây cảnh, hoặc hợp tác với các đơn vị cùng ngành.",
        content2: "Hiện nay Little garden rất vinh dự khi cung cấp sản phẩm trang trí cho các doanh nghiệp, nhà hàng, khách sạn, quán cafe, quán trà sữa, công ty nội thất… và một số đối tác khác trên khắp Việt Nam và vươn ra tầm thế giới. Các sản phẩm của Little garden hoàn toàn khác biệt so với thị trường hiện nay, chúng tôi luôn dẫn đầu về sự sáng các mẫu tiểu cảnh cây phong thủy, tiểu cảnh sen đá, xương rồng… ",
        content3: "Với khả năng sản xuất trực tiếp cây từ nhà vườn hơn 10 hecta trong Đà Lạt, ngoài ra chúng tôi còn có khả năng tự chủ về việc sản xuất chậu gốm sứ, do đó Little garden luôn có những mẫu mã mới được cập nhật hàng tháng và độc quyền cho tất cả khách sỉ và nhượng quyền thương hiệu của Little garden. Chúng tôi luôn sẵn sàng chia sẻ những kinh nghiệm quý báu giúp các bạn có thể tự mở cửa hàng cây cảnh, tư vấn phát triển hệ thống marketing, hướng dẫn trồng và chăm sóc tất cả các loại cây mà chúng tôi cung cấp.",
      }
    }
    styles = StyleSheet.create({
    container: {
      height: 475
    },

    titleView:{
      borderBottomColor: '#000', 
      borderBottomWidth: 1,
      borderStyle:'solid',
      width: 150,
      marginLeft: 20,
      paddingTop: 5
    },

    title:{
      fontFamily: 'BalihoScript', 
      fontSize: 30,
    },

    Content:{
      paddingTop: 7,
      marginLeft: 15,
      marginRight: 15,
      paddingLeft: 5,
      paddingRight: 5,
      flexDirection:'row',
      paddingBottom: 2,
      borderBottomWidth: 0.2,
      alignItems:"center"
    },

    ContentImg:{
      height: '100%',
      width: '50%',
      paddingRight: 35,
      flex: 3
    },
    ContentText:{
      flex: 9,
      paddingLeft: 5,
      fontSize: 15
    },

    infoText:{
      textAlign: "center",
      flex:1,
      fontFamily:'Lobster-Regular',
      fontSize: 16
    },

    })

    render(){
        return (
          <ScrollView style={this.styles.container}>
            <View style={this.styles.titleView}>
              <Text style={this.styles.title}>Về chúng tôi :</Text>
            </View>
            <View style={this.styles.Content}>
              <Image style={this.styles.ContentImg} source={require('../../assets/images/conten1img.jpg')}></Image>
              <Text style={this.styles.ContentText}>{this.state.content1}</Text>
            </View>

            <View style={this.styles.Content}>
              <Text style={[this.styles.ContentText, {paddingLeft: 0, paddingRight: 5}]}>{this.state.content2}</Text>
              <Image style={this.styles.ContentImg} source={require('../../assets/images/conten2img.jpg')}></Image>
            </View>

            <View style={[this.styles.Content, {marginBottom: 5}]}>
              <Image style={this.styles.ContentImg} source={require('../../assets/images/conten3img.jpg')}></Image>
              <Text style={this.styles.ContentText}>{this.state.content3}</Text>
            </View>
            <View>
              <Text style={this.styles.infoText}>Liên lạc với chúng tôi qua</Text>
              <Text style={this.styles.infoText}>Số điện thoại: 0362.375.988</Text>
              <Text style={this.styles.infoText}>Email: baodpgpd03125@gmail</Text>
              <Text style={this.styles.infoText}>Địa chỉ: 123 Hồ Bá Ôn, Hòa Minh, Liên Chiểu, Đà Nẵng</Text>
            </View>
          </ScrollView>
        );
    }
}