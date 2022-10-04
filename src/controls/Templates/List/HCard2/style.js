import { StyleSheet,Dimensions } from "react-native";
import Colors from "../../../../utils/Colors";

export default StyleSheet.create({
    categoriesSection: {},
    categories: {
      flexDirection:'row',
      marginVertical: 15,
      paddingHorizontal: 20,
      flexWrap:'wrap',
      justifyContent:'space-between'
    },
    category1: {
      width:'60%',
      marginBottom:6,
      borderRadius:10,
      overflow:'hidden'
    },
    category2: {
      width:'38%',
      marginBottom:6,
      borderRadius:10,
      overflow:'hidden'
    },
    catLabel: {
      alignSelf: 'center',
      textAlign: 'center',
      color: Colors.themeColor1,
      marginTop: 10,
      fontSize: 15,
      fontFamily: Colors.font
    },
    catImage: {
      backgroundColor: '#e5e5e5',
      width: '100%',
      height:120,
      alignSelf: 'center',
      overflow:'hidden',
    },
});
