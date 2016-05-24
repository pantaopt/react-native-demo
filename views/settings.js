'use strict';
var React = require('react-native');
var Dimensions = require('Dimensions');
var w = Dimensions.get('window').width;
var h = Dimensions.get('window').height;
var s = w/375;

var {
    StyleSheet,
    View,
    Text,
    ScrollView,
    Image
} = React;

var fristPageTab = React.createClass({
     render: function(){
     return(
            <ScrollView style = {styles.container}>
              <View style={{height:240*s,backgroundColor:'#D6022F',alignItems: 'center'}}>
                <Image style={{width:80*s,height:80*s,borderRadius:40*s,backgroundColor:'#BFC3BD',marginTop:60*s}}></Image>
                <View style={{flexDirection :'row',backgroundColor:'rgba(0,0,0,0.4)',height:50*s,width:w,marginTop:50*s}}>
                <Text style={styles.txt}>商品收藏</Text>
                <Text style={styles.txt}>店铺收藏</Text>
                <Text style={styles.txt}>关注品牌</Text>
                <Text style={styles.txt}>我的足迹</Text>
                </View>
              </View>
              <View style={{width:w,height:110*s+1,backgroundColor:'white'}}>
                <View style={{width:w,height:50*s,backgroundColor:'white',flexDirection:'row'}}>
                  <Text style={{marginLeft:10*s,fontSize:17*s,color:'black',lineHeight:30*s}}>全部订单</Text>
                  <Text style={{marginLeft:180*s,width:90*s,fontSize:14*s,lineHeight:30*s,color:'#989898'}}>查看全部订单</Text>
                </View>
                <Text style={{marginLeft:10*s,width:w-20*s,backgroundColor:'#F4F4F4',height:2}}></Text>
                <View style={{width:w,height:60*s,backgroundColor:'white',flexDirection:'row',marginTop:1}}>
                  <Text style={styles.txt1}>待付款</Text>
                  <Text style={styles.txt1}>待发货</Text>
                  <Text style={styles.txt1}>待收获</Text>
                  <Text style={styles.txt1}>待评价</Text>
                  <Text style={styles.txt1}>退款/售后</Text>
                </View>
                <View style={{width:w,height:50*s,backgroundColor:'white',flexDirection:'row',marginTop:10}}>
                  <Text style={{marginLeft:10*s,fontSize:17*s,color:'black',lineHeight:30*s}}>我的资产</Text>
                  <Text style={{marginLeft:180*s,width:90*s,fontSize:14*s,lineHeight:30*s,color:'#989898'}}>查看全部资产</Text>
                </View>
                <Text style={{marginLeft:10*s,width:w-20*s,backgroundColor:'#F4F4F4',height:1}}></Text>
                <View style={{width:w,height:60*s,backgroundColor:'white',flexDirection:'row',marginTop:1}}>
                  <Text style={styles.txt1}>购物券</Text>
                  <Text style={styles.txt1}>优惠券</Text>
                  <Text style={styles.txt1}>支付宝</Text>
                  <Text style={styles.txt1}>积分</Text>
                  <Text style={styles.txt1}>红包</Text>
                </View>
              </View>
            </ScrollView>
            );
     }
});

var styles = StyleSheet.create({
     container:{
     flex:1,
     backgroundColor:'rgba(244.8,244.8,244.8,1.0)'
   },
   txt:{
     color:'white',
     height:50*s,
     width:w/4,
     textAlign:'center',
     lineHeight:40*s,
     fontSize:13*s
   },
   txt1:{
     color:'#989898',
     height:60*s,
     width:w/5,
     textAlign:'center',
     lineHeight:40*s,
     fontSize:13*s
    }
});

module.exports = fristPageTab;
