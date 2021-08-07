import { StyleSheet } from "react-native";
export default StyleSheet.create({
    container:{
        alignItems:"center",
        justifyContent:"center",
        borderWidth:1,
        borderColor: "#e7e7e7",
        borderRadius: 8,
        width: 120,
        height:120,
        shadowOffset: {
            width: 0,
            height: 0,
          },
          shadowOpacity: 0.1,
          shadowRadius: 1,
          elevation: 3,

    },
    infoText:{
        fontSize:18,
        textAlign:"center",

    },
    infoNumber: {
        fontSize:14,
        textAlign:"center",
        lineHeight:24,
    }
});