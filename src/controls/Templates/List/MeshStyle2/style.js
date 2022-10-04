import { StyleSheet,Dimensions } from "react-native";
import Colors from "../../../../utils/Colors";

export default StyleSheet.create({
    categoriesSection: {},
    categories: {
      marginVertical: 15,
      paddingHorizontal: 20,
      flexDirection:'row'
    },
    category: {
      flex:1,  
      marginBottom:10,
      borderRadius:10,
      overflow:'hidden'
    },
    img1:{
      width:'100%',
      aspectRatio:0.75/1,
      backgroundColor:'#e5e5e5',
      marginVertical:3,
      borderRadius:10,
      overflow:'hidden'
    },
    img2:{
      width:'100%',
      aspectRatio:1/0.7,
      backgroundColor:'#e5e5e5',
      marginVertical:3,
      borderRadius:10,
      overflow:'hidden'
    }
});
