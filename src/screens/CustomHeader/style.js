import { StyleSheet } from "react-native";
import Colors from "../../utils/Colors";

export default StyleSheet.create({
  container: {
    backgroundColor: Colors.themeColor6,
  },
  iosMargin: {
    height: 40,
  },
  header: {
    height: 60,
    flexDirection: 'row',
    alignItems:'center',
    paddingHorizontal: 20,
    // paddingBottom:10
  },
  title:{
    fontFamily:Colors.font1,
    fontSize:18,
    color:Colors.themeColor1
  },
  drawerOpenContainer: {
    paddingHorizontal: 10,
    justifyContent: 'center',
  },
  drawerIcon:{
    width:20,
    height:20,
    resizeMode:'contain'
  },
  cartIcon:{
    width:20,
    height:20,
    resizeMode:'contain'
  },
  wishlistIcon:{
    width:20,
    height:20,
    resizeMode:'contain'
  },
 logo:{
    width:30,
    height:30,
    resizeMode:'contain',
  },
  searchContainer: {
    justifyContent: 'center',

  },
  cartContainer: {
    marginLeft: 15,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  wishlistContainer: {
    marginLeft: 20,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  searchBox: {
    backgroundColor: Colors.themeColor2,
    flexDirection: 'row',
    height: 30,
    borderRadius: 100,
  },
  searchIconContainer: {
    paddingHorizontal: 13,
    justifyContent: 'center',
  },
  magnifier: {
    width: 15,
    height: 15,
    resizeMode: 'contain',
  },
  searchTextContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  searchText: {
    width: '100%',
    color: Colors.themeColor1,
    fontFamily: Colors.font,
    fontSize: 15,
    paddingVertical:0
  },
});