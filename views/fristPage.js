'use strict';
var React = require('react-native');
var ItemCell = require('./ItemCell');
var GoodsDetail = require('./goodsDetail');
var BuyGoods = require('./buyGoods');

var Dimensions = require('Dimensions');
var w = Dimensions.get('window').width;
var h = Dimensions.get('window').height;
var s = w/375;

var API0 = 'http://ald.taobao.com/recommend.htm?appId=03507&areaId=330100&size=15&page=';
var API1 = '&type=1';
var PAGE = 1;
var data = new Array();
var RefreshableListView = require('react-native-refreshable-listview');
var isAdd = true;
var scrollY = 0;
var {
    StyleSheet,
    ListView,
    View,
    Text,
    ActivityIndicatorIOS,
    PropTypes,
    } = React;

var fristPage = React.createClass({
  propTypes: {
    pushToDetail: PropTypes.func,
    pushToBuy: PropTypes.func,
  },
    //在组件挂载之前调用一次。返回值将会作为 this.state 的初始值。
    getInitialState: function() {
        return {
            dataSource: new ListView.DataSource({rowHasChanged: (row1, row2) => row1 !== row2}),
            loaded: false
        };
    },

    componentWillMount() {
        this.fetchData();
    },

    // componentWillReceiveProps() {
    //     //猫头先转
    //     this.setState({
    //         loaded : false
    //     })
    //     //拉取数据
    //     this.fetchData();
    // },
    //拉取数据
    fetchData: function() {
        fetch(API0+PAGE+API1)
            .then((response) => response.json())
            .then((responseData) => {
                data = data.concat(responseData.data);
                isAdd = true;
                this.setState({
                    dataSource: this.state.dataSource.cloneWithRows(data),
                    loaded: true,
                });
            })
            .done();
    },

    //渲染列表
    renderListView : function(){
        //先展示加载中的菊花
        if(!this.state.loaded){
            return(
                <View style = {styles.container}>
                    <View style={ styles.loading }>
                        <Text style={ styles.loadingText }>Loading</Text>
                        <ActivityIndicatorIOS />
                    </View>
                </View>);
        };
        return(
            <RefreshableListView
                      dataSource={this.state.dataSource}
                      renderRow={this.renderRow}
                      loadData={this.reloadArticles}
                      onRefresh={this.handleRefresh}
                      refreshDescription="正在刷新"
                      style={styles.listView}
                      onScroll={this.handleScroll}
                      getScrollY={this.getScrollY}
                      PAGE={PAGE}
                      />
        );
    },

    getScrollY(y){
      scrollY = y;
      if (y < -10) {
        this.handleRefresh();
      }else if (y > 2010 * PAGE - 554 + 50) {
        this.reloadArticles();
      }
    },

    handleRefresh() {
      PAGE = 1;
      isAdd = false;
      data = new Array();
      this.fetchData();
    },
    reloadArticles() {
      if (isAdd) {
        isAdd = false;
        PAGE++;
        return this.fetchData();
      }
        // returns a Promise of reload completion
      },

    pushNav: function (item) {
      this.props.navigator.push({
              title:item.txt,
              component:<GoodsDetail item={item}/>,
          }
      );
    },
    goToBuyIt(){
      this.props.navigator.push({
              title:"购买该商品",
              component:<BuyGoods/>,
          }
      );
    },
    //渲染每一行
    renderRow(item) {

        return (
            <ItemCell goToBuyIt={this.goToBuyIt} item={item} onSelect={ () =>  this.pushNav(item)}/>
        );
    },

    render() {
        return (
            this.renderListView()
        );
    },

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

module.exports = fristPage;
