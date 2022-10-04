import { StyleSheet } from "react-native";
import Colors from "../../utils/Colors";

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center',
    alignItems: 'center',
  },
  topLogo: {
    width: 200,
    height: 100,
    resizeMode: 'contain',
    position:'absolute'
  },
  bottomLogo: {
    width: 200,
    height: 50,
    resizeMode: 'contain',
    position:'absolute'
  },
  label:{
    color: Colors.themeColor1,
    fontSize: 17,
    fontFamily: Colors.font,
    textAlign: 'center',
    marginBottom: 15,
  },
  btn:{
    width:'50%',
    backgroundColor:Colors.themeColor4
  },
  txtView:{
    position: 'absolute', 
    bottom: 20, 
    width: '100%'
  }
});