import React from 'react';
import { Text , View ,Image} from 'react-native';
import styles from './styles';
import logo from '../../../assets/logo.png'
 const RepoHeader = ({imageSrc , text , containerStyle,textStyle}) => {
     return ( 
         <View style={[styles.container,containerStyle]} >
            
             <Image style={styles.image} source={logo}></Image>
             <Text style={[styles.text,textStyle]}>{text}</Text>
             
         </View>
        
      );
 }
  
 export  {RepoHeader};