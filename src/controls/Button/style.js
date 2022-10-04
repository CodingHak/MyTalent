import { StyleSheet } from "react-native";
import Colors from "../../utils/Colors";

export default StyleSheet.create({
    btn: {
      backgroundColor: Colors.themeColor1,
      paddingHorizontal: 30,
      alignSelf: 'center',
      paddingVertical: 17,
      borderRadius: 25,      
      elevation:5
    },
    label: {
      color: Colors.themeColor6,
      textAlign:'center',
      fontSize: 15,
      fontFamily:Colors.font
    },
  });