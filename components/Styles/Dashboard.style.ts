import { StyleSheet } from "react-native";

const Dash_styles = StyleSheet.create({
  parent: {
    flex: 1,
    flexDirection: "row",
  },
  profile_parent: {
    width: "15%",
    height: "70%",
    backgroundColor: "#FAFAFF",
    marginRight: "1%",
    flexDirection: "row",
    alignItems: "center",
  },
  bell_parent: {
    height: "100%",
    width: "30%",
    backgroundColor: "#FAFAFF",
    alignItems: "center",
    justifyContent: "center",
  },
  DP_parent: {
    width: "70%",
    height: "100%",
    backgroundColor: "#FAFAFF",
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  Dp: {
    width: "35%",
    aspectRatio: 1,
    backgroundColor: "#FAFAFF",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    borderRadius: 999,
  },
  name: {
    width: "65%",
    height: "100%",
    backgroundColor: "#FAFAFF",
    justifyContent: "center",
    paddingLeft: "5%",
  },
  card_heading: {
    width: "100%",
    height: "20%",
    backgroundColor: "#FFF",
    borderTopLeftRadius: 8,
    flexDirection: "row",
    borderTopRightRadius: 8,
    borderColor: "#E6E6EA",
    borderWidth: 1,
  },
  card_body: {
    width: "100%",
    height: "80%",
    backgroundColor: "ed",
    borderBottomRightRadius: 8,
    borderBottomLeftRadius: 8,
    overflow: "hidden",
  },
  card_body2: {
    width: "100%",
    height: "80%",
    backgroundColor: "white",
    borderBottomRightRadius: 8,
    borderBottomLeftRadius: 8,
    overflow: "hidden",
  },
  Heading_icon: {
    height: "40%",
    width: "30%",
    borderTopLeftRadius: 8,
    backgroundColor: "pink",
    flexDirection: "row",
    paddingHorizontal: "2%",
  },
  icons: {
    marginLeft: "10%",
    height: "100%",
    width: "20%",
    backgroundColor: "ble",
    alignItems: "center",
    justifyContent: "center",
  },
  title_text: {
    height: "100%",
    width: "80%",
    backgroundColor: "ble",
    alignItems: "flex-start",
    justifyContent: "center",
    marginRight: "10%",
  },
  card_heading2: {
    width: "100%",
    height: "28%",
    backgroundColor: "rd",
    borderTopLeftRadius: 8,
    flexDirection: "row",
    borderTopRightRadius: 8,
    borderColor: "#E6E6EA",
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "space-between",
  },
  Heading_icon2: {
    height: "80%",
    width: "50%",
    backgroundColor: "pin",
    alignSelf: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    // paddingRight: "17%",
  },
  count: {
    height: "60%",
    width: "40%",
    backgroundColor: "yellow",
  },
  button_parent: {
    height: "80%",
    width: "95%",
    backgroundColor: "ble",
    alignSelf: "center",
    alignItems: "center",
  },
  setting_parent: {
    height: "5%",
    width: "95%",
    backgroundColor: "yellw",
    alignItems: "center",
    alignSelf: "center",
  },
});

export default Dash_styles;
