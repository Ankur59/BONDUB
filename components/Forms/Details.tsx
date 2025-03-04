import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import styles from "../Styles/Form.style";
import Input_BOX from "../Particles/Text_input";
import { countries } from "@/Data/Data";
import { Picker } from "@react-native-picker/picker";
import Button from "../Particles/Button";

const Details = () => {
  const [Hospital, setHospital] = useState<string>("");
  const [Country, setCountry] = useState<String>("");
  const [State, setState] = useState<string>("");
  const [City, setCity] = useState<string>("");
  const [Area, setArea] = useState<string>("");
  const [Pincode, setPincode] = useState<string>("");
  const [Phone, setPhone] = useState<string>("");
  const [Email, setEmail] = useState<string>("");
  const [Email_optional, setEmail_optional] = useState<string>("");
  const [Website_optional, setWebsite_optional] = useState<string>("");
  const [countr_name, setcountries] = useState(countries);

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
            <Text style={styles.signup_txt}>Hospital Details</Text>
          </View>
          <View style={styles.input_parent}>
            <View
              style={{
                marginBottom: "1%",
                height: "15%",
                width: "90%",
                backgroundColor: "rd",
                alignItems: "center",
              }}
            >
              <Input_BOX
                change={setHospital}
                place="eg. Sri Murlidhar memorial Hospital"
                name={Hospital}
                security={false}
                title="Hospital Name"
              />
            </View>
            <View
              style={{
                marginBottom: "2%",
                height: "15%",
                width: "90%",
                backgroundColor: "rd",
                alignItems: "center",
              }}
            >
              <View
                style={{
                  height: "100%",
                  width: "90%",
                  backgroundColor: "yelow",
                  flexDirection: "row",
                  justifyContent: "space-around",
                }}
              >
                <View
                  style={{
                    width: "40%",
                    height: "100%",
                    backgroundColor: "ble",
                    justifyContent: "center",
                  }}
                >
                  <View style={{ height: "30%", justifyContent: "center" }}>
                    <Text style={{ color: "#66667A", fontSize: 14 }}>
                      Country
                    </Text>
                  </View>
                  <Picker
                    style={{
                      height: "70%",
                      borderRadius: 8,
                      backgroundColor: "white",
                      borderColor: "#E6E6EA",
                      fontSize: 15,
                      paddingHorizontal: 10,
                      color: "#1A1A1F",
                    }}
                    onValueChange={(itemValue) =>
                      setCountry(itemValue as string)
                    }
                  >
                    {countr_name &&
                      countr_name.map((Item, index) => {
                        return (
                          <Picker.Item key={index} value={Item} label={Item} />
                        );
                      })}
                  </Picker>
                </View>
                <View
                  style={{
                    width: "40%",
                    height: "100%",
                    backgroundColor: "rd",
                    justifyContent: "center",
                  }}
                >
                  <View style={{ height: "30%", justifyContent: "center" }}>
                    <Text style={{ color: "#66667A", fontSize: 14 }}>
                      State
                    </Text>
                  </View>
                  <Picker
                    style={{
                      height: "70%",
                      borderRadius: 8,
                      backgroundColor: "white",
                      borderColor: "#E6E6EA",
                      fontSize: 15,
                      paddingHorizontal: 10,
                    }}
                    onValueChange={(itemValue) => setState(itemValue as string)}
                  >
                    {countr_name &&
                      countr_name.map((Item, index) => {
                        return (
                          <Picker.Item key={index} value={Item} label={Item} />
                        );
                      })}
                  </Picker>
                </View>
              </View>
            </View>
            <View
              style={{
                height: "15%",
                width: "90%",
                backgroundColor: "rd",
                alignItems: "center",
                marginTop: "1.9%",
              }}
            >
              <View
                style={{
                  height: "100%",
                  width: "90%",
                  backgroundColor: "yellw",
                  flexDirection: "row",
                  justifyContent: "space-around",
                }}
              >
                <View
                  style={{
                    width: "40%",
                    height: "100%",
                    backgroundColor: "rd",
                    justifyContent: "center",
                  }}
                >
                  <Input_BOX
                    title="City"
                    change={setCity}
                    security={false}
                    place="eg. Patna"
                    name={City}
                    width={"100%"}
                    paddingLeft={"4%"}
                  />
                </View>
                <View
                  style={{
                    width: "40%",
                    height: "100%",
                    backgroundColor: "re",
                    justifyContent: "center",
                  }}
                >
                  <Input_BOX
                    title="Area"
                    change={setArea}
                    security={false}
                    place="eg. Nathchak"
                    name={Area}
                    width={"100%"}
                    paddingLeft={"4%"}
                  />
                </View>
              </View>
            </View>
            <View
              style={{
                marginBottom: "2%",
                height: "15%",
                width: "90%",
                backgroundColor: "rd",
                alignItems: "center",
                marginTop: "1.9%",
              }}
            >
              <View
                style={{
                  height: "100%",
                  width: "90%",
                  backgroundColor: "yelow",
                  flexDirection: "row",
                  justifyContent: "space-around",
                }}
              >
                <View
                  style={{
                    width: "40%",
                    height: "100%",
                    backgroundColor: "rd",
                    justifyContent: "center",
                  }}
                >
                  <Input_BOX
                    title="Pincode"
                    change={setPincode}
                    security={false}
                    place="eg. 803213"
                    name={Pincode}
                    width={"100%"}
                    paddingLeft={"4%"}
                  />
                </View>
                <View
                  style={{
                    width: "40%",
                    height: "100%",
                    backgroundColor: "rd",
                    justifyContent: "center",
                  }}
                >
                  <Input_BOX
                    title="Hospital's Phone Number"
                    change={setPhone}
                    security={false}
                    place="eg. 993574318"
                    name={Phone}
                    width={"100%"}
                    paddingLeft={"4%"}
                  />
                </View>
              </View>
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
                change={setEmail}
                security={false}
                place="eg. emailid@gmail.com"
                name={Email}
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
                title="Hospital's Email ID (Optional)"
                change={setEmail_optional}
                security={false}
                place="eg. emailid@gmail.com"
                name={Email_optional}
              />
            </View>
            <View
              style={{
                marginBottom: "2%",
                height: "15%",
                width: "90%",
                alignItems: "center",
                backgroundColor: "rd",
              }}
            >
              <Input_BOX
                title="Hospital's Website (Optional)"
                change={setWebsite_optional}
                security={false}
                place="eg. emailid@gmail.com"
                name={Website_optional}
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
              <Button text="Create Account & Continue" />

              <View
                style={{
                  flexDirection: "row",
                  marginTop: "2.9%",
                  alignItems: "center",
                }}
              >
                <Text style={{ color: "#A1A1B0" }}>
                  Already have an account?{" "}
                  <TouchableOpacity>
                    <Text style={{ color: "#047450", cursor: "pointer" }}>
                      Login
                    </Text>
                  </TouchableOpacity>
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

export default Details;
