'use strict';
var React = require('react-native');

var {
    StyleSheet,
    View
} = React;

var fristPageTab = React.createClass({
                                     render: function(){
                                     return(
                                            <View style = {styles.container}>

                                            </View>
                                            );
                                     }
});

var styles = StyleSheet.create({
                               container:{
                               flex:1,
                               backgroundColor:'rgba(244.8,244.8,244.8,1.0)'
                               }
});

module.exports = fristPageTab;
