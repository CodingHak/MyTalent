import { StyleSheet,Dimensions } from "react-native";
import Colors from "../../../../utils/Colors";

export default StyleSheet.create({
    categoriesSection: {},
    categories: {
      marginVertical: 15,
      paddingHorizontal: 20,
    },
    category: {
      flex:1,  
      marginBottom:10,
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
      aspectRatio:1/0.4,
      alignSelf: 'center',
      overflow:'hidden',
    },
});
