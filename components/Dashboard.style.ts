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
    height: "23%",
    backgroundColor: "yellow",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  card_body: {
    width: "100%",
    height: "87%",
    backgroundColor: "white",
    borderBottomRightRadius: 8,
    borderBottomLeftRadius: 8,
  },
});

export default Dash_styles;
