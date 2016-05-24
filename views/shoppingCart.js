'use strict';

var React = require('react-native');
var GoodsDetail = require('./goodsDetail');
var CartCell = require('./cartCell');

var Dimensions = require('Dimensions');
var w = Dimensions.get('window').width;
var h = Dimensions.get('window').height;
var s = w/375;

var {
    StyleSheet,
    View,
    Text,
    TouchableHighlight,
    ListView
} = React;

var data = {"data":[{"shopName":"众翔数码专营店",
                     "title":"AOC刀锋5 I2281FWH 21.5寸不闪屏IPS无边显示器",
                     "description":"套餐类型:官方标配，颜色分类:黑",
                     "price":"￥824",
                     "num":"x1",
                     "img":"//img.alicdn.com/bao/uploaded/TB1XRIjLVXXXXa4XpXXSutbFXXX.jpg"},
                  {"shopName":"宁美国度官方旗舰",
                     "title":"宁美国度 三星 S24D360HL 23.6寸IPS显示器",
                     "description":"套餐类型:官方标配，颜色分类:白色",
                     "price":"￥999",
                     "num":"x1",
                     "img":"//img.alicdn.com/bao/uploaded/TB1YLTDLVXXXXX8apXXSutbFXXX.jpg"},
                  {"shopName":"锋鸟旗舰店",
                     "title":"锋鸟X-bird 锂电池折叠电动车成人迷你电动滑板车代步车",
                     "description":"颜色分类:白色-30KM续航",
                     "price":"￥3299",
                     "num":"x1",
                     "img":"//img.alicdn.com/bao/uploaded/TB1FxJhMXXXXXa2XFXXSutbFXXX.jpg"},
              ]};

var ShoppingCart = React.createClass({

  getInitialState: function(){
    return{
      dataSource: new ListView.DataSource({rowHasChanged:(row1,row2) => row1!==row2}),
      loaded:false
    };
  },

  componentWillMount(){
    this.fetchData();
  },

  fetchData: function(){
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(data.data),
      loaded:true,
    });
  },

  renderListView: function(){
    if (!this.state.loaded) {
      return(
        <View style = {styles.container}>
            <View style={ styles.loading }>
                <Text style={ styles.loadingText }>Loading</Text>
                <ActivityIndicatorIOS />
            </View>
        </View>
      );
    };
    return(
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderRow}
      />
    );
  },

  pushNav: function (item) {
    this.props.navigator.push({
            title:item.txt,
            component:<GoodsDetail item={item}/>,
        }
    );
  },

  renderRow(item) {

      return (
          <CartCell goToBuyIt={this.goToBuyIt} item={item} onSelect={ () =>  this.pushNav(item)}/>
      );
  },

 render: function(){
 return(
   this.renderListView()
        );
 }
});

var styles = StyleSheet.create({
  listView:{
      flex: 1,
      marginTop:0,
      marginBottom:49
  },
  loading: {
      flex: 1,
      backgroundColor: '#fff',
      justifyContent: 'center',
      alignItems: 'center'
  },
  loadingText: {
      fontSize: 14*s,
      marginBottom: 20
  },
  container:{
      flex:1,
      backgroundColor:'#eee'
  }

});

module.exports = ShoppingCart;
