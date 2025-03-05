import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import styles from "../Styles/Form.style";
import Input_BOX from "../Particles/Text_input";
import Feather from "@expo/vector-icons/Feather";
import Button from "../Particles/Button";

const Login = () => {
  const [number, setnumber] = useState("");
  const [password, setpassword] = useState("");
  const [show, setshow] = useState(false);
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
          <View style={styles.input_parent2}>
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
                height: "50%",
                width: "80%",
                alignItems: "center",
              }}
            >
              <Button height={"40%"} text="Login" />
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
                height: "70%",
                width: "90%",
                marginLeft: "5%",
                backgroundColor: "rd",
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
          source={require("../../assets/images/login-illustration.jpg")}
          style={styles.img_style}
        />
      </View>
    </View>
  );
};

export default Login;
