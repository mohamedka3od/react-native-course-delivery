import { StyleSheet } from "react-native";
export default StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",

    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#E7E7E7",
    // marginTop: 30,
    // marginHorizontal: 25,
    marginBottom: 16,
    paddingVertical: 14,
    paddingHorizontal: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2.22,
    elevation: 3,
  },
  contentContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom:16
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 8,
    // backgroundColor: "red",
    // marginBottom:5
  },
  rightView: {
    marginStart: 8,
  },
  title: {
    fontSize: 20,
    lineHeight: 32,
  },
  desc: {
    fontSize: 14,
    lineHeight: 24,
  },
  infoCardsContainer:{
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'space-evenly'
  }
});
