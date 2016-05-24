var React = require('react-native');
var FristPage = require('./views/fristPage');
var ShoppingCart = require('./views/shoppingCart');
var Settings = require('./views/settings');

// 声明组件给React
var {
    AppRegistry,// app注册，即工程进入rn入口
    NavigatorIOS,// 导航栏组件
    StyleSheet,// 样式组件
    Text,// text组件
    View,// view组件
    TabBarIOS,// 标签栏组件
    StatusBarIOS, // 状态栏组件
    ActivityIndicatorIOS,// 指示器组件
    Image,
} = React;

import TabBarNavigator from 'react-native-tabbar-navigator';
var NV = React.createClass({

   render: function(){
   return(
      <TabBarNavigator
        navTintColor='#8B0F00'
        navBarTintColor='white'
        tabTintColor='white'
        tabBarTintColor='#8B0F00'>
        <TabBarNavigator.Item title='首页' icon={require('image!buildings')} defaultTab>
          <FristPage />
        </TabBarNavigator.Item>
        <TabBarNavigator.Item title='购物车' icon={require('image!shippingCart')}>
          <ShoppingCart />
        </TabBarNavigator.Item>
        <TabBarNavigator.Item title='我' icon={require('image!me')}>
          <Settings />
        </TabBarNavigator.Item>
      </TabBarNavigator>
     );
   }
});

var styles = StyleSheet.create({
    segmentControlContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    segmentControl: {
        width: 160
    }
});


AppRegistry.registerComponent('app', () => NV);
