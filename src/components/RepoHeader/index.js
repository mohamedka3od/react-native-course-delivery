import React from 'react';
import { Text , View ,Image} from 'react-native';
import styles from './styles';
import logo from '../../../assets/logo.png'
import { limitTextLength } from '../../utils';
 const RepoHeader = ({imageSrc , text , containerStyle,textStyle, imageStyle}) => {
     return ( 
         <View style={[styles.container,containerStyle]} >
            
             <Image style={styles.image} source={imageSrc ? {uri : imageSrc} : logo}></Image>
             <Text style={[styles.text,textStyle]}>{limitTextLength(42,text)}</Text>
             
         </View>
        
      );
 }
  
 export  {RepoHeader};