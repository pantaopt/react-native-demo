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
    container: {
    	flex : 1,
    	padding : 10,
        flexDirection: 'row',
        borderBottomColor : '#eeeeee',
        borderBottomWidth : 1,
        backgroundColor: '#ffffff',
    },
    //左侧商品图
    goodImg : {
    	width : 110*s,
    	height : 110*s,
    	marginRight: 15
    },
    //右侧商品信息
    goodInfo : {
    	flex : 1,
    	flexDirection : 'column'
    },
    goodTit : {
    	fontSize : 16*s,
    	height : 40*s,
    	fontWeight : '700',
    	color : '#000000',
        textAlign: 'left',
        marginTop: 10,
        marginRight: 10,
    },
    // 价格
    goodRow : {
    	flexDirection : 'row',
    	alignItems: 'center',
    	marginTop : 5,
    	marginBottom : 10
    },
    nPrice : {
    	fontSize : 18*s,
    	fontWeight : '700',
    	marginRight : 10,
    	color : '#c40001'
    },
    yen :{
    	fontSize : 13*s
    },
    oPrice : {
    	fontSize : 12*s,
    	color : '#b0b0b0'
    },
    // 购买及按钮
    goodExtra : {
    	flexDirection :'row',
    	alignItems: 'center',
    	justifyContent : 'space-between'
    },
    goodSold : {
    	color : '#b0b0b0'
    },
    goodBtnWarp : {


    	// position : 'absolute',
    	// right : 10,
    	// top : -7,

    	// height : 35,
    	borderWidth : 1,
    	padding : 2,
    	borderColor : '#9E3121',
    	borderRadius : 3
    },
    goodBtn : {
    	color : '#9E3121'
    }

});

var ItemCell = React.createClass({

  propTypes: {
    goToBuyIt: PropTypes.func,
  },
  buyIt(itemTitle){
    this.props.goToBuyIt(itemTitle)
  },

	render() {
		var item = this.props.item;
		// console.log(this.props)
		return (
			<TouchableOpacity onPress={this.props.onSelect}>
				<View style={styles.container}>

					<Image style={styles.goodImg} source={{uri : 'http:'+item.img}} />

					<View style={styles.goodInfo}>

						<Text style={styles.goodTit} numberOfLines={2}>{item.txt}</Text>

						<View style={styles.goodRow}>
							<Text style={styles.nPrice}><Text style={styles.yen}>&yen;</Text> {item.orderprice || item.price}</Text>
							<Text style={styles.oPrice}>&yen;{item.originalprice}</Text>
						</View>
						<View style={styles.goodExtra}>
							<Text style={styles.goodSold}>{item.realMonthSellNum || 0}人已购买</Text>
							<View style={styles.goodBtnWarp} >
								<Text style={styles.goodBtn} onPress={()=>this.buyIt(item.txt)}>立即购买</Text>
							</View>

						</View>
					</View>

				</View>
			</TouchableOpacity>
		);
	}


})
module.exports = ItemCell
