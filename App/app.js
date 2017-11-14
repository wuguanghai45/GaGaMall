//根据页面
'use strict';

import React from 'react';
import {
  StatusBar,
  View,
  Platform
} from 'react-native';

import {
  StackNavigator,
} from 'react-navigation';

import AppMain from './pages/AppMain';

import {
  WebViewDetails,
  StoreList,
  StoreDetails,
  Splash,
  Search,
  OrderStatus,
  OrderSingle,
  OrderResult,
  OrderDetails,
  OrderConfirm,
  Order,
  Merchants,
  GoodDetails,
  Comment,
  Center,
  Cart,
  About,
  AddressM,
  Charge,
  ChargeModify,
  FeedBack,
  Language,
  Login,
  Modify,
  ModifyInformation,
  More,
  Prepaid,
  Register,
  ResetPwd,
  Setting,
  ShareToFriend,

} from "./pages";


const AppRoot = StackNavigator({
  Home: { screen: AppMain },
  WebViewDetails: { screen: WebViewDetails },
  StoreList: { screen: StoreList },
  StoreDetails: { screen: StoreDetails },
  Splash: { screen: Splash },
  Search: { screen: Search },
  OrderStatus: { screen: OrderStatus },
  OrderSingle: { screen: OrderSingle },
  OrderResult: { screen: OrderResult },
  OrderDetails: { screen: OrderDetails },
  OrderConfirm: { screen: OrderConfirm },
  Order: { screen: Order },
  Merchants: { screen: Merchants },
  GoodDetails: { screen: GoodDetails },
  Comment: { screen: Comment },
  Center: { screen: Center },
  Cart: { screen: Cart },
  About: { screen: About },
  AddressM: { screen: AddressM },
  Charge: { screen: Charge },
  ChargeModify: { screen: ChargeModify },
  FeedBack: { screen: FeedBack },
  Language: { screen: Language },
  Login: { screen: Login },
  Modify: { screen: Modify },
  ModifyInformation: { screen: ModifyInformation },
  More: { screen: More },
  Prepaid: { screen: Prepaid },
  Register: { screen: Register },
  ResetPwd: { screen: ResetPwd },
  Setting: { screen: Setting },
  ShareToFriend: { screen: ShareToFriend },
});

//import { NaviGoBack } from './utils/CommonUtils';

//import { registerApp } from 'react-native-wechat';

export const STATUS_BAR_HEIGHT = (Platform.OS === 'ios' ? 20 : 25)
export const ABOVE_LOLIPOP = Platform.Version && Platform.Version > 19

//var _navigator;

class App extends React.Component {
  constructor(props) {
    super(props);
    //registerApp('wx331c28ad7ffd35b0');
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <StatusBar
            barStyle='light-content'
            backgroundColor='transparent'
            style={{height: STATUS_BAR_HEIGHT}}
          />
        <AppRoot />
      </View>
    );
  }
}

export default App;

