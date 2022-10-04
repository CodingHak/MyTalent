import { StyleSheet } from "react-native";
import Colors from "../../../../utils/Colors";

export default StyleSheet.create({
    categoriesSection: {},
    categories: {
      flex: 1,
      flexDirection: 'row',
      marginVertical: 15,
      paddingHorizontal: 30,
    },
    category: {      
      alignSelf:'center',
      marginRight:10
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
      width: 70,
      height: 70,
      borderRadius: 200,
      alignSelf: 'center',
      overflow:'hidden'
    },
});
