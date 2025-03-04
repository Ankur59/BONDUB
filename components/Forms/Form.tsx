import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import styles from "../Styles/Form.style";
import Input_BOX from "../Particles/Text_input";
import Feather from "@expo/vector-icons/Feather";
import Button from "../Particles/Button";
import AddDoctorModal from "../Doctors/Modals/AddDoctorModal";
import AddNurseModal from "../Nurse_Components/Modal/AddNurse";

const Form = () => {
  const [name, setname] = useState("");
  const [number, setnumber] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [show, setshow] = useState(false);
  const [show2, setshow2] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  return (
    <View style={styles.Signup_container}>
      <AddNurseModal
        visible={isModalVisible}
        onClose={() => setIsModalVisible(false)}
      />
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
            <Text style={styles.signup_txt}>Signup</Text>
          </View>
          <View style={styles.input_parent}>
            <View
              style={{
                marginBottom: "2%",
                height: "15%",
                width: "90%",
                alignItems: "center",
              }}
            >
              <Input_BOX
                change={setname}
                place="eg. Dr. Pankaj Kumar"
                name={name}
                security={false}
                title="Full Name"
              />
            </View>
            <View
              style={{
                marginBottom: "2%",
                height: "15%",
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
                height: "15%",
                width: "90%",
                alignItems: "center",
              }}
            >
              <Input_BOX
                title="Email-ID"
                change={setemail}
                security={false}
                place="eg. emailid@gmail.com"
                name={email}
              />
            </View>
            <View
              style={{
                marginBottom: "2%",
                height: "15%",
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
                height: "15%",
                width: "90%",
                alignItems: "center",
              }}
            >
              <Input_BOX
                title="Confirm password"
                change={setConfirmPassword}
                security={show2}
                place=""
                name={confirmPassword}
                rightIcon={
                  <TouchableOpacity onPress={() => setshow2(!show2)}>
                    <Feather
                      name={show2 ? "eye-off" : "eye"}
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
              <Button
                action={() => setIsModalVisible(!isModalVisible)}
                text="Signup"
              />
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
            <View style={styles.bottom_area}>
              {/*  */}
              <View style={styles.login}>
                <Text style={{ color: "#A1A1B0", fontSize: 16 }}>
                  Already have an account?{" "}
                  <Text style={{ color: "#047450", cursor: "pointer" }}>
                    Login
                  </Text>
                </Text>
              </View>
              {/*  */}
              <View style={styles.terms}>
                <Text style={{ color: "#A1A1B0" }}>
                  By signing up you agree to our{" "}
                  <Text style={{ color: "#4B3FF3", cursor: "pointer" }}>
                    terms & conditions
                  </Text>{" "}
                  and our{" "}
                  <Text style={{ color: "#4B3FF3", cursor: "pointer" }}>
                    privacy policy
                  </Text>
                </Text>
              </View>
              {/*  */}
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

export default Form;
