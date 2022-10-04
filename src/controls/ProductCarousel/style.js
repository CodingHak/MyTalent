import { StyleSheet, Dimensions } from "react-native";
var { width } = Dimensions.get("window");

export default StyleSheet.create({
  item: {
    width: width / 3,
  },
  itemImage: {
    borderWidth:0.5,
    borderColor:'#e5e5e5',
    width: "95%",
    height: 140,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  indicatorSection: {
      height:20,
      justifyContent:'center',
      alignItems:'center',
      flexDirection:'row'
  },
  indicator:{
      width:8,
      height:8,
      backgroundColor:'#e5e5e5',
      borderRadius:10,
      marginLeft:5
  },
  heartIcon:{
    position:'absolute',
    top:5,
    right:5,
    width:15,
    height:15,
    resizeMode:'contain'
  }
});
