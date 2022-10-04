import {StyleSheet} from 'react-native';
import Colors from '../../utils/Colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  sectionImg: {
    marginTop: 70,
    alignSelf: 'center',
  },
  loginImg: {width: 250, height: 250, resizeMode: 'contain'},
  sectionForm: {
    marginBottom: 60,
    alignItems: 'center',
    paddingHorizontal: 40,
  },
  label1: {
    color: Colors.themeColor1,
    fontSize: 25,
    fontFamily: Colors.font,
    textAlign: 'center',
    marginBottom: 15,
  },
  label2: {
    color: Colors.themeColor7,
    fontSize: 13,
    fontFamily: Colors.font,
    textAlign: 'center',
    marginBottom: 35,
  },
  mainText: {
    // color: "white",
    fontFamily: Colors.font1,
    textTransform: 'uppercase',
    fontSize: 17,
    lineHeight: 25,
    marginBottom: 20,
  },
  mainContainer: {
    marginTop: 50,
    alignItems: 'center',
  },
  forgetPassTxt: {
    color: '#FF2227',
    fontSize: 15,
    fontFamily: Colors.font1,
    marginVertical: 20,
  },
  registerPassTxt: {
    color: '#FF2227',
    fontSize: 15,
    fontFamily: Colors.font1,
  },
  inputText: {
    marginVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    width: '100%',
    height: 45,
    fontFamily: Colors.font1,
    alignItems: 'center',
    color: Colors.themeColor1,
    backgroundColor: Colors.themeColor5,
    fontSize:15
  },
  signinbtntxt: {
    backgroundColor: '#FF2227',
    width: '100%',
    fontFamily: Colors.font1,
    borderRadius: 30,
    paddingHorizontal:15,
    paddingVertical:10
  },
  section1: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 30,
  },
  section2: {
    height: 50,
    marginBottom: 15,
    justifyContent: 'center',
  },
  getBtn: {
    width: '90%',
  },
  img: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginTop: 50,
  },
  widget: {
    borderWidth: 1,
    borderColor: Colors.themeColor1,
    borderRadius: 100,
    paddingVertical: 15,
    paddingHorizontal: 20,
    flexDirection: 'row',
    width: '80%',
    marginTop: 50,
    width: '80%',
    alignSelf: 'center',
  },
  textbox: {
    color: Colors.themeColor1,
    fontFamily: Colors.font,
    fontSize: 16,
    paddingVertical: 0,
    margin: 0,
  },
  arrowRight: {
    width: 16,
    height: 16,
  },
});
