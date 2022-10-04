import { StyleSheet } from "react-native";
import Colors from "../../utils/Colors";

export default StyleSheet.create({
  container: {
    width: 100,
    borderWidth: 0.7,
    borderColor: Colors.themeColor1,
    borderRadius: 50,
    flexDirection: "row",
    paddingHorizontal: 2,
    paddingVertical: 2,
  },
  btn: {
    backgroundColor: "#e5e5e5",
    justifyContent: "center",
    alignItems: "center",
    width: 30,
    height: 30,
    borderRadius: 50,
  },
  label: {
    color: Colors.themeColor1,
    fontSize: 15,
    textAlign: "center",
    fontFamily: Colors.font,
  },
  label1: {
    color: Colors.themeColor1,
    fontSize: 23,
    fontFamily: Colors.font,
  },
  value: {
    flex: 1,
    justifyContent: "center",
  },
});
