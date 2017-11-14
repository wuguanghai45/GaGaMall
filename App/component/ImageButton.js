/**
 * 图片背景,加入文字按钮
 */
'use strict';
import React from 'react';
import PropTypes from "prop-types";

import{
    View,
    Text,
    TouchableOpacity,
    ImageBackground,
    StyleSheet,
} from 'react-native';
const ImageButton = ({ onPress, title, icon}) => (
  <TouchableOpacity style={styles.wrap_style} onPress={onPress}>
      <ImageBackground style={styles.item_img} source={icon}>
         <Text style={{alignSelf:'center',fontSize:12}}>{title}</Text>
      </ImageBackground>
  </TouchableOpacity>
);
const styles=StyleSheet.create({
    wrap_style:{
       height:25,
    },
    item_img:{
       width:76,
       height:25,
       justifyContent:'center',
    },
});
export default ImageButton;
