import { StyleSheet } from "react-native";
import Colors from "../../utils/Colors";

export default StyleSheet.create({
    container:{
        flex:1
    },
    header:{
        paddingTop:0,
        paddingBottom:10,
        paddingHorizontal:30,
        elevation:4,
        flexDirection:'row',
        alignItems:'center',
    },
    profileImage:{
        backgroundColor:Colors.themeColor4,
        borderRadius:50,
        width:60,
        height:60,
        // justifyContent:'center',
        alignItems:'center',
        marginRight:15,
    },
    profile:{
        justifyContent:'center'
    },
    img:{
        width:'100%',
        height:'100%'
    },
    crossimg:{
        width:20,
        height:20,        
        alignSelf:'flex-end',
        marginTop:20,
        marginRight:15
    },
    iosHeader:{
        width:'100%',
        backgroundColor:'#f2f2f2',
        height:40,
    },
    name:{
        color:Colors.themeColor1,
        fontFamily: Colors.font1,
        fontSize:15,
    },
    custId:{
        color:Colors.themeColor1,
        fontFamily: Colors.font,
        fontSize:14,       
    },
    join:{
        color:Colors.themeColor1,
        fontFamily: Colors.font,
        fontSize:14,
        marginTop:5
    },
    tabSection:{
        flex:1,
        marginHorizontal:30,
        marginTop:20,
    },
    tab:{
        flexDirection:'row',
        paddingVertical:15,
        borderBottomWidth:1,
        borderColor:Colors.themeColor5
    },
    tabIconContainer:{
        justifyContent:'center'
    },
    tabIcon:{
        width:24,
        height:24
    },
    tabIcon1:{
        width:16,
        height:16
    },
    tabLabelContainer:{
        justifyContent:'center',
        flex:1,
        marginLeft:15
    },
    tabLabel:{
        color:Colors.themeColor1,
        fontFamily: Colors.font,
        fontSize:15
    },
    signinbtntxt: {
        // backgroundColor: '#FF2227',
        width: '100%',
        fontFamily: Colors.font1,
        borderRadius: 5,
        height:20,
      },
})