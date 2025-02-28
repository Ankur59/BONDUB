import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import styles from "./Form.style";
import Input_BOX from "./Text_input";
import Feather from "@expo/vector-icons/Feather";
import Button from "./Button";

const Login = () => {
  const [name, setname] = useState("");
  const [number, setnumber] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [show, setshow] = useState(false);
  const [show2, setshow2] = useState(false);
  return (
    <View style={styles.Signup_container}>
      <View style={styles.form_parent}>
        <View style={styles.form_container}>
          {/* This is just a empty view for top spacing */}
          <View
            style={{
              backgroundColor: "yelow",
              height: "4%",
              width: "90%",
              marginLeft: "5%",
            }}
          ></View>
          {/* -- */}
          <View style={styles.signup}>
            <Text style={styles.signup_txt}>Login</Text>
          </View>
          <View style={styles.input_parent}>
            <View
              style={{
                marginBottom: "2%",
                height: "30%",
                width: "90%",

                alignItems: "center",
              }}
            >
              <Input_BOX
                title="Phone Number"
                change={setnumber}
                security={false}
                place="eg. 993574318"
                name={number}
              />
            </View>

            <View
              style={{
                marginBottom: "2%",
                height: "30%",
                width: "90%",
                alignItems: "center",
              }}
            >
              <Input_BOX
                title="Password"
                change={setpassword}
                security={show}
                place=""
                name={password}
                rightIcon={
                  <TouchableOpacity onPress={() => setshow(!show)}>
                    <Feather
                      name={show ? "eye-off" : "eye"}
                      size={20}
                      color="#66667A"
                    />
                  </TouchableOpacity>
                }
              />
            </View>
            <View
              style={{
                marginBottom: "2%",
                height: "100%",
                width: "80%",
                alignItems: "center",
              }}
            >
              <Button height={"20%"} text="Login" />
            </View>
          </View>
          <View
            style={{
              backgroundColor: "blu",
              height: "30%",
              width: "100%",
              marginTop: "2%",
              alignItems: "center",
            }}
          >
            <View
              style={{
                height: "29%",
                width: "90%",
                marginLeft: "5%",
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "center",
              }}
            >
              {/*  */}
              <View style={styles.login}>
                <Text style={{ color: "#A1A1B0", fontSize: 16 }}>
                  Don't have an account?{" "}
                  <Text style={{ color: "#047450", cursor: "pointer" }}>
                    Signup
                  </Text>
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.img_parent}>
        <Image
          source={require("../assets/images/login-illustration.jpg")}
          style={styles.img_style}
        />
      </View>
    </View>
  );
};

export default Login;
