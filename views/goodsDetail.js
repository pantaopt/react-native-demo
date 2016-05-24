'use strict';
var React = require('react-native');
var BuyGoods = require('./buyGoods');
var Dimensions = require('Dimensions');
var w = Dimensions.get('window').width;
var h = Dimensions.get('window').height;
var s = w/375;

var {
    StyleSheet,
    View,
    Image,
    Text,
    ScrollView,
} = React;
var goodsDetail = React.createClass({
                                    componentDidMount() {
                                        this.props.navigator.pop()
                                    },

                                    goToBuyIt(){
                                      this.props.navigator.push({
                                              title:"购买该商品",
                                              component:<BuyGoods/>,
                                          }
                                      );
                                    },

                                     render: function(){

                                       var item = this.props.item;
                                     return(
                                       <View style={styles.container}>
                                            <ScrollView style = {styles.scrollView}>
                                              <Image style={styles.goodsImg} source={{uri : 'http:'+item.img}} />
                                              <View style={styles.viewUnderImage}>
                                                <Text style={styles.goodsTitle}>{item.txt}</Text>
                                                <Text style={styles.goodsPrice}>新风尚价￥{item.orderprice || item.price}</Text>
                                                <Text style={styles.goodsOrderprice}>专柜价￥{item.originalprice}</Text>
                                                <View style={styles.shipSales}>
                                                  <Text style={styles.shipment}>快递 0.00</Text>
                                                  <Text style={styles.salesNum}>月销{item.realMonthSellNum || 0}笔</Text>
                                                  <Text style={styles.place}>上海</Text>
                                                </View>
                                              </View>
                                              <View style={styles.viewUndershipSales}>
                                                  <Text style={styles.newFashion}>新风尚</Text>
                                                  <Text style={styles.activity}>热卖至3月28日，先买先美丽</Text>
                                              </View>
                                              <View style={styles.viewUnderNewFashion}>
                                                <View style={styles.view0}>
                                                  <Text style={styles.cricle}></Text>
                                                  <Text style={styles.cricleText}>分期购</Text>
                                                  <Text style={styles.cricle}></Text>
                                                  <Text style={styles.cricleText}>正品保证</Text>
                                                  <Text style={styles.cricle}></Text>
                                                  <Text style={styles.cricleText}>赠运费险</Text>
                                                  <Text style={styles.cricle}></Text>
                                                  <Text style={styles.cricleText}>极速退款</Text>
                                                </View>
                                                <Text style={styles.xian}></Text>
                                                <View style={styles.view1}>
                                                  <Text style={styles.give}>送</Text>
                                                  <Text style={styles.score}>509</Text>
                                                  <Text style={styles.scoreL}>天猫积分</Text>
                                                </View>
                                                <Text style={styles.xian}></Text>
                                                <View style={styles.view2}>
                                                  <Text style={styles.quan}>券</Text>
                                                  <Text style={styles.getQuan}>领取优惠券</Text>
                                                </View>
                                              </View>
                                              <View style={styles.viewUnderquan}>
                                                <Text style={styles.parameter}>产品参数</Text>
                                                <Image style={styles.parameterImg} source={require('image!arrow')} />
                                              </View>
                                              <View style={styles.finaView}></View>
                                            </ScrollView>
                                            <View style={styles.bottomView}>
                                              <View style={styles.bottomActionView}>
                                                <Image style={styles.bottomImg} source={require('image!shapes')} />
                                                <Text style={styles.bottomText}>客服</Text>
                                              </View>
                                              <View style={styles.bottomActionView}>
                                                <Image style={styles.bottomImg} source={require('image!construction')} />
                                                <Text style={styles.bottomText}>店铺</Text>
                                              </View>
                                              <View style={styles.bottomActionView}>
                                                <Image style={styles.bottomImg} source={require('image!night')} />
                                                <Text style={styles.bottomText}>收藏</Text>
                                              </View>
                                              <Text style={styles.shoppingCart}>加入购物车</Text>
                                              <Text style={styles.buyNow} onPress={()=> this.goToBuyIt()}>立即购买</Text>
                                            </View>

                                        </View>

                                            );
                                     }
                                     });

var styles = StyleSheet.create({
                             container:{
                               flex:1,
                               backgroundColor:'rgba(244.8,244.8,244.8,1.0)'
                             },
                             scrollView:{
                               flex:1,
                               backgroundColor:'rgba(244.8,244.8,244.8,1.0)'
                             },
                             bottomView:{
                               marginBottom:0,
                               height:50*s,
                               flexDirection :'row',
                             	 alignItems: 'center',
                             	 justifyContent : 'space-between',
                             },
                             buyNow:{
                               width:120*s,
                               height:50*s,
                               backgroundColor:'#DC2727',
                               color:'white',
                               fontSize:17*s,
                               textAlign:'center',
                               lineHeight:30*s
                             },
                             shoppingCart:{
                               width:120*s,
                               height:50*s,
                               backgroundColor:'#FF9303',
                               color:'white',
                               fontSize:17*s,
                               textAlign:'center',
                               marginRight:0,
                               lineHeight:30*s
                             },
                             bottomActionView:{
                               width:45*s,
                               height:50*s,
                               backgroundColor:'white',
                               marginRight:2
                             },
                             bottomImg:{
                               marginTop:10,
                               height:20*s,
                               width:20*s,
                               marginLeft:12.5*s
                             },
                             bottomText:{
                               width:45*s,
                               height:20*s,
                               color:'black',
                               fontSize:12*s,
                               backgroundColor:'white',
                               marginTop:5,
                               textAlign:'center',
                             },
                             viewUnderImage:{
                               marginLeft:0,
                               marginRight:0,
                               marginTop:5,
                               backgroundColor:'white'
                             },
                             viewUndershipSales:{
                               backgroundColor:'#FDEBED',
                               height:50*s,
                               flexDirection :'row',
                             	 alignItems: 'center',
                             	 justifyContent : 'flex-start',
                             },
                             newFashion:{
                               width:30*s,
                               height:30*s,
                               marginLeft:10,
                               marginTop:0,
                               backgroundColor:'#13D3CE',
                               color:'white',
                               fontSize:10*s,
                               lineHeight:20*s,
                             },
                             activity:{
                               marginLeft:10,
                               color:'#F00009',
                               fontSize:14*s,
                               height:50*s,
                               lineHeight:30*s
                             },
                             viewUnderNewFashion:{
                               height:106*s,
                               backgroundColor:'white'
                             },
                             view0:{
                               flexDirection :'row',
                             	 alignItems: 'center',
                             	 justifyContent : 'space-between',
                               backgroundColor:'white',
                               marginTop:10
                             },
                             cricle:{
                               width:15*s,
                               height:15*s,
                               marginLeft:10,
                               borderRadius:7.5*s,
                               borderWidth:1,
                               borderColor:'red'
                             },
                             cricleText:{
                               marginLeft:5,
                               color:'#5F5F5F'
                             },
                             xian:{
                               width:355*s,
                               height:1,
                               marginLeft:10,
                               marginTop:10,
                               backgroundColor:'rgba(244.8,244.8,244.8,1.0)'
                             },
                             view1:{
                               flexDirection :'row',
                               alignItems: 'center',
                             	 justifyContent : 'flex-start',
                               backgroundColor:'white',
                             },
                             give:{
                               marginLeft:10,
                               marginTop:10,
                               width:10*s,
                               height:10*s,
                               backgroundColor:'#DB0000',
                               color:'white',
                               fontSize:10*s,
                               borderRadius:2,
                             },
                             score:{
                               marginLeft:5,
                               marginTop:10,
                               width:25*s,
                               fontSize:12*s,
                               color:'#DB0000'
                             },
                             scoreL:{
                               marginLeft:0,
                               marginTop:10,
                               width:60*s,
                               fontSize:12*s,
                               color:'#5F5F5F'
                             },
                             view2:{
                               flexDirection :'row',
                               alignItems: 'center',
                             	 justifyContent : 'flex-start',
                               backgroundColor:'white',
                             },
                             quan:{
                               marginLeft:10,
                               marginTop:10,
                               width:10*s,
                               height:10*s,
                               backgroundColor:'#DB0000',
                               color:'white',
                               fontSize:10*s,
                               borderRadius:2,
                             },
                             getQuan:{
                               marginLeft:5,
                               marginTop:10,
                               width:100*s,
                               fontSize:12*s,
                               color:'#5F5F5F',
                               flexDirection :'row',
                             },
                             viewUnderquan:{
                               height:45*s,
                               backgroundColor:'white',
                               marginTop:15,
                               flexDirection :'row',
                               justifyContent : 'space-between',
                             },
                             parameter:{
                               height:45*s,
                               color:'black',
                               fontSize:17*s,
                               marginLeft:10,
                               lineHeight:30,
                             },
                             parameterImg:{
                               height:20*s,
                               marginTop:12.5,
                               width:15*s,
                               marginRight:10
                             },
                             goodsImg:{
                               height:300*s,
                             },
                             goodsTitle:{
                               height:20*s,
                               fontSize:16*s,
                               marginLeft:10,
                               marginTop:10,
                             },
                             goodsPrice:{
                               height:20*s,
                               marginTop:10,
                               fontSize:15*s,
                               marginLeft:10,
                               color:'#B4B4B4',
                             },
                             goodsOrderprice:{
                               fontSize:14*s,
                               height:20*s,
                               marginTop:5,
                               marginLeft:10,
                               color:'#B4B4B4',
                             },
                             shipSales:{
                               flexDirection :'row',
                             	alignItems: 'center',
                             	justifyContent : 'space-between',
                             },
                             shipment:{
                               fontSize:13*s,
                               marginLeft:10,
                               marginTop:5,
                               color:'#B4B4B4',
                             },
                             salesNum:{
                               fontSize:13*s,
                               marginTop:5,
                               color:'#B4B4B4',
                             },
                             place:{
                               fontSize:13*s,
                               marginTop:5,
                               marginRight:10,
                               color:'#B4B4B4',
                             },
                             finaView:{
                               backgroundColor:'rgba(244.8,244.8,244.8,1.0)',
                               height:30*s,
                             },
                               });

module.exports = goodsDetail;
