import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
  Signup_container: {
    backgroundColor: "#FFFFFF",
    flex: 1,
    flexDirection: "row",
  },
  form_parent: {
    width: "50%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  img_parent: {
    width: "50%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  img_style: {
    width: "96%",
    height: "97%",
    borderRadius: 24,
  },
  form_container: {
    height: "95%",
    width: "77%",
    alignItems: "center",
  },
  signup: {
    width: "90%",
    height: "7%",
    marginLeft: "5%",
    justifyContent: "center",
    marginBottom: 25,
  },
  signup_txt: {
    fontSize: 40,
    fontWeight: "600",
    marginLeft: "14%",
  },
  input_parent: {
    height: "60%",
    width: "90%",
    marginLeft: "5%",
    alignItems: "center",
  },
  input: {
    marginBottom: "3%",
  },
  button: {
    backgroundColor: "#4B3FF3",
    width: "90%",
    height: "10%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
  },
  btn_text: {
    color: "white",
    fontSize: 18,
  },
  header: {
    width: "100%",
    height: "30%",
    backgroundColor: "rd",
  },
  header_txt: {
    color: "#66667A",
  },
  Text_input_prnt: {
    backgroundColor: "lue",
    width: "100%",
    height: "70%",
    // marginLeft: "3%",
  },
  Text_input: {
    height: "90%",
    borderWidth: 1,
    borderColor: "#E6E6EA",
    justifyContent: "center",
    borderRadius: 8,
  },
  main: {
    flex: 1,
    height: "100%",
    width: "100%",
    borderColor: "#E6E6EA",
  },
  focused_main: {
    height: "100%",
    width: "100%",
    borderRadius: 8,
    borderColor: "#E6E6EA",
  },
  bottom_area: {
    height: "100%",
    width: "90%",
    marginLeft: "5%",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
  },
  terms: {
    height: "40%",
    width: "100%",
    alignItems: "flex-end",
    flexDirection: "row",
    paddingVertical: "7%",
    justifyContent: "center",
    textAlign: "center",
  },
  login: {},
});

export default styles;
