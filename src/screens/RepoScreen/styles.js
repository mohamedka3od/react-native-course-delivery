import { StyleSheet } from "react-native";
export default StyleSheet.create({
header:{
    backgroundColor:'#ffffff',
    borderBottomWidth:1,
    borderBottomColor:'#E7E7E7'
},
headerText:{
    color :'#000000',
    fontSize:24,
},
description:{
    fontSize:18,
    color:"#656565",
},
contentContainer:{
    paddingHorizontal:16,
    paddingTop: 12
},
btn:{
    backgroundColor:"teal",
    marginTop :16,
    alignSelf: "center",
    paddingVertical: 10,
    paddingHorizontal:10,
    borderRadius:8,
},
btnText:{
    color:"#ffffff"
},
row:{
    flexDirection:"row",
    alignItems:"center",
    justifyContent:'space-around',
    marginBottom:16
}
});