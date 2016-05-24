//单个商品坑位
//doc组件生命周期： http://reactjs.cn/react/docs/working-with-the-browser.html#component-lifecycle

'use strict';

var Dimensions = require('Dimensions');
var w = Dimensions.get('window').width;
var h = Dimensions.get('window').height;
var s = w/375;

var React = require('react-native');

var {
  StyleSheet,
  TouchableOpacity,
  Text,
  Image,
  View,
  PropTypes,
} = React;

// 组件样式
var styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'white'
  },
  view0:{
    flexDirection :'row',
    height:45,
    backgroundColor:'white'
  },
  view1:{
    flexDirection :'row',
    height:135,
    backgroundColor:'#CCCCCC'
  },

});

var ItemCell = React.createClass({
	render() {
		var item = this.props.item;
		return (
      <View style={styles.container}>
  			<View style={styles.view0}>
          <Text style={{width:20*s,height:20*s,borderRadius:10*s,marginLeft:10*s,marginTop:12.5*s,borderWidth:1,borderColor:'#CCCCCC'}}></Text>
          <Image style={{width:20*s,height:20*s,marginLeft:10*s,marginTop:12.5*s}} source={require('image!construction')}></Image>
          <Text style={{width:120*s,height:20*s,marginLeft:10*s,marginTop:12.5*s,color:'#0F1D1D'}}>{item.shopName}</Text>
          <Text style={{width:40*s,height:20*s,marginLeft:145*s,marginTop:12.5*s,color:'#0F1D1D'}}>编辑</Text>
        </View>
        <View style={styles.view1}>
          <Text style={{width:20*s,height:20*s,borderRadius:10*s,marginLeft:10*s,marginTop:50*s,borderWidth:1,borderColor:'#121F1F'}}></Text>
          <Image style={{width:90*s,height:90*s,marginLeft:10*s,marginTop:20*s,backgroundColor:'red'}} source={{uri : 'http:'+item.img}}></Image>
          <View style={{width:100*s,height:40*s,marginLeft:10*s,marginTop:20*s}}>
            <Text style={{width:100*s,height:30*s,marginLeft:10*s,marginTop:0*s,color:'#121F1F'}}>{item.title}</Text>
            <Text style={{width:100*s,height:17*s,marginLeft:10*s,marginTop:5*s,color:'#121F1F'}}>{item.description}</Text>
          </View>
          <View style={{width:100*s,height:40*s,marginLeft:70*s,marginTop:20*s}}>
            <Text style={{width:40*s,height:20*s,marginLeft:10*s,marginTop:5*s,color:'#DF1C1B'}}>{item.price}</Text>
            <Text style={{width:40*s,height:20*s,marginLeft:35*s,marginTop:5*s,color:'#121F1F'}}>{item.num}</Text>
          </View>
        </View>
        <View style={{height:30*s,backgroundColor:'white'}}></View>
        <View style={{height:10*s,backgroundColor:'#CCCCCC'}}></View>
      </View>
		);
	}


})
module.exports = ItemCell
