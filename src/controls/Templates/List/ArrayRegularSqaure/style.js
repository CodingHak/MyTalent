import { StyleSheet } from "react-native";
import Colors from "../../../../utils/Colors";

export default StyleSheet.create({
    categoriesSection: {},
    categories: {
      width:'95%',
      flexDirection:'row',
      flexWrap:'wrap',
      marginVertical: 15,
      paddingHorizontal: 0,  
      alignSelf:'center',
      justifyContent:'space-between'
    },
    category: {
      width:'24%',      
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
