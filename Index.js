/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
var React = require('react-native');

var {
    StyleSheet,
    View,
} = React;

var Index = React.createClass({
                              render: function() {
                              return (
                                      <View style={styles.container}>
                                      </View>
                                      );
                              }
                              });
var styles = StyleSheet.create({
                               //container
                               container:{
                               backgroundColor:'#F2F2F2',
                               flex:1,
                               },
                                                              });



module.exports = Index;