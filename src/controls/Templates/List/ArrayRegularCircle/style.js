import { StyleSheet } from "react-native";
import Colors from "../../../../utils/Colors";

export default StyleSheet.create({
    categoriesSection: {},
    categories: {
      width:'90%',
      flexDirection: 'row',
      marginVertical: 15,
      paddingHorizontal: 30,
      alignSelf:'center',      
      flexWrap:'wrap',
      justifyContent:'space-between'
    },
    category: {      
      width:'30%',            
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
      aspectRatio:1/1,
      borderRadius: 200,
      alignSelf: 'center',
      overflow:'hidden'
    },
});
