import { StyleSheet,Dimensions } from "react-native";
import Colors from "../../../../utils/Colors";

export default StyleSheet.create({
    categoriesSection: {},
    categories: {
      marginVertical: 15,
      paddingHorizontal: 0,
    },
    category: {
      width:Dimensions.get('window').width/1.5,
      marginRight:10,      
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
      aspectRatio:0.75/1,
      alignSelf: 'center',
      overflow:'hidden',
    },
});
