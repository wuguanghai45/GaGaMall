/**
 * 城市选择
 */
'use strict';
import React from 'react';
import PropTypes from "prop-types";
import {
  Image,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

//import { NaviGoBack } from '../utils/CommonUtils';
import ScrollableTabView,{DefaultTabBar} from 'react-native-scrollable-tab-view';
import OrderDetails from './OrderDetails';
import OrderStauts from './OrderStatus';

class OrderSingle extends React.Component {
  static propTypes = {
    navigation: PropTypes.object,
  }

  constructor(props) {
    super(props);
    this.buttonBackAction=this.buttonBackAction.bind(this);    
    this.state={

    }
  } 
    //返回
  buttonBackAction(){
    this.props.navigation.goBack();
  }

  render() {
    const { navigation } = this.props;
    const params = navigation.state.params;
    return (
       <View style={{backgroundColor:'#fff',flex:1}}>
          <View style={{height:48,backgroundColor:'black',flexDirection:'row'}}>
                <TouchableOpacity onPress={() => {this.buttonBackAction()}} 
                                  style={{width:48,height:48,alignItems:'center',justifyContent:'center'}}>
                    <Image 
                          style={{width:13,height:20}}
                          source={require('../imgs/ic_center_back.png')}
                     />
                </TouchableOpacity>  
                <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                    <Text style={{fontSize:18,color:'white',alignSelf:'center'}}>{params.order.shopName}</Text>   
                </View>  
                <View style={{width:48,height:48}}/>
          </View>
          <ScrollableTabView
                renderTabBar={() => <DefaultTabBar/>}
                tabBarUnderlineColor='#f00'
                tabBarBackgroundColor='#fff'
                tabBarActiveTextColor='#f00'
                tabBarInactiveTextColor='#000'
                tabBarTextStyle={{fontSize: 17}}>
                <OrderDetails tabLabel='订单详情' />
                <OrderStauts tabLabel='订单状态'/>
          </ScrollableTabView>
      </View>
    );
  }
}

export default OrderSingle;
